import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, speed: 0, targetX: 0, targetY: 0 });
  const pointsRef = useRef([]);
  const particlesRef = useRef([]);
  const requestRef = useRef();

  // Configuration
  const tailLength = 80;
  const baseHelixRadius = 18;
  const helixFrequency = 0.1;
  const helixRotationSpeed = 0.06;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      
      // Detect if hovering over interactive elements
      const target = e.target;
      const isHovering = target.closest('a, button, [role="button"]');
      mouseRef.current.isHovering = !!isHovering;
    };

    const createParticle = (x, y, speed) => ({
      x,
      y,
      vx: (Math.random() - 0.5) * (speed * 0.4),
      vy: (Math.random() - 0.5) * (speed * 0.4) - Math.random() * 2, // Slight upward drift
      size: Math.random() * 2.5 + 0.5,
      life: 1.0,
      decay: Math.random() * 0.02 + 0.01,
      hue: 200 + Math.random() * 60,
      twinkle: Math.random() * 0.1
    });

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    let time = 0;

    const animate = () => {
      const hoverMultiplier = mouseRef.current.isHovering ? 2.5 : 1;
      time += helixRotationSpeed * (mouseRef.current.isHovering ? 1.5 : 1);
      
      // Smooth mouse movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.25;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.25;

      const dx = mouseRef.current.x - mouseRef.current.lastX;
      const dy = mouseRef.current.y - mouseRef.current.lastY;
      mouseRef.current.speed = Math.sqrt(dx * dx + dy * dy);
      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add current mouse position to points
      pointsRef.current.unshift({ x: mouseRef.current.x, y: mouseRef.current.y });
      if (pointsRef.current.length > tailLength) {
        pointsRef.current.pop();
      }

      // Generate ambient sparkles (more frequent on hover)
      if (Math.random() > (mouseRef.current.isHovering ? 0.2 : 0.5)) {
        particlesRef.current.push(createParticle(mouseRef.current.x, mouseRef.current.y, mouseRef.current.speed + (mouseRef.current.isHovering ? 5 : 2)));
      }

      ctx.globalCompositeOperation = 'screen';

      // 1. Update and Draw Particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          i--;
          continue;
        }

        const flicker = Math.sin(Date.now() * 0.01 + p.twinkle) * 0.2 + 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life * (mouseRef.current.isHovering ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 75%, ${p.life * flicker})`;
        ctx.shadowBlur = 10 * p.life;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 50%, ${p.life})`;
        ctx.fill();
      }

      // 2. Draw DNA Ribbon Structure
      if (pointsRef.current.length > 2) {
        ['cyan', 'magenta'].forEach((color, strandIdx) => {
          ctx.beginPath();
          ctx.lineWidth = 2.5 * hoverMultiplier;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          
          for (let i = 0; i < pointsRef.current.length - 1; i++) {
            const p1 = pointsRef.current[i];
            const p2 = pointsRef.current[i + 1];
            
            const progress = i / tailLength;
            const opacity = Math.pow(1 - progress, 1.5);
            const phase = time + i * helixFrequency + (strandIdx * Math.PI);
            
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const angle = Math.atan2(dy, dx);
            
            const perpX = Math.cos(angle + Math.PI / 2);
            const perpY = Math.sin(angle + Math.PI / 2);
            
            const dynamicRadius = baseHelixRadius * (1 + mouseRef.current.speed * 0.03) * (1 - progress * 0.6) * (i === 0 && mouseRef.current.isHovering ? 2 : 1);
            const offset = Math.sin(phase) * dynamicRadius;
            
            const sx = p1.x + perpX * offset;
            const sy = p1.y + perpY * offset;

            if (i === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
            
            if (strandIdx === 0 && i % 8 === 0) {
              const offsetOpposite = Math.sin(phase + Math.PI) * dynamicRadius;
              const ox = p1.x + perpX * offsetOpposite;
              const oy = p1.y + perpY * offsetOpposite;
              
              const grad = ctx.createLinearGradient(sx, sy, ox, oy);
              grad.addColorStop(0, `rgba(0, 255, 255, ${opacity * 0.4})`);
              grad.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.8})`);
              grad.addColorStop(1, `rgba(255, 0, 255, ${opacity * 0.4})`);
              
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(sx, sy);
              ctx.lineTo(ox, oy);
              ctx.strokeStyle = grad;
              ctx.lineWidth = 1 * opacity * hoverMultiplier;
              ctx.stroke();
              ctx.restore();
            }
          }
          
          ctx.strokeStyle = color === 'cyan' ? `rgba(0, 255, 255, ${0.6 * hoverMultiplier})` : `rgba(255, 0, 255, ${0.6 * hoverMultiplier})`;
          ctx.shadowBlur = 15 * hoverMultiplier;
          ctx.shadowColor = color === 'cyan' ? 'cyan' : 'magenta';
          ctx.stroke();
        });
      }

      // 3. Main Cursor Spotlight
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 4 * hoverMultiplier, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.shadowBlur = 20 * hoverMultiplier;
      ctx.shadowColor = '#fff';
      ctx.fill();

      ctx.shadowBlur = 0;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CustomCursor;

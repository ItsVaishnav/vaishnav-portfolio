export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white">Vaishnav</h1>

        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Skills</li>
          <li className="hover:text-white cursor-pointer transition">Projects</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

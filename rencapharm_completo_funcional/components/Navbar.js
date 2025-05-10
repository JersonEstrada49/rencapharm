export default function Navbar() {
  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow flex justify-between items-center">
      <img src="/logo.png" alt="RENCAPHARM" className="h-12" />
      <button
        onClick={() =>
          document.documentElement.classList.toggle("dark")
        }
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Modo Día/Noche
      </button>
    </nav>
  );
}
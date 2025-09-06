export default function Navbar() {
  return (
    <header className="py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-7 h-7" />
          <span className="text-xl font-semibold">Syllabary</span>
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm text-gray-600">
          <a href="#features">Features</a>
          <a href="#integrations">Integrations</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-sm">Sign in</button>
        </div>
      </div>
    </header>
  );
}

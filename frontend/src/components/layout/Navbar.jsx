const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          Golf<span className="text-purple-400">Impact</span>
        </h1>

        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full transition-all">
          Subscribe
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
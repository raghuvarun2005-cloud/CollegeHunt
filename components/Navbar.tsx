import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-bold tracking-tight"
        >

          <span className="text-white">
            College
          </span>

          <span className="text-blue-500">
            Hub
          </span>

        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10">

          <Link
            href="/"
            className="text-gray-300 hover:text-blue-400 text-base transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/colleges"
            className="text-gray-300 hover:text-blue-400 text-base transition duration-300"
          >
            Colleges
          </Link>

          <Link
            href="/compare"
            className="text-gray-300 hover:text-blue-400 text-base transition duration-300"
          >
            Compare
          </Link>

          <Link
            href="/saved"
            className="text-gray-300 hover:text-blue-400 text-base transition duration-300"
          >
            Saved
          </Link>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="border border-white/10 hover:border-blue-500 bg-white/5 hover:bg-blue-500/10 px-5 py-2 rounded-xl text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
          >

            Login

          </Link>

        </div>

      </div>

    </header>
  );
};

export default Navbar;
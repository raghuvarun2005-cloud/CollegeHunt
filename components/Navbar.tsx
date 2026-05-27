import Link from "next/link";

const Navbar = () => {

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-bold tracking-tight"
        >

          <span className="text-gray-900">
            College
          </span>

          <span className="text-blue-600">
            Hunt
          </span>

        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10">

          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 text-base"
          >
            Home
          </Link>

          <Link
            href="/colleges"
            className="text-gray-700 hover:text-blue-600 text-base"
          >
            Colleges
          </Link>

          <Link
            href="/compare"
            className="text-gray-700 hover:text-blue-600 text-base"
          >
            Compare
          </Link>

          <Link
            href="/saved"
            className="text-gray-700 hover:text-blue-600 text-base"
          >
            Saved
          </Link>

        </nav>

        {/* Login Button */}

        <Link
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-medium"
        >

          Login

        </Link>

      </div>

    </header>

  );

};

export default Navbar;
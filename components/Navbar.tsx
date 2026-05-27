import Link from "next/link";

const Navbar = () => {

  return (

    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-[#EBEBEB]">

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

  <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-[30px] font-bold tracking-tight"
          >

            <span className="text-[#222222]">

              College

            </span>

            <span className="text-[#FF385C]">

              Hunt

            </span>

          </Link>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-10">

            <Link
              href="/"
              className="text-[#717171] hover:text-[#FF385C] text-[16px] font-medium transition"
            >

              Home

            </Link>

            <Link
              href="/colleges"
              className="text-[#717171] hover:text-[#FF385C] text-[16px] font-medium transition"
            >

              Colleges

            </Link>

            <Link
              href="/compare"
              className="text-[#717171] hover:text-[#FF385C] text-[16px] font-medium transition"
            >

              Compare

            </Link>

            <Link
              href="/saved"
              className="text-[#717171] hover:text-[#FF385C] text-[16px] font-medium transition"
            >

              Saved

            </Link>

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            {/* Login Button */}

            <Link
              href="/login"
              className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-5 py-2.5 rounded-xl text-[15px] font-semibold transition"
            >

              Login

            </Link>

          </div>

        </div>

      </div>

    </header>

  );

};

export default Navbar;
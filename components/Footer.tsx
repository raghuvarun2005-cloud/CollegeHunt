import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h1 className="text-3xl font-bold text-white">

              College
              <span className="text-blue-500">
                Hub
              </span>

            </h1>

            <p className="mt-4 text-gray-400 leading-relaxed">

              Discover top colleges, compare placements
              and build your future career with confidence.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-lg font-semibold text-white">

              Quick Links

            </h2>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">

              <Link
  href="/"
  className="hover:text-white transition"
>
  Home
</Link>

              <Link
  href="/"
  className="hover:text-white transition"
>
  Colleges
</Link>

              <Link
  href="/"
  className="hover:text-white transition"
>
  Compare
</Link>

              <Link
  href="/"
  className="hover:text-white transition"
>
  Login
</Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h2 className="text-lg font-semibold text-white">

              Resources

            </h2>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">

              <p>Top Colleges</p>

              <p>Placements</p>

              <p>Scholarships</p>

              <p>Career Guidance</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h2 className="text-lg font-semibold text-white">

              Contact

            </h2>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">

              <p>support@collegehub.com</p>

              <p>+91 8688671829</p>

              <p>Hyderabad, India</p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">

          © 2026 CollegeHub. All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;
import Link from "next/link";

const Footer = () => {

  return (

    <footer className="bg-white border-t border-gray-200 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-bold text-gray-900">

              College

              <span className="text-blue-600">

                Hunt

              </span>

            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">

              Discover top colleges,
              compare placements and
              make smarter admission
              decisions.

            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-2xl font-semibold text-gray-900">

              Quick Links

            </h3>

            <div className="flex flex-col gap-4 mt-8 text-gray-600">

              <Link href="/">
                Home
              </Link>

              <Link href="/colleges">
                Colleges
              </Link>

              <Link href="/compare">
                Compare
              </Link>

              <Link href="/saved">
                Saved
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-2xl font-semibold text-gray-900">

              Resources

            </h3>

            <div className="flex flex-col gap-4 mt-8 text-gray-600">

              <p>Top Colleges</p>

              <p>Placements</p>

              <p>Scholarships</p>

              <p>Career Guidance</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold text-gray-900">

              Contact

            </h3>

            <div className="flex flex-col gap-4 mt-8 text-gray-600">

              <p>
                support@collegehunt.com
              </p>

              <p>
                +91 8688671829
              </p>

              <p>
                Hyderabad, India
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500">

          © 2026 CollegeHunt.
          All rights reserved.

        </div>

      </div>

    </footer>

  );

};

export default Footer;
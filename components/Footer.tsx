import Link from "next/link";

const Footer = () => {

  return (

    <footer className="bg-white border-t border-[#EBEBEB] mt-32">

      <div className="max-w-[1400px] mx-auto px-8 py-24">

        <div className="grid md:grid-cols-4 gap-16">

          {/* Brand */}

          <div>

            <h2 className="text-5xl font-bold tracking-tight text-[#222222]">

              College

              <span className="text-[#FF385C]">

                Hunt

              </span>

            </h2>

            <p className="mt-6 text-[#717171] leading-relaxed text-lg">

              Discover top colleges,
              compare placements and
              make smarter admission
              decisions with AI-powered
              insights.

            </p>

            {/* Socials */}

            <div className="flex gap-4 mt-8">

              <div className="w-12 h-12 rounded-full bg-[#FFF1F2] flex items-center justify-center text-xl">

                📘

              </div>

              <div className="w-12 h-12 rounded-full bg-[#FFF1F2] flex items-center justify-center text-xl">

                📸

              </div>

              <div className="w-12 h-12 rounded-full bg-[#FFF1F2] flex items-center justify-center text-xl">

                🐦

              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold text-[#222222]">

              Quick Links

            </h3>

            <div className="flex flex-col gap-5 mt-8 text-[#717171] text-lg">

              <Link
                href="/"
                className="hover:text-[#FF385C] transition"
              >

                Home

              </Link>

              <Link
                href="/colleges"
                className="hover:text-[#FF385C] transition"
              >

                Colleges

              </Link>

              <Link
                href="/compare"
                className="hover:text-[#FF385C] transition"
              >

                Compare

              </Link>

              <Link
                href="/saved"
                className="hover:text-[#FF385C] transition"
              >

                Saved

              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-2xl font-semibold text-[#222222]">

              Resources

            </h3>

            <div className="flex flex-col gap-5 mt-8 text-[#717171] text-lg">

              <p className="hover:text-[#FF385C] transition cursor-pointer">

                Top Colleges

              </p>

              <p className="hover:text-[#FF385C] transition cursor-pointer">

                Placements

              </p>

              <p className="hover:text-[#FF385C] transition cursor-pointer">

                Scholarships

              </p>

              <p className="hover:text-[#FF385C] transition cursor-pointer">

                Career Guidance

              </p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold text-[#222222]">

              Contact

            </h3>

            <div className="flex flex-col gap-5 mt-8 text-[#717171] text-lg">

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

        <div className="border-t border-[#EBEBEB] mt-20 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[#717171] text-lg">

            © 2026 CollegeHunt.
            All rights reserved.

          </p>

          <div className="flex gap-8 text-[#717171] text-lg">

            <p className="hover:text-[#FF385C] transition cursor-pointer">

              Privacy

            </p>

            <p className="hover:text-[#FF385C] transition cursor-pointer">

              Terms

            </p>

            <p className="hover:text-[#FF385C] transition cursor-pointer">

              Support

            </p>

          </div>

        </div>

      </div>

    </footer>

  );

};

export default Footer;
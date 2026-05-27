import Link from "next/link";

export default function HomePage() {

  return (

    <main className="min-h-screen bg-[#F7F7F7]">

      {/* Hero */}

      <section className="relative overflow-hidden">

        {/* Soft Glow */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF385C]/10 blur-[120px] rounded-full"></div>

        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-pink-200 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">

          <div className="text-center">

            <p className="text-[#FF385C] font-semibold text-lg">

              India’s Smart College Discovery Platform

            </p>

            <h1 className="mt-6 text-6xl md:text-7xl font-bold leading-tight text-[#222222] tracking-tight">

              Discover Your

              <span className="block text-[#FF385C]">

                Dream College

              </span>

            </h1>

            <p className="mt-8 text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">

              Compare colleges, analyze placements,
              explore courses and make smarter
              admission decisions with AI-powered
              insights.

            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

              <Link href="/colleges">

                <button className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-10 py-5 rounded-2xl text-lg font-semibold transition shadow-sm hover:shadow-md">

                  Explore Colleges

                </button>

              </Link>

              <Link href="/compare">

                <button className="bg-white border border-gray-300 hover:border-gray-400 px-10 py-5 rounded-2xl text-lg font-semibold text-gray-800 transition">

                  Compare Colleges

                </button>

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#222222]">

              Why Choose CollegeHunt?

            </h2>

            <p className="mt-5 text-gray-600 text-lg">

              Powerful tools to simplify your college journey.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}

            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 bg-[#FFF1F2] rounded-2xl flex items-center justify-center text-2xl">

                📊

              </div>

              <h3 className="text-2xl font-bold text-[#222222] mt-8">

                College Comparison

              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">

                Compare placements, fees,
                ratings and infrastructure
                between top colleges.

              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 bg-[#FFF1F2] rounded-2xl flex items-center justify-center text-2xl">

                🤖

              </div>

              <h3 className="text-2xl font-bold text-[#222222] mt-8">

                AI Score Engine

              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">

                Personalized weighted score
                system based on placements,
                fees and ratings.

              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 bg-[#FFF1F2] rounded-2xl flex items-center justify-center text-2xl">

                🎯

              </div>

              <h3 className="text-2xl font-bold text-[#222222] mt-8">

                Admission Predictor

              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">

                Predict admission probability
                using percentile, exam and
                category analysis.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}
import Link from "next/link";

export default function HomePage() {

  return (

    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">

        <div className="text-center">

          <p className="text-blue-600 font-semibold text-lg">

            India’s Smart College Discovery Platform

          </p>

          <h1 className="mt-6 text-6xl md:text-7xl font-bold leading-tight text-gray-900">

            Discover Your

            <span className="block text-blue-600">

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

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold">

                Explore Colleges

              </button>

            </Link>

            <Link href="/compare">

              <button className="border border-gray-300 hover:border-gray-500 px-10 py-5 rounded-2xl text-lg font-semibold text-gray-800">

                Compare Colleges

              </button>

            </Link>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}

            <div className="bg-white border border-gray-200 rounded-3xl p-10">

              <h3 className="text-2xl font-bold text-gray-900">

                College Comparison

              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">

                Compare placements, fees,
                ratings and infrastructure
                between top colleges.

              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white border border-gray-200 rounded-3xl p-10">

              <h3 className="text-2xl font-bold text-gray-900">

                AI Score Engine

              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">

                Personalized weighted score
                system based on placements,
                fees and ratings.

              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white border border-gray-200 rounded-3xl p-10">

              <h3 className="text-2xl font-bold text-gray-900">

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
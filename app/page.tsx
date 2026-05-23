import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-hidden relative">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Hero Section */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 flex flex-col items-center text-center">

        {/* Badge */}

        <div className="border border-blue-500/20 bg-blue-500/10 text-gray-300 px-5 py-2 rounded-full text-sm">

          🎓 India’s Smart College Discovery Platform

        </div>

        {/* Heading */}

        <h1 className="mt-10 text-5xl md:text-7xl font-black leading-tight max-w-5xl">

          Discover Your

          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

            Dream College

          </span>

        </h1>

        {/* Description */}

        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">

          Compare colleges, analyze placements,
          explore courses and discover the perfect
          university for your future career journey.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col sm:flex-row gap-5">

          <Link href="/colleges">

            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300">

              Explore Colleges →

            </button>

          </Link>

          <Link href="/compare">

            <button className="border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300">

              Compare Colleges →

            </button>

          </Link>

        </div>

      </section>

      {/* Stats Section */}

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-5xl font-bold text-white">
              500+
            </h2>

            <p className="mt-3 text-gray-400">
              Colleges
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-5xl font-bold text-cyan-400">
              50K+
            </h2>

            <p className="mt-3 text-gray-400">
              Students
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-5xl font-bold text-blue-400">
              98%
            </h2>

            <p className="mt-3 text-gray-400">
              Placements
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-5xl font-bold text-cyan-400">
              4.9
            </h2>

            <p className="mt-3 text-gray-400">
              Ratings
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
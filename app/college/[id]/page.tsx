import { colleges } from "@/data/colleges";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetailPage({
  params,
}: Props) {

  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === id
  );

  if (!college) {
    return (
      <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center text-3xl">

        College Not Found

      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white px-6 py-32 relative overflow-hidden">
      {/* Background Glow */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

<div className="absolute right-0 top-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Hero Image */}

        <div className="overflow-hidden rounded-3xl border border-gray-800">

          <img
            src={college.image}
            alt={college.name}
            className="w-full h-[450px] object-cover"
          />

        </div>

        {/* Content */}

        <div className="mt-12">

          <h1 className="text-5xl md:text-6xl font-bold">

            {college.name}

          </h1>

          <p className="mt-4 text-gray-400 text-xl">

            📍 {college.location}

          </p>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-4xl">

            {college.name} is one of the top institutions
            known for academic excellence, strong placements,
            modern campus facilities and outstanding student opportunities.

          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Fees */}

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <p className="text-gray-400 text-lg">
              Fees
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">

              {college.fees}

            </h2>

          </div>

          {/* Rating */}

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <p className="text-gray-400 text-lg">
              Rating
            </p>

            <h2 className="mt-4 text-4xl font-bold text-yellow-400">

              ⭐ {college.rating}

            </h2>

          </div>

          {/* Placements */}

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <p className="text-gray-400 text-lg">
              Placements
            </p>

            <h2 className="mt-4 text-4xl font-bold text-cyan-400">

              {college.placements}

            </h2>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-5 mt-16">

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold transition">

            Apply Now

          </button>

          <button className="border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-2xl text-lg font-semibold transition">

            Download Brochure

          </button>

        </div>

      </div>

    </main>
  );
}
import { colleges }
from "../../../data/colleges";

type Props = {

  params: Promise<{
    id: string;
  }>;

};

export default async function CollegeDetailPage({
  params,
}: Props) {

  // AWAIT PARAMS

  const { id } =
    await params;

  // FIND COLLEGE

  const college =
    colleges.find(
      (c) =>
        c.id === id
    );

  // NOT FOUND

  if (!college) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">

        College Not Found

      </div>

    );

  }

  return (

    <main className="min-h-screen bg-[#030712] text-white px-6 py-32">

      <div className="max-w-7xl mx-auto">

        {/* Image */}

        <img
          src={college.image}
          alt={college.name}
          className="w-full h-[450px] object-cover rounded-3xl"
        />

        {/* Content */}

        <div className="mt-10">

          <h1 className="text-5xl font-bold">

            {college.name}

          </h1>

          <p className="mt-4 text-gray-400 text-xl">

            📍 {college.location}

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-[#111827] p-6 rounded-2xl">

              <p className="text-gray-400">
                Fees
              </p>

              <h2 className="text-3xl font-bold mt-2 text-blue-400">

                ₹ {college.fees}

              </h2>

            </div>

            <div className="bg-[#111827] p-6 rounded-2xl">

              <p className="text-gray-400">
                Rating
              </p>

              <h2 className="text-3xl font-bold mt-2 text-yellow-400">

                ⭐ {college.rating}

              </h2>

            </div>

            <div className="bg-[#111827] p-6 rounded-2xl">

              <p className="text-gray-400">
                Placements
              </p>

              <h2 className="text-3xl font-bold mt-2 text-cyan-400">

                {college.placements}%

              </h2>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}
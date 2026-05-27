import Image from "next/image";
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

  const { id } =
    await params;

  const college =
    colleges.find(
      (c) =>
        c.id === id
    );

  // NOT FOUND

  if (!college) {

    return (

      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center">

        <h1 className="text-4xl font-bold text-[#222222]">

          College Not Found

        </h1>

      </div>

    );

  }

  return (

    <main className="relative min-h-screen bg-[#F7F7F7] px-6 md:px-8 py-36 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF385C]/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-pink-200 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Hero Image */}

        <div className="overflow-hidden rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">

          <Image
  src={college.image}
  alt={college.name}
  width={1400}
  height={700}
  className="w-full h-[520px] object-cover hover:scale-[1.03] transition duration-700"
  unoptimized
/>

        </div>

        {/* Main Content */}

        <div className="mt-14">

          {/* Heading */}

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>

              <h1 className="text-[56px] md:text-[72px] leading-[1.05] font-bold tracking-tight text-[#222222]">

                {college.name}

              </h1>

              <p className="mt-5 text-[#717171] text-[20px]">

                📍 {college.location}

              </p>

            </div>

            {/* Badge */}

            <div className="bg-[#FFF1F2] text-[#FF385C] px-7 py-4 rounded-full text-[16px] font-semibold w-fit shadow-sm">

              Top Ranked College

            </div>

          </div>

          {/* Stats Cards */}

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* Fees */}

            <div className="airbnb-card p-8 hover:-translate-y-1 transition-all duration-300">

              <p className="text-[#717171] text-[16px]">

                Annual Fees

              </p>

              <h2 className="text-[42px] font-bold mt-4 text-[#222222]">

                ₹ {college.fees}

              </h2>

            </div>

            {/* Rating */}

            <div className="airbnb-card p-8 hover:-translate-y-1 transition-all duration-300">

              <p className="text-[#717171] text-[16px]">

                Student Rating

              </p>

              <h2 className="text-[42px] font-bold mt-4 text-[#222222]">

                ⭐ {college.rating}

              </h2>

            </div>

            {/* Placements */}

            <div className="airbnb-card p-8 hover:-translate-y-1 transition-all duration-300">

              <p className="text-[#717171] text-[16px]">

                Placement Rate

              </p>

              <h2 className="text-[42px] font-bold mt-4 text-[#222222]">

                {college.placements}%

              </h2>

            </div>

          </div>

          {/* About Section */}

          <div className="airbnb-card p-10 mt-16">

            <h2 className="text-[40px] font-bold tracking-tight text-[#222222]">

              About College

            </h2>

            <p className="mt-6 text-[#717171] text-[18px] leading-relaxed max-w-5xl">

              {college.name} is one of India’s leading institutions known for academic excellence, modern infrastructure, strong placements and industry-focused education. Students gain access to experienced faculty, innovative learning opportunities, top recruiters and a vibrant campus environment designed to support both personal and professional growth.

            </p>

          </div>

          {/* Recruiters */}

          <div className="airbnb-card p-10 mt-16">

            <h2 className="text-[40px] font-bold tracking-tight text-[#222222]">

              Top Recruiters

            </h2>

            <div className="flex flex-wrap gap-4 mt-8">

              {Array.isArray(college.recruiters) &&
  college.recruiters.map(
                (company, index) => (

                <div
                  key={index}
                  className="bg-[#FFF1F2] text-[#FF385C] px-6 py-3 rounded-full text-[15px] font-semibold hover:bg-[#FFE4E8] transition"
                >

                  {company}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}
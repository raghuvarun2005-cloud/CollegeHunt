"use client";

import { useEffect, useState } from "react";
import CollegeCard from "@/components/CollegeCard";

type College = {
  id: string;
  name: string;
  location: string;
  fees: string;
  rating: number;
  placements: string;
  image: string;
};

export default function CollegesPage() {

  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchColleges = async () => {

      try {

        const response = await fetch(
          "/api/colleges"
        );

        const data = await response.json();

        setColleges(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchColleges();

  }, []);

  const filteredColleges = colleges.filter(
    (college) =>
      college.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      college.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* Background Video */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >

        <source src="/bg.mp4" type="video/mp4" />

      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#030712]/75"></div>

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Content */}

      <div className="relative z-10 px-6 py-32">

        {/* Heading */}

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">

            Explore Top

            <span className="block text-blue-500">
              Colleges
            </span>

          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">

            Discover the best colleges, compare placements,
            fees and ratings in one premium platform.

          </p>

        </div>

        {/* Search */}

        <div className="max-w-3xl mx-auto mt-14">

          <input
            type="text"
            placeholder="Search colleges or locations..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-blue-500 transition-all duration-300"
          />

        </div>

        {/* Loading State */}

        {loading && (

          <div className="text-center mt-20 text-2xl text-gray-400">

            Loading colleges...

          </div>

        )}

        {/* College Cards */}

        {!loading && (

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-16">

            {filteredColleges.map((college) => (

              <CollegeCard
                key={college.id}
                college={college}
              />

            ))}

          </div>

        )}

        {/* Empty State */}

        {!loading && filteredColleges.length === 0 && (

          <div className="text-center mt-20 text-2xl text-gray-400">

            No colleges found.

          </div>

        )}

      </div>

    </main>
  );
}
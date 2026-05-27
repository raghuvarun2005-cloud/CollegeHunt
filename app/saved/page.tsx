"use client";

import { useEffect, useState } from "react";

import CollegeCard
from "../../components/CollegeCard";

type SavedCollege = {

  id: string;
  name: string;
  location: string;
  fees: string;
  rating: number;
  placements: string;
  image: string;
  stream?: string;
  type?: string;

};

export default function SavedPage() {

  const [savedColleges, setSavedColleges] =
    useState<SavedCollege[]>([]);

  // Load colleges

  const loadSavedColleges = () => {

    const colleges =
      JSON.parse(
        localStorage.getItem(
          "savedColleges"
        ) || "[]"
      );

    setSavedColleges(colleges);

  };

  useEffect(() => {

    const timer = setTimeout(() => {

      loadSavedColleges();

    }, 0);

    window.addEventListener(
      "storage",
      loadSavedColleges
    );

    return () => {

      clearTimeout(timer);

      window.removeEventListener(
        "storage",
        loadSavedColleges
      );

    };

  }, []);

  return (

    <main className="relative min-h-screen bg-[#F7F7F7] px-6 md:px-8 py-36 overflow-hidden">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF385C]/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-pink-200 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Heading */}

        <div className="max-w-4xl">

          <h1 className="text-[56px] md:text-[72px] leading-[1.05] font-bold tracking-tight text-[#222222]">

            Saved

            <span className="block text-[#FF385C]">

              Colleges

            </span>

          </h1>

          <p className="mt-6 text-[#717171] text-[18px] leading-relaxed max-w-2xl">

            Your favourite shortlisted colleges in one place.

          </p>

        </div>

        {/* Cards */}

        {savedColleges.length > 0 ? (

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {savedColleges.map((college) => (

              <CollegeCard
                key={college.id}
                college={college}
              />

            ))}

          </div>

        ) : (

          /* Empty State */

          <div className="airbnb-card mt-20 p-16 text-center max-w-2xl">

            <div className="w-24 h-24 bg-[#FFF1F2] rounded-full flex items-center justify-center text-5xl mx-auto">

              ❤️

            </div>

            <h2 className="mt-8 text-[36px] font-bold tracking-tight text-[#222222]">

              No Saved Colleges

            </h2>

            <p className="mt-5 text-[#717171] text-[18px] leading-relaxed">

              Start exploring colleges and save your favourites
              to view them later in one place.

            </p>

          </div>

        )}

      </div>

    </main>

  );

}
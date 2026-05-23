"use client";

import { useEffect, useState } from "react";
import CollegeCard from "@/components/CollegeCard";

export default function SavedPage() {

  const [savedColleges, setSavedColleges] =
    useState<any[]>([]);

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

    loadSavedColleges();

    // Refresh when storage changes

    window.addEventListener(
      "storage",
      loadSavedColleges
    );

    return () => {

      window.removeEventListener(
        "storage",
        loadSavedColleges
      );

    };

  }, []);

  return (
    <main className="relative min-h-screen bg-[#030712] text-white px-6 py-32 overflow-hidden">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold">

            Saved

            <span className="block text-blue-500">
              Colleges
            </span>

          </h1>

          <p className="mt-6 text-gray-400 text-lg">

            Your favourite saved colleges.

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

          <div className="text-center mt-24 text-2xl text-gray-500">

            No saved colleges yet ❤️

          </div>

        )}

      </div>

    </main>
  );
}
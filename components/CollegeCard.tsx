"use client";

import { useState } from "react";

type CollegeCardProps = {
  college: {
    id: string;
    name: string;
    location: string;
    fees: string;
    rating: number;
    placements: string;
    image: string;
  };
};

const CollegeCard = ({
  college,
}: CollegeCardProps) => {

  const [saved, setSaved] =
    useState(false);

  const handleSave = async () => {

  try {

    // Existing colleges

    const existingColleges =
      JSON.parse(
        localStorage.getItem(
          "savedColleges"
        ) || "[]"
      );

    // Check exists

    const alreadyExists =
      existingColleges.some(
        (item: any) =>
          item.id === college.id
      );

    // UNSAVE

    if (alreadyExists) {

      const updatedColleges =
        existingColleges.filter(
          (item: any) =>
            item.id !== college.id
        );

      localStorage.setItem(
        "savedColleges",
        JSON.stringify(updatedColleges)
      );

      setSaved(false);
      window.dispatchEvent(new Event("storage"));

    }

    // SAVE

    else {

      const updatedColleges = [
        ...existingColleges,
        college,
      ];

      localStorage.setItem(
        "savedColleges",
        JSON.stringify(updatedColleges)
      );

      setSaved(true);
      window.dispatchEvent(new Event("storage"));

    }

    // Backend API

    await fetch("/api/save-college", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(college),

    });

  } catch (error) {

    console.error(error);

  }

};

  return (
    <div className="bg-[#111827]/80 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">

      {/* Image */}

      <img
        src={college.image}
        alt={college.name}
        className="w-full h-56 object-cover"
      />

      {/* Content */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">

          {college.name}

        </h2>

        <p className="text-gray-400 mt-2">

          📍 {college.location}

        </p>

        {/* Stats */}

        <div className="mt-6 space-y-3 text-gray-300">

          <div className="flex justify-between">

            <span>Fees</span>

            <span className="text-white font-medium">
              {college.fees}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Rating</span>

            <span className="text-yellow-400 font-medium">
              ⭐ {college.rating}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Placements</span>

            <span className="text-cyan-400 font-medium">
              {college.placements}
            </span>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          {/* View Details */}

          <a
            href={`/college/${college.id}`}
            className="flex-1"
          >

            <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-semibold transition">

              View Details

            </button>

          </a>

          {/* Save */}

          <button
            onClick={handleSave}
            className={`w-16 rounded-2xl text-2xl transition ${
              saved
                ? "bg-red-500"
                : "bg-[#1f2937] hover:bg-[#374151]"
            }`}
          >

            ❤️

          </button>

        </div>

      </div>

    </div>
  );
};

export default CollegeCard;
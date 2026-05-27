"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

type CollegeCardProps = {
  college: {
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
};

const CollegeCard = ({
  college,
}: CollegeCardProps) => {

  const [saved, setSaved] =
    useState(false);

  useEffect(() => {

    const existingColleges =
      JSON.parse(
        localStorage.getItem(
          "savedColleges"
        ) || "[]"
      );

    const alreadySaved =
      existingColleges.some(
        (item: any) =>
          item.id === college.id
      );

    setSaved(alreadySaved);

  }, [college.id]);

  const handleSave = async () => {

    try {

      const existingColleges =
        JSON.parse(
          localStorage.getItem(
            "savedColleges"
          ) || "[]"
        );

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

      }

      window.dispatchEvent(
        new Event("storage")
      );

      await fetch("/api/save-college", {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(college),

      });

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">

      {/* Image */}

      <img
        src={college.image}
        alt={college.name}
        className="w-full h-[240px] object-cover"
      />

      {/* Content */}

      <div className="p-8">

        {/* Top */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <h2 className="text-2xl font-bold text-gray-900">

              {college.name}

            </h2>

            <p className="text-gray-500 mt-2">

              {college.location}

            </p>

          </div>

          {/* Save Button */}

          <button
            onClick={handleSave}
            className={`w-12 h-12 rounded-full border text-xl ${
              saved
                ? "bg-red-50 border-red-200"
                : "border-gray-300"
            }`}
          >

            ❤️

          </button>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="bg-gray-50 rounded-2xl p-4">

            <p className="text-sm text-gray-500">

              Fees

            </p>

            <p className="text-lg font-semibold text-gray-900 mt-2">

              {college.fees}

            </p>

          </div>

          <div className="bg-gray-50 rounded-2xl p-4">

            <p className="text-sm text-gray-500">

              Rating

            </p>

            <p className="text-lg font-semibold text-gray-900 mt-2">

              {college.rating}

            </p>

          </div>

          <div className="bg-gray-50 rounded-2xl p-4">

            <p className="text-sm text-gray-500">

              Placement

            </p>

            <p className="text-lg font-semibold text-gray-900 mt-2">

              {college.placements}

            </p>

          </div>

        </div>

        {/* Button */}

        <div className="mt-8">

          <Link href={`/college/${college.id}`}>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold">

              View Details

            </button>

          </Link>

        </div>

      </div>

    </div>

  );

};

export default CollegeCard;
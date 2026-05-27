"use client";
import Image from "next/image";
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

    const timer = setTimeout(() => {

      const existingColleges =
        JSON.parse(
          localStorage.getItem(
            "savedColleges"
          ) || "[]"
        );

      const alreadySaved =
        existingColleges.some(
          (item: unknown) =>
            (item as { id: string }).id === college.id
        );

      setSaved(alreadySaved);

    }, 0);

    return () =>
      clearTimeout(timer);

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
          (item: unknown) =>
            (item as { id: string }).id === college.id
        );

      // UNSAVE

      if (alreadyExists) {

        const updatedColleges =
          existingColleges.filter(
            (item: unknown) =>
              (item as { id: string }).id !== college.id
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

    <div className="airbnb-card overflow-hidden hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">

      {/* Image */}

      <div className="relative">

        <Image
  src={college.image}
  alt={college.name}
  width={600}
  height={400}
  className="w-full h-[240px] object-cover"
  unoptimized
/>

        {/* Save Button */}

        <button
          onClick={handleSave}
          className={`absolute top-5 right-5 w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center text-lg transition ${
            saved
              ? "bg-white border-[#FF385C]"
              : "bg-white/80 border-white"
          }`}
        >

          ❤️

        </button>

      </div>

      {/* Content */}

      <div className="p-7">

        {/* Top */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <h2 className="text-[24px] leading-tight font-bold text-[#222222]">

              {college.name}

            </h2>

            <p className="text-[#717171] mt-3 text-[15px]">

              📍 {college.location}

            </p>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-3 mt-8">

          {/* Fees */}

          <div className="bg-[#F7F7F7] rounded-2xl p-4">

            <p className="text-[13px] text-[#717171]">

              Fees

            </p>

            <p className="text-[17px] font-semibold text-[#222222] mt-2">

              {college.fees}

            </p>

          </div>

          {/* Rating */}

          <div className="bg-[#F7F7F7] rounded-2xl p-4">

            <p className="text-[13px] text-[#717171]">

              Rating

            </p>

            <p className="text-[17px] font-semibold text-[#222222] mt-2">

              ⭐ {college.rating}

            </p>

          </div>

          {/* Placement */}

          <div className="bg-[#F7F7F7] rounded-2xl p-4">

            <p className="text-[13px] text-[#717171]">

              Placement

            </p>

            <p className="text-[17px] font-semibold text-[#222222] mt-2">

              {college.placements}%

            </p>

          </div>

        </div>

        {/* Button */}

        <div className="mt-8">

          <Link href={`/college/${college.id}`}>

            <button className="w-full h-[54px] bg-[#FF385C] hover:bg-[#E31C5F] text-white rounded-xl text-[16px] font-semibold transition-all duration-200 hover:scale-[1.01]">

              View Details

            </button>

          </Link>

        </div>

      </div>

    </div>

  );

};

export default CollegeCard;
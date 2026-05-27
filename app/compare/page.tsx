"use client";

import { useState } from "react";

import { colleges }
from "../../data/colleges";

type College = {

  id: string;
  name: string;
  location: string;
  fees: string;
  rating: number;
  placements: string;

};

export default function ComparePage() {

  const [college1, setCollege1] =
    useState<College>(colleges[0]);

  const [college2, setCollege2] =
    useState<College>(colleges[1]);

  const [placementWeight,
    setPlacementWeight] =
    useState(60);

  const [feesWeight,
    setFeesWeight] =
    useState(30);

  const [ratingWeight,
    setRatingWeight] =
    useState(10);

  const calculateScore = (
    college: College
  ) => {

    const placementScore =
      parseInt(college.placements) *
      placementWeight;

    const feesScore =
      (100 -
        parseInt(college.fees)) *
      feesWeight;

    const ratingScore =
      college.rating *
      ratingWeight *
      10;

    return (

      placementScore +
      feesScore +
      ratingScore

    );

  };

  const score1 =
    calculateScore(college1);

  const score2 =
    calculateScore(college2);

  const bestCollege =
    score1 > score2
      ? college1.id
      : college2.id;

  return (

    <main className="min-h-screen bg-[#F7F7F7] px-8 py-36">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF385C]/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-pink-200 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Heading */}

        <div className="max-w-4xl">

          <h1 className="text-[56px] md:text-[72px] leading-[1.05] font-bold tracking-tight text-[#222222]">

            Compare

            <span className="block text-[#FF385C]">

              Colleges

            </span>

          </h1>

          <p className="mt-8 text-[#717171] text-xl max-w-2xl leading-relaxed">

            Compare placements, fees,
            ratings and discover the
            best college for your goals.

          </p>

        </div>

        {/* Sliders */}

        <div className="airbnb-card p-8 md:p-10 mt-16">

          <h2 className="text-3xl font-bold text-[#222222]">

            Priority Weights

          </h2>

          <div className="space-y-10 mt-10">

            {/* Placement */}

            <div>

              <div className="flex justify-between mb-4">

                <p className="text-[#717171] text-[16px]">

                  Placement

                </p>

                <p className="font-semibold text-[16px]">

                  {placementWeight}%

                </p>

              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={placementWeight}
                onChange={(e) =>
                  setPlacementWeight(
                    Number(e.target.value)
                  )
                }
                className="w-full accent-[#FF385C]"
              />

            </div>

            {/* Fees */}

            <div>

              <div className="flex justify-between mb-4">

                <p className="text-[#717171] text-[16px]">

                  Fees

                </p>

                <p className="font-semibold text-[16px]">

                  {feesWeight}%

                </p>

              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={feesWeight}
                onChange={(e) =>
                  setFeesWeight(
                    Number(e.target.value)
                  )
                }
                className="w-full accent-[#FF385C]"
              />

            </div>

            {/* Rating */}

            <div>

              <div className="flex justify-between mb-4">

                <p className="text-[#717171] text-[16px]">

                  Rating

                </p>

                <p className="font-semibold text-[16px]">

                  {ratingWeight}%

                </p>

              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={ratingWeight}
                onChange={(e) =>
                  setRatingWeight(
                    Number(e.target.value)
                  )
                }
                className="w-full accent-[#FF385C]"
              />

            </div>

          </div>

        </div>

        {/* Selectors */}

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          <select
            className="bg-white border border-[#DDDDDD] rounded-xl px-5 py-4 text-[15px] shadow-sm outline-none focus:border-[#FF385C] transition"
            onChange={(e) =>
              setCollege1(
                colleges.find(
                  (c) =>
                    c.id === e.target.value
                )!
              )
            }
          >

            {colleges.map((college) => (

              <option
                key={college.id}
                value={college.id}
              >

                {college.name}

              </option>

            ))}

          </select>

          <select
            className="bg-white border border-[#DDDDDD] rounded-xl px-5 py-4 text-[15px] shadow-sm outline-none focus:border-[#FF385C] transition"
            onChange={(e) =>
              setCollege2(
                colleges.find(
                  (c) =>
                    c.id === e.target.value
                )!
              )
            }
          >

            {colleges.map((college) => (

              <option
                key={college.id}
                value={college.id}
              >

                {college.name}

              </option>

            ))}

          </select>

        </div>

        {/* Compare Cards */}

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* College 1 */}

          <div className={`airbnb-card p-8 hover:-translate-y-1 transition-all duration-300 ${
            bestCollege === college1.id
              ? "border-[#FF385C] shadow-[0_12px_30px_rgba(255,56,92,0.12)]"
              : ""
          }`}>

            {bestCollege === college1.id && (

              <div className="mb-6 inline-block bg-[#FFF1F2] text-[#FF385C] px-5 py-2 rounded-full text-sm font-semibold">

                Best Match

              </div>

            )}

            <h2 className="text-4xl font-bold text-[#222222]">

              {college1.name}

            </h2>

            <div className="space-y-6 mt-10">

              <div className="flex justify-between">

                <span className="text-[#717171]">
                  Location
                </span>

                <span className="font-semibold">
                  {college1.location}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-[#717171]">
                  Fees
                </span>

                <span className="font-semibold">
                  {college1.fees}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-[#717171]">
                  Rating
                </span>

                <span className="font-semibold">
                  ⭐ {college1.rating}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-[#717171]">
                  Placement
                </span>

                <span className="font-semibold">
                  {college1.placements}
                </span>

              </div>

              <div className="pt-8 border-t border-[#DDDDDD]">

                <p className="text-[#717171]">

                  Match Score

                </p>

                <h3 className="text-[52px] font-bold text-[#FF385C] mt-3">

                  {score1.toFixed(0)}

                </h3>

              </div>

            </div>

          </div>

          {/* College 2 */}

          <div className={`airbnb-card p-8 md:p-10 transition-all duration-300 ${
            bestCollege === college2.id
              ? "border-[#FF385C] shadow-[0_12px_30px_rgba(255,56,92,0.12)]"
              : ""
          }`}>

            {bestCollege === college2.id && (

              <div className="mb-6 inline-block bg-[#FFF1F2] text-[#FF385C] px-5 py-2 rounded-full text-sm font-semibold">

                Best Match

              </div>

            )}

            <h2 className="text-4xl font-bold text-[#222222]">

              {college2.name}

            </h2>

            <div className="space-y-6 mt-10">

              <div className="flex justify-between">

                <span className="text-[#717171]">
                  Location
                </span>

                <span className="font-semibold">
                  {college2.location}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-[#717171]">
                  Fees
                </span>

                <span className="font-semibold">
                  {college2.fees}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-[#717171]">
                  Rating
                </span>

                <span className="font-semibold">
                  ⭐ {college2.rating}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-[#717171]">
                  Placement
                </span>

                <span className="font-semibold">
                  {college2.placements}
                </span>

              </div>

              <div className="pt-8 border-t border-[#DDDDDD]">

                <p className="text-[#717171]">

                  Match Score

                </p>

                <h3 className="text-[52px] font-bold text-[#FF385C] mt-3">

                  {score2.toFixed(0)}

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}
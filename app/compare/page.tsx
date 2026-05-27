"use client";

import { useMemo, useState } from "react";

import { colleges }
from "../../data/colleges";

export default function ComparePage() {

  const [college1, setCollege1] =
    useState(colleges[0]);

  const [college2, setCollege2] =
    useState(colleges[1]);

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
    college: any
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

    <main className="min-h-screen bg-white px-6 py-32">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">

            Compare

            <span className="block text-blue-600">
              Colleges
            </span>

          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">

            Compare placements, fees,
            ratings and discover the
            best college for your goals.

          </p>

        </div>

        {/* Sliders */}

        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mt-14">

          <h2 className="text-2xl font-semibold text-gray-900">

            Priority Weights

          </h2>

          <div className="space-y-8 mt-8">

            {/* Placement */}

            <div>

              <div className="flex justify-between mb-3">

                <p className="text-gray-700">
                  Placement
                </p>

                <p className="font-semibold">
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
                className="w-full"
              />

            </div>

            {/* Fees */}

            <div>

              <div className="flex justify-between mb-3">

                <p className="text-gray-700">
                  Fees
                </p>

                <p className="font-semibold">
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
                className="w-full"
              />

            </div>

            {/* Rating */}

            <div>

              <div className="flex justify-between mb-3">

                <p className="text-gray-700">
                  Rating
                </p>

                <p className="font-semibold">
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
                className="w-full"
              />

            </div>

          </div>

        </div>

        {/* Selectors */}

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          <select
            className="border border-gray-300 rounded-2xl px-6 py-5 bg-white"
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
            className="border border-gray-300 rounded-2xl px-6 py-5 bg-white"
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

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* College 1 */}

          <div className={`border rounded-3xl p-8 ${
            bestCollege === college1.id
              ? "border-green-500 bg-green-50"
              : "border-gray-200"
          }`}>

            {bestCollege === college1.id && (

              <div className="mb-6 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                Best Match

              </div>

            )}

            <h2 className="text-3xl font-bold text-gray-900">

              {college1.name}

            </h2>

            <div className="space-y-5 mt-8">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Location
                </span>

                <span className="font-medium">
                  {college1.location}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Fees
                </span>

                <span className="font-medium">
                  {college1.fees}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Rating
                </span>

                <span className="font-medium">
                  {college1.rating}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Placement
                </span>

                <span className="font-medium">
                  {college1.placements}
                </span>

              </div>

              <div className="pt-6 border-t border-gray-200">

                <p className="text-gray-500">
                  Match Score
                </p>

                <h3 className="text-4xl font-bold text-blue-600 mt-2">

                  {score1.toFixed(0)}

                </h3>

              </div>

            </div>

          </div>

          {/* College 2 */}

          <div className={`border rounded-3xl p-8 ${
            bestCollege === college2.id
              ? "border-green-500 bg-green-50"
              : "border-gray-200"
          }`}>

            {bestCollege === college2.id && (

              <div className="mb-6 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                Best Match

              </div>

            )}

            <h2 className="text-3xl font-bold text-gray-900">

              {college2.name}

            </h2>

            <div className="space-y-5 mt-8">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Location
                </span>

                <span className="font-medium">
                  {college2.location}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Fees
                </span>

                <span className="font-medium">
                  {college2.fees}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Rating
                </span>

                <span className="font-medium">
                  {college2.rating}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Placement
                </span>

                <span className="font-medium">
                  {college2.placements}
                </span>

              </div>

              <div className="pt-6 border-t border-gray-200">

                <p className="text-gray-500">
                  Match Score
                </p>

                <h3 className="text-4xl font-bold text-blue-600 mt-2">

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
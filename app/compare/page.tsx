"use client";

import { useState } from "react";
import { colleges } from "@/data/colleges";

export default function ComparePage() {

  const [college1, setCollege1] = useState(colleges[0]);
  const [college2, setCollege2] = useState(colleges[1]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white px-6 py-32">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold">

            Compare

            <span className="block text-blue-500">
              Colleges
            </span>

          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">

            Compare placements, fees, ratings and
            choose the best college for your future.

          </p>

        </div>

        {/* Selectors */}

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          <select
            className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none"
            onChange={(e) =>
              setCollege1(
                colleges.find(
                  (c) => c.id === e.target.value
                )!
              )
            }
          >

            {colleges.map((college) => (

              <option
                key={college.id}
                value={college.id}
                className="bg-[#111827]"
              >

                {college.name}

              </option>

            ))}

          </select>

          <select
            className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none"
            onChange={(e) =>
              setCollege2(
                colleges.find(
                  (c) => c.id === e.target.value
                )!
              )
            }
          >

            {colleges.map((college) => (

              <option
                key={college.id}
                value={college.id}
                className="bg-[#111827]"
              >

                {college.name}

              </option>

            ))}

          </select>

        </div>

        {/* Compare Table */}

        <div className="overflow-hidden mt-16 rounded-3xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl">

          <table className="w-full">

            <thead>

              <tr className="border-b border-white/10">

                <th className="p-6 text-left text-gray-400">
                  Feature
                </th>

                <th className="p-6 text-left text-white text-xl">
                  {college1.name}
                </th>

                <th className="p-6 text-left text-white text-xl">
                  {college2.name}
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b border-white/10">

                <td className="p-6 text-gray-400">
                  Location
                </td>

                <td className="p-6">
                  {college1.location}
                </td>

                <td className="p-6">
                  {college2.location}
                </td>

              </tr>

              <tr className="border-b border-white/10">

                <td className="p-6 text-gray-400">
                  Fees
                </td>

                <td className="p-6 text-blue-400 font-semibold">
                  {college1.fees}
                </td>

                <td className="p-6 text-blue-400 font-semibold">
                  {college2.fees}
                </td>

              </tr>

              <tr className="border-b border-white/10">

                <td className="p-6 text-gray-400">
                  Rating
                </td>

                <td className="p-6 text-yellow-400 font-semibold">
                  ⭐ {college1.rating}
                </td>

                <td className="p-6 text-yellow-400 font-semibold">
                  ⭐ {college2.rating}
                </td>

              </tr>

              <tr>

                <td className="p-6 text-gray-400">
                  Placements
                </td>

                <td className="p-6 text-cyan-400 font-semibold">
                  {college1.placements}
                </td>

                <td className="p-6 text-cyan-400 font-semibold">
                  {college2.placements}
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
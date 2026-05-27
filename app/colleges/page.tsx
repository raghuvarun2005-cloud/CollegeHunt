"use client";

import { useEffect, useState } from "react";

import CollegeCard
from "../../components/CollegeCard";

type College = {

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

export default function CollegesPage() {

  const [colleges, setColleges] =
    useState<College[]>([]);

  const [search, setSearch] =
    useState("");

  const [stream, setStream] =
    useState("");

  const [type, setType] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchColleges = async () => {

      try {

        const response = await fetch(
          "/api/colleges"
        );

        const data =
          await response.json();

        setColleges(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchColleges();

  }, []);

  const filteredColleges =
    colleges.filter((college) => {

      const matchesSearch =

        college.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        college.location
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStream =

        stream === "" ||

        college.stream === stream;

      const matchesType =

        type === "" ||

        college.type === type;

      return (

        matchesSearch &&
        matchesStream &&
        matchesType

      );

    });

  return (

    <main className="relative min-h-screen bg-[#F7F7F7] overflow-hidden">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF385C]/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-pink-200 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-36">

        {/* Top Section */}

        <div className="mb-14">

          <h1 className="text-5xl font-bold tracking-tight text-[#222222]">

            Explore Colleges

          </h1>

          <p className="mt-4 text-[#717171] text-lg">

            Find top colleges based on placements, fees and ratings.

          </p>

        </div>

        {/* Search */}

        <div className="w-full mt-10">

          <input
            type="text"
            placeholder="Search colleges or cities..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full bg-white border border-[#DDDDDD] rounded-2xl px-7 py-5 text-lg outline-none shadow-sm focus:border-[#FF385C] transition"
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-4 mt-8 justify-start">

          <select
            onChange={(e) =>
              setStream(
                e.target.value
              )
            }
            className="bg-white border border-[#DDDDDD] rounded-2xl px-5 py-3 shadow-sm outline-none focus:border-[#FF385C]"
          >

            <option value="">

              All Streams

            </option>

            <option value="Engineering">

              Engineering

            </option>

            <option value="Medical">

              Medical

            </option>

            <option value="MBA">

              MBA

            </option>

          </select>

          <select
            onChange={(e) =>
              setType(
                e.target.value
              )
            }
            className="bg-white border border-[#DDDDDD] rounded-2xl px-5 py-3 shadow-sm outline-none focus:border-[#FF385C]"
          >

            <option value="">

              All Types

            </option>

            <option value="Government">

              Government

            </option>

            <option value="Private">

              Private

            </option>

          </select>

        </div>

        {/* Loading */}

        {loading && (

          <div className="text-center mt-20 text-xl text-[#717171]">

            Loading colleges...

          </div>

        )}

        {/* Cards */}

        {!loading && (

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {filteredColleges.map(
              (college) => (

              <CollegeCard
                key={college.id}
                college={college}
              />

            ))}

          </div>

        )}

        {/* Empty */}

        {!loading &&
          filteredColleges.length === 0 && (

          <div className="text-center mt-20 text-xl text-[#717171]">

            No colleges found.

          </div>

        )}

      </div>

    </main>

  );

}
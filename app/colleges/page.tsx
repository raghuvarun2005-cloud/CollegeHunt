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

    <main className="min-h-screen bg-white text-gray-900">

      <div className="max-w-7xl mx-auto px-6 py-32">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">

            Discover Top

            <span className="block text-blue-600">
              Colleges
            </span>

          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">

            Search, compare and shortlist colleges
            based on placements, rankings and
            career outcomes.

          </p>

        </div>

        {/* Search */}

        <div className="max-w-3xl mx-auto mt-14">

          <input
            type="text"
            placeholder="Search colleges or cities..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full bg-white border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-blue-600"
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-4 mt-8 justify-center">

          <select
            onChange={(e) =>
              setStream(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-xl px-5 py-3 bg-white"
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

          </select>

          <select
            onChange={(e) =>
              setType(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-xl px-5 py-3 bg-white"
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

          <div className="text-center mt-20 text-xl text-gray-500">

            Loading colleges...

          </div>

        )}

        {/* Cards */}

        {!loading && (

          <div className="grid md:grid-cols-2 gap-8 mt-16">

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

          <div className="text-center mt-20 text-xl text-gray-500">

            No colleges found.

          </div>

        )}

      </div>

    </main>

  );

}
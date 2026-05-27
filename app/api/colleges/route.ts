import { NextRequest, NextResponse }
from "next/server";

import { colleges }
 from "../../../data/colleges";
export async function GET(
  req: NextRequest
) {

  const {
    searchParams,
  } = new URL(req.url);

  const city =
    searchParams.get("city");

  const type =
    searchParams.get("type");

  const search =
    searchParams.get("search");

  const sort =
    searchParams.get("sort");

  let filtered =
    [...colleges];

  // FILTER CITY

  if (city) {

    filtered =
      filtered.filter(
        (college) =>
          college.location
            .toLowerCase()
            .includes(
              city.toLowerCase()
            )
      );

  }

  // FILTER TYPE

  if (type) {

    filtered =
      filtered.filter(
        (college) =>
          college.type
            ?.toLowerCase()
            .includes(
              type.toLowerCase()
            )
      );

  }

  // SEARCH

  if (search) {

    filtered =
      filtered.filter(
        (college) =>

          college.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )

          ||

          college.location
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )

      );

  }

  // SORT

  if (sort === "rating") {

    filtered.sort(
      (a, b) =>
        b.rating - a.rating
    );

  }

  if (sort === "placements") {

    filtered.sort(
      (a, b) =>
        parseInt(
          b.placements
        ) -
        parseInt(
          a.placements
        )
    );

  }

  return NextResponse.json(
    filtered
  );

}
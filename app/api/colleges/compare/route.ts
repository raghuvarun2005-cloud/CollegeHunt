import {
  NextRequest,
  NextResponse,
} from "next/server";

import { colleges }
from "../../../../data/colleges";

export async function GET(
  req: NextRequest
) {

  const {
    searchParams,
  } = new URL(req.url);

  const ids =
    searchParams
      .get("ids")
      ?.split(",");

  if (!ids) {

    return NextResponse.json({

      success: false,

      message:
        "No ids provided",

    });

  }

  const comparedColleges =
    colleges.filter(
      (college) =>
        ids.includes(
          college.id
        )
    );

  return NextResponse.json({

    success: true,

    colleges:
      comparedColleges,

  });

}
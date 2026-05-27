import {
  NextRequest,
  NextResponse,
} from "next/server";

import { colleges }
from "../../../../data/colleges";
/**
 * @swagger
 * /predictor/{id}:
 *   get:
 *     summary: Predict admission probability
 *     tags:
 *       - Predictor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *       - in: query
 *         name: exam
 *       - in: query
 *         name: percentile
 *       - in: query
 *         name: category
 *     responses:
 *       200:
 *         description: Admission prediction
 */
export async function GET(
  req: NextRequest,
  { params }: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    // GET PARAMS

    const { id } =
      await params;

    // QUERY PARAMS

    const {
      searchParams,
    } = new URL(req.url);

    const exam =
      searchParams.get(
        "exam"
      );

    const percentile =
      Number(
        searchParams.get(
          "percentile"
        )
      );

    const category =
      searchParams.get(
        "category"
      );

    // FIND COLLEGE

    const college =
      colleges.find(
        (c) => c.id === id
      );

    // NOT FOUND

    if (!college) {

      return NextResponse.json({

        success: false,

        message:
          "College not found",

      });

    }

    // LAST 3 YEAR CUTOFFS

    const cutoff_context = {

      2022: 88,

      2023: 90,

      2024: 92,

    };

    // PROBABILITY

    let probability =
      "low";

    if (
      percentile >= 92
    ) {

      probability =
        "high";

    }

    else if (
      percentile >= 85
    ) {

      probability =
        "medium";

    }

    // RESPONSE

    return NextResponse.json({

      success: true,

      college:
        college.name,

      exam,

      category,

      percentile,

      probability,

      cutoff_context,

    });

  } catch (error) {

    console.error(error);

    return NextResponse.json({

      success: false,

      message:
        "Internal Server Error",

    });

  }

}
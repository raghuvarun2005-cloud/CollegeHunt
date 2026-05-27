import { NextRequest, NextResponse }
from "next/server";

export async function POST(
  req: NextRequest
) {

  try {

    const body =
      await req.json();

    const {
      name,
      rating,
      review,
    } = body;

    // Validation

    if (!name ||
        !rating ||
        !review) {

      return NextResponse.json({

        success: false,

        message:
          "All fields are required.",

      });

    }

    if (
      review.length < 80
    ) {

      return NextResponse.json({

        success: false,

        message:
          "Review must contain at least 80 characters.",

      });

    }

    // Dummy Success

    return NextResponse.json({

      success: true,

      message:
        "Review submitted successfully.",

      data: {

        name,
        rating,
        review,

      },

    });

  } catch (error) {

    return NextResponse.json({

      success: false,

      message:
        "Something went wrong.",

    });

  }

}
import { shortlistStore }
from "../../../lib/shortlistStore";
import {
  NextRequest,
  NextResponse,
} from "next/server";

// Temporary in-memory storage

export async function POST(
  req: NextRequest
) {

  try {

    const body =
      await req.json();

    const {
      collegeIds,
    } = body;

    // SESSION TOKEN HEADER

    const sessionId =
      req.headers.get(
        "x-session-token"
      );

    if (!sessionId) {

      return NextResponse.json({

        success: false,

        message:
          "Session token missing",

      });

    }

    // SAVE SHORTLIST

    shortlistStore[
      sessionId
    ] = collegeIds;

    return NextResponse.json({

      success: true,

      sessionId,

      shortlisted:
        collegeIds,

    });

  } catch  {

    return NextResponse.json({

      success: false,

      message:
        "Something went wrong",

    });

  }

}
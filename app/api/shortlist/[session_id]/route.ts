import { shortlistStore }
from "@/lib/shortlistStore";
import {
  NextRequest,
  NextResponse,
} from "next/server";

// SAME TEMP STORAGE


type Props = {
  params: Promise<{
    session_id: string;
  }>;
};

export async function GET(
  req: NextRequest,
  { params }: Props
) {

  const {
    session_id,
  } = await params;

  const shortlist =

    shortlistStore[
      session_id
    ];

  return NextResponse.json({

    success: true,

    sessionId:
      session_id,

    shortlisted:
      shortlist || [],

  });

}
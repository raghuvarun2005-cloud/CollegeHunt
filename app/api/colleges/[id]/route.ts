import {
  NextRequest,
  NextResponse,
} from "next/server";

import { colleges }
from "../../../../data/colleges";

type Props = {

  params: Promise<{
    id: string;
  }>;

};

export async function GET(
  req: NextRequest,
  { params }: Props
) {

  const { id } =
    await params;

  const college =
    colleges.find(
      (c) => c.id === id
    );

  if (!college) {

    return NextResponse.json({

      success: false,

      message:
        "College not found",

    });

  }

  return NextResponse.json({

    success: true,

    college,

  });

}
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const body = await request.json();

  console.log("Saved College:", body);

  return NextResponse.json({
    message: "College saved successfully",
  });

}
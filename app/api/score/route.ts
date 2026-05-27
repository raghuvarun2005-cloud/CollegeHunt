import { rateLimitStore }
from "../../../lib/rateLimit";

import { scoreCache }
from "../../../lib/scoreCache";

import {
  NextRequest,
  NextResponse,
} from "next/server";

import { colleges }
from "../../../data/colleges";

/**
 * @swagger
 * /score:
 *   post:
 *     summary: Rank colleges using weighted scoring
 *     tags:
 *       - Score
 */

export async function POST(
  req: NextRequest
) {

  try {

    // RATE LIMIT

    const ip =
      req.headers.get(
        "x-forwarded-for"
      ) || "local";

    const now =
      Date.now();

    const windowMs =
      60 * 1000;

    rateLimitStore[ip] =
      (
        rateLimitStore[ip]
        || []
      ).filter(
        (time) =>
          now - time <
          windowMs
      );

    // MAX 30 REQUESTS

    if (
      rateLimitStore[ip]
        .length >= 30
    ) {

      return NextResponse.json({

        success: false,

        message:
          "Rate limit exceeded",

      });

    }

    rateLimitStore[ip]
      .push(now);

    // REQUEST BODY

    const body =
      await req.json();

    const {
      weights,
      filters,
    } = body;

    // CACHE KEY

    const cacheKey =
      JSON.stringify({
        weights,
        filters,
      });

    // RETURN CACHE

    if (
      scoreCache[cacheKey]
    ) {

      return NextResponse.json({

        success: true,

        cached: true,

        results:
          scoreCache[
            cacheKey
          ],

      });

    }

    // FILTER COLLEGES

    let filtered =
      [...colleges];

    // FILTER CITY

    if (filters?.city) {

      filtered =
        filtered.filter(
          (college) =>

            college.location
              .toLowerCase()
              .includes(
                filters.city.toLowerCase()
              )

        );

    }

    // FILTER STREAM

    if (filters?.stream) {

      filtered =
        filtered.filter(
          (college: any) =>

            college.stream ===
            filters.stream

        );

    }

    // NORMALIZATION VALUES

    const placementValues =
      filtered.map(
        (c: any) =>

          parseInt(
            c.placements
          )

      );

    const feeValues =
      filtered.map(
        (c: any) =>

          parseInt(

            c.courses?.[0]
              ?.fees || "0"

          )

      );

    const ratingValues =
      filtered.map(
        (c: any) =>
          c.rating
      );

    const maxPlacement =
      Math.max(
        ...placementValues
      );

    const minPlacement =
      Math.min(
        ...placementValues
      );

    const maxFee =
      Math.max(
        ...feeValues
      );

    const minFee =
      Math.min(
        ...feeValues
      );

    const maxRating =
      Math.max(
        ...ratingValues
      );

    const minRating =
      Math.min(
        ...ratingValues
      );

    // SCORING

    const ranked =
      filtered.map(
        (college: any) => {

          const placement =
            parseInt(
              college.placements
            );

          const fee =
            parseInt(

              college.courses?.[0]
                ?.fees || "0"

            );

          const rating =
            college.rating;

          // NORMALIZED SCORES

          const placementScore =

            (
              (
                placement -
                minPlacement
              )

              /

              (
                maxPlacement -
                minPlacement || 1
              )

            ) * 100;

          // LOWER FEES BETTER

          const feeScore =

            (
              (
                maxFee - fee
              )

              /

              (
                maxFee -
                minFee || 1
              )

            ) * 100;

          const ratingScore =

            (
              (
                rating -
                minRating
              )

              /

              (
                maxRating -
                minRating || 1
              )

            ) * 100;

          // FINAL SCORE

          const score =

            (
              placementScore *
              weights.placement
            )

            +

            (
              feeScore *
              weights.fees
            )

            +

            (
              ratingScore *
              weights.location
            );

          return {

            ...college,

            dimensionScores: {

              placement:
                Number(
                  placementScore.toFixed(2)
                ),

              fees:
                Number(
                  feeScore.toFixed(2)
                ),

              rating:
                Number(
                  ratingScore.toFixed(2)
                ),

            },

            score:
              Number(
                score.toFixed(2)
              ),

          };

        }

      );

    // SORT DESCENDING

    ranked.sort(
      (a, b) =>
        b.score - a.score
    );

    // SAVE CACHE

    scoreCache[
      cacheKey
    ] = ranked;

    // RESPONSE

    return NextResponse.json({

      success: true,

      results: ranked,

    });

  } catch (error) {

    console.error(error);

    return NextResponse.json({

      success: false,

      message:
        "Something went wrong",

    });

  }

}
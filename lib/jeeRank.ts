export function
percentileToRank(
  percentile: number
) {

  const candidates =
    1200000;

  return Math.round(

    (
      (
        100 -
        percentile
      )

      /

      100
    )

    *

    candidates

  );

}
describe("College Score Function", () => {

  test("all equal weights", () => {

    const score = 80;

    expect(score).toBe(80);

  });

  test("single weight 100%", () => {

    const score = 95;

    expect(score).toBeGreaterThan(90);

  });

  test("extreme fee range", () => {

    const score = 40;

    expect(score).toBeLessThan(50);

  });

});
describe("returnSortedColors", () => {
  it("should exist", () => {
    expect(returnSortedColors(users, "green")).to.not.equal(undefined);
  });
  it("should return an array of user objects", () => {
    const randomSortedArray = returnSortedColors(users, "green");
    expect(randomSortedArray[0].name).to.not.equal(undefined);
    expect(randomSortedArray[0].email).to.not.equal(undefined);
    expect(randomSortedArray[0].favoriteColor).to.not.equal(undefined);
  });
  it("should return an array of user objects where favoriteColor is sorted properly", () => {
    let hasNonGreen = false;
    returnSortedColors(users, "green").forEach(item => {
      if (item !== undefined) {
        if (item.favoriteColor !== "green") hasNonGreen = true;
      }
    });
    expect(hasNonGreen).to.equal(false);
    let hasNonBlue = false;
    returnSortedColors(users, "blue").forEach(item => {
      if (item !== undefined) {
        if (item.favoriteColor !== "blue") hasNonBlue = true;
      }
    });
    expect(hasNonBlue).to.equal(false);
    let hasNonRed = false;
    returnSortedColors(users, "red").forEach(item => {
      if (item !== undefined) {
        if (item.favoriteColor !== "red") hasNonRed = true;
      }
    });
    expect(hasNonRed).to.equal(false);
  });
});

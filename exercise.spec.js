describe("returnSortedColors", () => {
  it("should exist", () => {
    expect(typeof returnSortedColors).to.equal("function");
  });
  it("should return an array of user objects", () => {
    const randomSortedArray = returnSortedColors(users, "green");
    expect(randomSortedArray[0].name).to.not.equal(undefined);
    expect(randomSortedArray[0].email).to.not.equal(undefined);
    expect(randomSortedArray[0].favoriteColor).to.not.equal(undefined);
  });
  it("should return an array of user objects where favoriteColor is sorted properly", () => {
    users.push({
      name: "Jimbo",
      email: "jimbo2@test.com",
      favoriteColor: "green",
    });
    let hasNonGreen = false;
    let hasJimbo = false;
    returnSortedColors(users, "green").forEach(item => {
      if (item !== undefined) {
        if (item.name === "Jimbo") hasJimbo = true;
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

describe("checkForFakes", () => {
  it("Should exist", () => {
    expect(typeof checkForFakes).to.equal("function");
  });
  it("should return an array of user objects", () => {
    const randomSortedArray = checkForFakes(users);
    randomSortedArray.forEach(item => {
      if (item) {
        expect(item.name).to.not.equal(undefined);
        expect(item.email).to.not.equal(undefined);
        expect(item.favoriteColor).to.not.equal(undefined);
      }
    });
  });
  it("Should detect a fake email and add it to the returned array", () => {
    const userData = [
      {
        name: "Norman",
        email: "normalPerson@blank.com",
        favoriteColor: "purple",
      },
      { name: "Fake", email: "fakeperson@blank.com", favoriteColor: "grey" },
      {
        name: "Fake2",
        email: "totallynotafake@fake.com",
        favoriteColor: "green",
      },
    ];
    let hasPerson1 = false;
    let hasPerson2 = false;
    checkForFakes(userData).forEach(item => {
      if (item !== undefined) {
        if (item.name === "Fake") hasPerson1 = true;
        if (item.name === "Fake2") hasPerson2 = true;
      }
    });
    expect(hasPerson1 && hasPerson2).to.equal(true);
  });
});

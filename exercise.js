const users = [
  {
    name: "Bob",
    email: "bob@notbob.com",
    favoriteColor: "green",
  },
  {
    name: "Linda",
    email: "lida24@notgmail.com",
    favoriteColor: "red",
  },
  {
    name: "Jill",
    email: "fakeemail@fake.com",
    favoriteColor: "red",
  },
  {
    name: "Phill",
    email: "phill@phil.com",
    favoriteColor: "blue",
  },
  {
    name: "Steve",
    email: "steve34notreal@faker.com",
    favoriteColor: "green",
  },
  {
    name: "Mary",
    email: "mary@fakesvilleDoesEmail.com",
    favoriteColor: "blue",
  },
];

/*
 * #1:
 * Write a function called returnSortedColors that takes in an array of users (we can call it usersArr) and a string (we can call it sortColor)
 * and returns an array of users who's favorite color is sortColor
 *
 * ie. returnSortedColors(users, 'green') would return:
 *
 * [
 *  {
 *   name: 'Bob',
 *   email: '...',
 *   favoriteColor: 'green'
 *  },
 *  {
 *   name: 'Steve',
 *   email: '...',
 *   favoriteColor: 'green'
 *  }
 * ]
 */

/**
 * #2:
 * Write a function called checkForFakes that takes in an array of users (we can call it usersArr)
 * and returns an aray of users who's email contains the word 'fake'
 * ie. checkForFakes(users) would return
 * [
 *  {
 *    name: "Jill",
 *    email: "fakeemail@fake.com",
 *    favoriteColor: "red",
 *  },
 *  {
 *    name: "Steve",
 *    email: "steve34notreal@faker.com",
 *    favoriteColor: "green",
 *  },
 *  {
 *    name: "Mary",
 *    email: "mary@fakesvilleDoesEmail.com",
 *    favoriteColor: "blue",
 *  },
 * ]
 */


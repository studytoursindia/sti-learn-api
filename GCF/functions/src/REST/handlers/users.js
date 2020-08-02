/* eslint-disable require-jsdoc */
async function getAllUsers() {
  let result;
  try {
    const users = await [
      {
        name: 'a',
      },
      {
        name: 'b',
      },
      {
        name: 'c',
      },
      {
        name: 'd',
      },
      {
        name: 'e',
      },
      {
        name: 'f',
      },
    ];

    result = users;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  return result;
}

module.exports = {
  getAllUsers,
};

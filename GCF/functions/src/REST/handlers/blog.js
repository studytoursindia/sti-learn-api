/* eslint-disable require-jsdoc */
const { DB } = require('../utils/mysql2');

async function getAllPosts() {
  let result;
  try {
    // load data from DATABASE
    // Here data used static only for test use
    const posts = [
      {
        id: '1',
        content: 'hahahahaha',
      },
      {
        id: '2',
        content: 'lalalala',
      },
      {
        id: '2',
        content: 'wawawawa',
      },
      {
        id: '3',
        content: 'jajajajaj',
      },
      {
        id: '4',
        content: 'papapapapa',
      },
      {
        id: '5',
        content: 'f',
      },
    ];

    result = posts;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  return result;
}
async function getPostById(postID) {
  let result;
  try {
    // use postID to get data from database
    const post = {
      id: postID,
      content: `${postID}_data_content`,
    };
    result = post;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  return result;
}
async function createNewPost(postData) {
  let result;
  try {
    // add post to database

    result = true;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  return result;
}

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
};

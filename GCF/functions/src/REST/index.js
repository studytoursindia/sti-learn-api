/* eslint-disable promise/always-return */
/* eslint-disable no-eq-null */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-arrow-callback */
'use strict';

const express = require('express');
const functions = require('firebase-functions');

const app = express();
// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false });

// var database = require('./utils/database');
// var sequelize = database.sequelize;

const USERS = require('./handlers/users');
const BLOG = require('./handlers/blog');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
  USERS.getAllUsers()
    .then(function (result) {
      res.json({
        error: false,
        message: 'Request Successfull',
        userList: result,
      });
    })
    .catch((error) => {
      res.json({
        error: true,
        message: error.message,
      });
    });
});

app.get('/blog/allPosts', function (req, res) {
  BLOG.getAllPosts()
    .then(function (result) {
      res.json({
        error: false,
        message: 'Request Successfull',
        allPostData: result,
      });
    })
    .catch((error) => {
      res.json({
        error: true,
        message: error.message,
      });
    });
});

app.get('/blog/:postId', function (req, res) {
  BLOG.getPostById(req.params.postId)
    .then(function (result) {
      res.json({
        error: false,
        message: 'Request Successfull',
        singlePostData: result,
      });
    })
    .catch((error) => {
      res.json({
        error: true,
        message: error.message,
      });
    });
});

app.post('/blog/addPost', urlencodedParser, function (req, res) {
  const urlencoded = req.body;
  if (urlencoded['title'] == null || urlencoded['description'] == null) {
    res.json({
      error: true,
      message: 'Some parameter missing',
    });
  }

  BLOG.createNewPost(req.body)
    .then(function (result) {
      if (result) {
        res.json({
          error: false,
          message: 'Request Successfull',
        });
      } else {
        throw new Error('Some Error Occured');
      }
    })
    .catch((error) => {
      res.json({
        error: true,
        message: error.message,
      });
    });
});

exports.api = functions.https.onRequest(app);

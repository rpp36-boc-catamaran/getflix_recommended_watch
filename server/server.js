require('dotenv').config()
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
app.use(express.json())
app.use(express.urlencoded({extended: false}));
//const fakeData = require('../src/fakeData/fakeMovies.js')
const api = require('../api_key.js');

app.get('/test', (req, res)=>{
  res.json({message:'Welcome to Getflix!'});
})

app.get('/recommended/:movieId', (req,res) => {
  //get recommended movie based on current movie
  console.log('movieId',req.params.movieId);
  var movieId = 642885;
  let options = {
    url: 'https://api.themoviedb.org/3/movie/' + movieId + '/recommendations',
  };
  return axios.get(options.url, {
    params: {
      'api_key': api.key,
      'language': 'en-US',
      'page': '1'
    }
  })
    .then((response) => {
      //console.log('success', response.data);
      res.status(200);
      res.json(response.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    })
})

app.get('/watch', (req,res) => {
  //get watch providers based on current movie
  var movieId = 642885;
  let options = {
    url: 'https://api.themoviedb.org/3/movie/' + movieId + '/recommendations',
  };
  return axios.get(options.url, {
    params: {
      'api_key': api.key,
      'language': 'en-US',
      'page': '1'
    }
  })
    .then((response) => {
      //console.log('success', response.data);
      res.status(200);
      res.json(response.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
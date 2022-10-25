require('dotenv').config()
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
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
  var movieId = req.params.movieId;
  console.log('movieId',req.params.movieId);
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + movieId + '/recommendations',
    params: {
      'api_key': api.key,
      'language': 'en-US',
      'page': '1'
    }
  };
  axios.request(options)
    .then((response) => {
      res.status(200);
      res.json(response.data.results);
    })
    .catch((error) => {
      res.sendStatus(404);
      return Promise.reject(error);
    })
})

app.get('/details/watchProviders/:movieId', (req, res) => {
  // console.log('details/watch provider', req.params.movieId)
  let id = req.params.movieId;
  let options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/get/basic',
    params: {country: 'us', tmdb_id: `movie/${id}`},
    headers: {
      'X-RapidAPI-Key': api.rapid_key,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  }
  axios.request(options)
    .then((response) => {
      res.status(200);
      // console.log('server watch', response.data.result.title, response.data.result.streamingInfo)
      res.json(response.data.result);
    })
    .catch((error) => {
      res.sendStatus(404);
      return Promise.reject(error);
    })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
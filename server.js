// imports
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const config = require('./config');

// variables
const app = express();
const port = 5001;

// middlewares
app.use(express.json());
app.use(cors());

// server config
// POST REQUEST WITH JSON BODY
app.post('/summoner', (req, res) => {
  const url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
  const { name } = req.body;
  const key = `?api_key=${config.apiKey}`;
  const fullUrl = url + name + key;
  axios.get(fullUrl).then((apiRes) => {
    res.json(apiRes.data);
  });
});

// GET REQUEST WITH PARAMS
app.get('/summoner/:name', (req, res) => {
  const url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
  const { name } = req.params;
  const key = `?api_key=${config.apiKey}`;
  const fullUrl = url + name + key;
  axios.get(fullUrl).then((apiRes) => {
    res.json(apiRes.data);
  });
});


// start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});

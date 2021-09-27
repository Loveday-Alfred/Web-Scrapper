const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = "https://www.theguardian.com/uk";

axios(url).then((response) => {
  const html = response.data;
  const $ 
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

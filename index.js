const express          = require('express');
const bodyParser       = require('body-parser');

const app              = express();
const PORT             = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/search', (req, res) => {
  const query = req.body.data;
  axios({
    method: 'post',
    url: 'https://api.twitter.com/1.1/tweets/search/30day/dev.json',
    headers: {
      authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAPgY9AAAAAAABemcs5PT8zIt2dtdtIHbn7%2FrbDs%3DC65NEVDYxwSsrwdu2Tsxtf0GD1uzjXWYSKyVrcuIkicOz8LHHO',
      'content-type': 'application/json',
    },
    data: {
      "query": "from:" + query,
      "maxResults": "10",
      "fromDate": "201811100000",
      "toDate": "201812030000",
    }
  })
    .then(response => {
      res.json(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

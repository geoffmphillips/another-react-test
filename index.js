const express          = require('express');
const bodyParser       = require('body-parser');
const loginWithTwitter = require('login-with-twitter')

const app              = express();
const PORT             = process.env.PORT || 8080;

const tw = loginWithTwitter({
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  callbackUrl: process.env.API_URL + '/callback'
})

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  if (authorized) {
    res.send(search)
  } else {
    res.send(login);
  }
});

app.get('/callback', (req, res) => {
  if (authorized) {
    res.send(search)
  } else {
    res.send(login);
  }
});

app.get('/search', (req, res) => {
  const query = req.body;
  axios.get('twitterapi' + query)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      do something;
    })
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

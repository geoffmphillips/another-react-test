const express    = require('express');
const bodyParser = require('body-parser');

const { randomChar, generateNonce, createSignature } = require('./lib/oauth-helpers.js');

const app             = express();
const PORT            = process.env.PORT || 8080;

Authorization:
OAuth oauth_consumer_key=process.env.TWITTER_CONSUMER_API_KEY,
oauth_nonce=generateNonce();
oauth_signature="tnnArxj06cWHq44gCs1OSKk%2FjLY%3D",
oauth_signature_method="HMAC-SHA1",
oauth_timestamp=Date.now(),
oauth_token=process.env.OAUTH_TOKEN,
oauth_version="1.0"

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  if (authorized) {
    res.send(search)
  } else {
    res.send(login);
  }
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

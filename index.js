const express    = require('express');
const bodyParser = require('body-parser');

const { randomChar, generateNonce } = require('./lib/oauth-helpers.js');

const app             = express();
const PORT            = process.env.PORT || 8080;
const CONSUMER_KEY    = process.env.TWITTER_CONSUMER_API_KEY;


Authorization:
OAuth oauth_consumer_key="xvz1evFS4wEEPTGEFPHBog",
oauth_nonce="kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg",
oauth_signature="tnnArxj06cWHq44gCs1OSKk%2FjLY%3D",
oauth_signature_method="HMAC-SHA1",
oauth_timestamp="1318622958",
oauth_token="370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb",
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

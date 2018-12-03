const express    = require('express');
const bodyParser = require('body-parser');

const app        = express();
const PORT       = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

const path = require("path");
const express = require("express");
const Twitter = require("twit");

const DIST_DIR = path.join(__dirname, "dist");
const PORT = 3000;
const app = express();

const T = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.use(express.static(DIST_DIR));

app.get("/", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.get("/tweets/:politician", function(req, res) {
    const queryParams = {
        q: req.params.politician,
        lang: 'en',
        result_type: 'recent',
        count: 4
    };

    T.get('search/tweets', queryParams, function(err, data, response) {
        res.json(data);
    });
})

app.listen(PORT, function (req) {
    console.log('app listening on port '+ PORT);
});

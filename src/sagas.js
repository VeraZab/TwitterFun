import {put, takeEvery, call} from 'redux-saga/effects'

function fetchTweets(politician) {
    return fetch(`/tweets/${politician}`, {
       method: 'GET',
       headers: {
           "Accept": "application/json"
       }
    })
}

function getTweetsJson(blob) {
    return blob.json();
}

export function* getTweetsAsync(action) {
    function filter(tweet) {
        return {
            user: tweet.user.name,
            text: tweet.text,
            date: tweet.created_at
        }
    }

    const tweets = yield call(fetchTweets, action.payload)
    const tweetsJson = yield call(getTweetsJson, tweets);

    yield put({
        type: 'RECEIVED_TWEETS',
        tweets: tweetsJson.statuses.map(filter)
    });
};

export default function* watchGetTweet() {
    yield takeEvery('GET_TWEETS', getTweetsAsync)
}

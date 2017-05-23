export function toggleUser() {
    return {
        type: 'TOGGLE_USER'
    }
}

export function getTweets(candidate) {
    return {
        type: 'GET_TWEETS',
        payload: candidate
    }
}

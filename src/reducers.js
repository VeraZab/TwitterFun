const initialState = {
    candidate: 'Trump',
    opponent: 'Hilary',
    tweets: []
};

export default function reducer(state = initialState, action){
    switch(action.type) {
        case 'TOGGLE_USER':
            if (state.candidate == 'Trump') {
                return Object.assign({}, state, {
                    candidate: 'Hilary',
                    opponent: 'Trump',
                    tweets: []
                })
            }

            return Object.assign({}, state, {
                candidate: 'Trump',
                opponent: 'Hilary',
                tweets: []
            });

        case 'RECEIVED_TWEETS':
            return Object.assign({}, state, {
                tweets: action.tweets
            });

        default:
            return state;
    }
}

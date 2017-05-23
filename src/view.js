import React, {Component} from 'react';
import {connect} from 'react-redux';

import TweetsContainer from './components/TweetsContainer';
import {toggleUser, getTweets} from './actions';
import styles from './style.css';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.clicking = this.clicking.bind(this);
    }

    componentWillMount() {
        const {candidate, dispatch} = this.props;
        dispatch(getTweets(candidate));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.candidate !== this.props.candidate) {
            const {candidate, dispatch} = nextProps;
            dispatch(getTweets(candidate));
        }
    }

    clicking() {
        const {dispatch} = this.props;
        dispatch(toggleUser());
    }

    render() {
        const {candidate, tweets, opponent} = this.props;

        return (
            <div>
                <div className={styles.candidateContainer}>
                    <img
                        src={require(`./img/${candidate.toLowerCase()}.png`)}
                        className={styles[`position${candidate}`]}
                    />
                    <TweetsContainer tweets={tweets}/>
                    <div
                        onClick={this.clicking}
                        className={styles.candidateButton}
                    >
                        See {opponent}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    candidate: state.candidate,
    opponent: state.opponent,
    tweets: state.tweets
});

export default connect(mapStateToProps)(MainView);

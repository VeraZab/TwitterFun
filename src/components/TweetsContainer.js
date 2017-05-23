import React from 'react';
import Tweet from './Tweet';
import styles from '../style.css';

const TweetsContainer = (props) => (
    <div className={styles.tweetContainer}>
        <ul className={styles.tweetContainerUL}>
            {props.tweets.map((tweet, index) => (
                <Tweet
                    user={tweet.user}
                    date={tweet.date}
                    text={tweet.text}
                    key={index}
                />
            ))}
        </ul>
    </div>
);

export default TweetsContainer;

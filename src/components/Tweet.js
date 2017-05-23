import React from 'react';
import styles from '../style.css';

const Tweet = (props) => (
    <li className={styles.tweetItem}>
        <div className={styles.tweetHeader}>
            <span className={styles.tweetUser}>
                <img src={require('../img/twitter.png')} className={styles.twitterLogo}/>
                @{props.user}
            </span>
            <span className={styles.tweetDate}>
                {props.date.substring(0, 10)}
            </span>
        </div>
        <div className={styles.tweetText}>
            {props.text}
        </div>
    </li>
);

export default Tweet;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={styles.good}>
        Good: <span>{good}</span>
      </p>
      <p className={styles.neutral}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={styles.bad}>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total:
        <span> {total}</span>
      </p>
      <p>
        Positive feedback:
        {positivePercentage}
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
};
export default Statistics;

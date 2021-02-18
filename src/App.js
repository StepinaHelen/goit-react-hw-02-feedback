import React from 'react';
import Statistics from './Components/Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  counterGood = () => {
    this.setState(previousState => {
      return {
        good: previousState.good + 1,
      };
    });
  };
  counterNeutral = () => {
    this.setState(previousState => {
      return {
        neutral: previousState.neutral + 1,
      };
    });
  };
  counterBad = () => {
    this.setState(previousState => {
      return {
        bad: previousState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.state.good === 0 ? (
      <span>0 %</span>
    ) : (
      <span>
        {Number.parseInt(
          (this.state.good * 100) /
            (this.state.good + this.state.neutral + this.state.bad),
        )}
        %
      </span>
    );
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        {/* Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
        <button onClick={this.counterGood}> Good</button>
        <button onClick={this.counterNeutral}>Neutral</button>
        <button onClick={this.counterBad}>Bad</button>
        <h2>Statistic</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
export default App;

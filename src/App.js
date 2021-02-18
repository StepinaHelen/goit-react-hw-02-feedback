import React from 'react';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    let mark = event.target.name;
    this.setState(previousState => {
      return {
        [mark]: previousState[mark] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  keysOfState = () => {
    let keysOfState = Object.keys(this.state);
    return keysOfState;
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
    let df = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.keysOfState()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {df === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistic">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
export default App;

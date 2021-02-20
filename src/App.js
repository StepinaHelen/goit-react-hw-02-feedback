import React from 'react';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Section';
import Notification from './Components/Notification';
import Container from './Components/Container';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    let evaluation = event.target.name;
    this.setState(previousState => {
      return {
        [evaluation]: previousState[evaluation] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  keysOfState = () => {
    let keysOfState = Object.keys(this.state);
    return keysOfState;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return good === 0 ? (
      <span>0 %</span>
    ) : (
      <span>{Number.parseInt((good * 100) / (good + neutral + bad))}%</span>
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    let totalFeedback = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.keysOfState()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
export default App;

import { useState } from 'react';

import Container from './Container/Container';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import s from './Feedback.module.css';

export const App = () => {
  const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = e => {
      const option = e.target.textContent.toLowerCase();

      switch (option) {
        case 'good':
          setGood(state => state + 1);
          break;
        case 'neutral':
          setNeutral(state => state + 1);
          break;
        case 'bad':
          setBad(state => state + 1);
          break;
        default:
          return;
      }
    };

    const countTotalFeedback = ({ good, neutral, bad }) => {
      return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = ({ good, total }) => {
      return Math.round((good / total) * 100);
    };

    const total = countTotalFeedback({ good, neutral, bad });
    const positivePercentage = countPositiveFeedbackPercentage({
      good,
      total,
    });

    return (
      <div className={s.Statistics}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={['good', 'neutral', 'bad']}
          />
        </Section>

        <Section title="Statistics:">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </div>
    );
  };

  /*  class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    onLeaveFeedback = event => {
      const option = event.target.textContent.toLowerCase();

      this.setState(prevState => ({
        [option]: prevState[option] + 1,
      }));
    };

    countTotalFeedback({ good, neutral, bad }) {
      return good + neutral + bad;
    }

    countPositiveFeedbackPercentage({ good, total }) {
      return Math.round((good / total) * 100);
    }

    render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback({ good, neutral, bad });
      const positivePercentage = this.countPositiveFeedbackPercentage({
        good,
        total,
      });

      return (
        <div className={s.Statistics}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={Object.keys(this.state)}
            />
          </Section>

          <Section title="Statistics:">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <p>No feedback given</p>
            )}
          </Section>
        </div>
      );
    }
  }*/

  return (
    <Container>
      <Feedback />
    </Container>
  );
};

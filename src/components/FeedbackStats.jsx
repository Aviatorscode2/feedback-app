import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate the rating average
  // let average =
  //   feedback.reduce((acc, cul) => {
  //     return acc + cul.rating;
  //   }, 0) / feedback.length;

  // average = average.toFixed(1).replace(/[.,]0$/, '');

  //simplier average calculation
  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;

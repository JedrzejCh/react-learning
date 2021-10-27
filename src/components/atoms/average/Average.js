import React from 'react';
import { AverageStyles } from './Average.styles';
const Average = ({ rating }) => {
  return (
    <AverageStyles rate={rating}>
      <p>{rating}</p>
    </AverageStyles>
  );
};

export default Average;

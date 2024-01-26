import React from 'react';
import { calculateInvestmentResults } from '../util/investment.js';

function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  return <p>{}</p>;
}

export default Results;

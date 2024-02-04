import React from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

function Summary({ userAnswers }) {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz complete(Trophy icon)" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number"></span>
          <span className="text"></span>
        </p>
        <p>
          <span className="number"></span>
          <span className="text"></span>
        </p>
        <p>
          <span className="number"></span>
          <span className="text"></span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, i) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[i].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={answer}>
              <h3>{i + 1}</h3>
              <p className="question">{QUESTIONS[i].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;

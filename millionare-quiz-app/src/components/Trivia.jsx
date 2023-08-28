import React, { useEffect, useState } from "react";

const Trivia = ({ data, active, setActive, setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer ");

  useEffect(() => {
    setQuestion(data[active - 1]);
  }, [data, active]);

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    }, 2000);
    setTimeout(() => {
      if (answer.correct) {
        setActive((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    }, 5000);
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : "answer"}
            key={answer.id}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;

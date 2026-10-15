
import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "Which language is used to build React applications?",
    options: ["Python", "JavaScript", "C", "Java"],
    answer: "JavaScript"
  },
  {
    question: "Which hook is used to handle side effects?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useEffect"
  },
  {
    question: "What does JSX stand for?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "JSON XML",
      "Java Source Extension"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which method is used to render a React application?",
    options: ["createRoot", "renderHTML", "startApp", "showPage"],
    answer: "createRoot"
  },
  {
    question: "Which hook is used to manage state in a function component?",
    options: ["useEffect", "useState", "useContext", "useId"],
    answer: "useState"
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [timeLeft, setTimeLeft] = useState(60);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  useEffect(() => {
    if (submitted) {
      const finalScore = questions.reduce(
        (total, question, index) =>
          total + (selected[index] === question.answer ? 1 : 0),
        0
      );
      setScore(finalScore);
    }
  }, [submitted, selected]);

  function submitQuiz() {
    setSubmitted(true);
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      submitQuiz();
    }
  }

  if (submitted) {
    return (
      <div style={styles.container}>
        <h1>Quiz Completed!</h1>
        <h2>Your Score: {score} / {questions.length}</h2>
        <p>
          {score >= 4
            ? "Excellent work!"
            : "Good try! Keep practising."}
        </p>
        <button
          style={styles.button}
          onClick={() => window.location.reload()}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={styles.container}>
      <h1>Timed Quiz Application</h1>

      <h3>
        Time Left: <span style={{ color: "red" }}>{timeLeft}s</span>
      </h3>

      <p>Question {current + 1} of {questions.length}</p>
      <h2>{q.question}</h2>

      {q.options.map((option) => (
        <label key={option} style={styles.option}>
          <input
            type="radio"
            name={`question-${current}`}
            checked={selected[current] === option}
            onChange={() =>
              setSelected({ ...selected, [current]: option })
            }
          />
          {" "}{option}
        </label>
      ))}

      <button style={styles.button} onClick={nextQuestion}>
        {current === questions.length - 1
          ? "Finish Quiz"
          : "Next Question"}
      </button>

      <button
        style={styles.submitButton}
        onClick={submitQuiz}
      >
        Submit Quiz
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f2f6ff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px #cccccc"
  },
  option: {
    display: "block",
    textAlign: "left",
    padding: "12px",
    margin: "10px 0",
    backgroundColor: "white",
    borderRadius: "6px",
    cursor: "pointer"
  },
  button: {
    margin: "15px 5px",
    padding: "10px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  submitButton: {
    margin: "15px 5px",
    padding: "10px 18px",
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

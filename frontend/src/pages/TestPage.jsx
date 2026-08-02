import { useEffect, useState } from "react";
import API from "../services/api";

function TestPage() {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
        const response = await API.get("/questions");
      console.log(response.data);
      console.log(response.data[0]);
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswer = (questionId, answer) => {
  setAnswers({
    ...answers,
    [questionId]: answer,
  });
  };

  const calculateScore = async () => {
  let total = 0;

  questions.forEach((question) => {
    if (answers[question.id] === question.correctAnswer) {
      total++;
    }
  });

  setScore(total);

  console.log("Score:", total);

  const result = {
    userId: 1,
    studentName: "Khushi Kumari",
    score: total,
    totalQuestions: questions.length,
  };

  try {
    await API.post("/results", result);
    alert("Result Saved Successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to save result.");
  }
};

  return (
  <div style={{ padding: "20px" }}>
    <h2>Online Test</h2>

    <p>Total Questions: {questions.length}</p>

    {questions.map((question) => (
      <div
        key={question.id}
        style={{
          border: "1px solid gray",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "20px",
        }}
      >


        <h3>{question.questionText}</h3>

      <label>
  <input
    type="radio"
    name={question.id}
    value="A"
    onChange={() => handleAnswer(question.id, "A")}
  />
  A. {question.optionA}
</label>

<br /><br />

<label>
  <input
    type="radio"
    name={question.id}
    value="B"
    onChange={() => handleAnswer(question.id, "B")}
  />
  B. {question.optionB}
</label>

<br /><br />

<label>
  <input
    type="radio"
    name={question.id}
    value="C"
    onChange={() => handleAnswer(question.id, "C")}
  />
  C. {question.optionC}
</label>

<br /><br />

<label>
  <input
    type="radio"
    name={question.id}
    value="D"
    onChange={() => handleAnswer(question.id, "D")}
  />
  D. {question.optionD}
</label>
      </div>
    ))}

     <button onClick={calculateScore}>
  Submit Test
  </button>
  
  <h2>Your Score: {score}</h2>
  </div>
);
}
export default TestPage;
import { useEffect, useState } from "react";
import API from "../services/api";
import { useSnackbar } from "notistack";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackButton from "../components/BackButton";

function TestPage() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  // Fetch questions whenever category changes
  useEffect(() => {
    fetchQuestions();
  }, [category]);

  const fetchQuestions = async () => {
    try {
      const response = await API.get("/questions");

      let fetchedQuestions = response.data;

      // Category-wise filtering
      if (category) {
        fetchedQuestions = fetchedQuestions.filter(
          (question) =>
            question.category &&
            question.category
              .toLowerCase()
              .includes(category.trim().toLowerCase())
        );
      }

      console.log("Category:", category);
      console.log("Questions:", fetchedQuestions);

      setQuestions(fetchedQuestions);
      setAnswers({});
      setScore(0);

    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  // Select answer
  const handleAnswer = (questionId, answer) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionId]: answer,
    }));
  };

  // Calculate and save score
  const calculateScore = async () => {
    console.log("FUNCTION STARTED");

    let total = 0;

    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        total++;
      }
    });

    setScore(total);

    const userEmail = localStorage.getItem("userEmail");

    const result = {
      userEmail: userEmail,
      score: total,
      totalQuestions: questions.length,
      studentName: localStorage.getItem("userName") || "Student",
    };

    try {
      await API.post("/results", result);

      enqueueSnackbar("Result Saved Successfully!", {
        variant: "success",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 500);

    } catch (error) {
      console.log("ERROR OCCURRED");
      console.log(error);

      enqueueSnackbar("Failed to save result!", {
        variant: "error",
      });
    }
  };

  return (

    <div style={{ padding: "20px" }}>

        <BackButton />
        
      <h2>Online Test</h2>

      <p>
        Category:{" "}
        <strong>{category || "All Categories"}</strong>
      </p>

      <p>
        Total Questions: {questions.length}
      </p>

      {/* No questions */}
      {questions.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <h3>
            No questions found for "{category || "this category"}"
          </h3>

          <button onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </button>
        </div>
      ) : (

        /* Questions */
        <div>
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
              <h3>
                {question.questionText}
              </h3>

              {/* Option A */}
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="A"
                  checked={answers[question.id] === "A"}
                  onChange={() =>
                    handleAnswer(question.id, "A")
                  }
                />

                {" "}A. {question.optionA}
              </label>

              <br />
              <br />

              {/* Option B */}
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="B"
                  checked={answers[question.id] === "B"}
                  onChange={() =>
                    handleAnswer(question.id, "B")
                  }
                />

                {" "}B. {question.optionB}
              </label>

              <br />
              <br />

              {/* Option C */}
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="C"
                  checked={answers[question.id] === "C"}
                  onChange={() =>
                    handleAnswer(question.id, "C")
                  }
                />

                {" "}C. {question.optionC}
              </label>

              <br />
              <br />

              {/* Option D */}
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="D"
                  checked={answers[question.id] === "D"}
                  onChange={() =>
                    handleAnswer(question.id, "D")
                  }
                />

                {" "}D. {question.optionD}
              </label>
            </div>
          ))}

          {/* Submit button */}
          <button
            onClick={calculateScore}
          >
            Submit Test
          </button>

          <h2>
            Your Score: {score}
          </h2>
        </div>
      )}

    </div>
  );
}

export default TestPage;
import { useState, useEffect } from "react";
import API from "../services/api";

function AdminDashboard() {

  const [questions, setQuestions] = useState([]);

  const [newQuestion, setNewQuestion] = useState({
  questionText: "",
  optionA: "",
  optionB: "",
  optionC: "",
  optionD: "",
  correctAnswer: "",
  category: "",
  difficulty: ""
});
  const [isEditing, setIsEditing] = useState(false);
  const [searchCategory, setSearchCategory] = useState("");

  const handleAddQuestion = async () => {
     if (
    !newQuestion.questionText ||
    !newQuestion.optionA ||
    !newQuestion.optionB ||
    !newQuestion.optionC ||
    !newQuestion.optionD ||
    !newQuestion.correctAnswer ||
    !newQuestion.category ||
    !newQuestion.difficulty
  ) {
    alert("Please fill all fields");
    return;
  }

  try {
    await API.post("/questions", newQuestion);

    alert("Question Added Successfully!");
    setIsEditing(false);
    setNewQuestion({
  id: "",
  questionText: "",
  optionA: "",
  optionB: "",
  optionC: "",
  optionD: "",
  correctAnswer: "",
  category: "",
  difficulty: ""
    });

    fetchQuestions();

  } 
      catch (error) {
      console.error("Error:", error.response?.data || error.message);
       alert("Failed to Add Question");
       }
  };

      const handleUpdateQuestion = async () => {
  try {
    await API.put(`/questions/${newQuestion.id}`, newQuestion);

    alert("Question Updated Successfully!");

   setNewQuestion({
  id: "",
  questionText: "",
  optionA: "",
  optionB: "",
  optionC: "",
  optionD: "",
  correctAnswer: "",
  category: "",
  difficulty: ""
    });

    setIsEditing(false);

    fetchQuestions();

  } catch (error) {
    console.error(error);
    alert("Update Failed");
  }
};
   
    const handleDeleteQuestion = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this question?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/questions/${id}`);

    alert("Question Deleted Successfully!");

    fetchQuestions();

  } catch (error) {
    console.error(error);
    alert("Delete Failed");
  }
}; 

  const handleSearch = async () => {

  if (searchCategory === "") {
    fetchQuestions();
    return;
  }

  try {

    const response = await API.get(
      `/questions/search?category=${searchCategory}`
    );

    setQuestions(response.data);

  } catch (error) {
    console.error(error);
  }
};

  const fetchQuestions = async () => {
  try {
    const response = await API.get("/questions");
    setQuestions(response.data);
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};

useEffect(() => {
  fetchQuestions();
}, []);
   
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <p>Welcome Admin!</p>

      <div>
        <h2>All Questions</h2>

 {questions.map((question) => (
  <div key={question.id}>
    <p><b>ID:</b> {question.id}</p>
    <p><b>Question:</b> {question.questionText}</p>
    <p><b>Category:</b> {question.category}</p>

    <button
     onClick={() => {
    setNewQuestion(question);
    setIsEditing(true);
     }}
     >
      Edit
     </button>

     <button
       onClick={() => handleDeleteQuestion(question.id)}
      >
       Delete
     </button>

       <hr />
       </div>
     ))}
        
        <button>View Questions</button>

         <button
         onClick={() => {
           setIsEditing(false);

           setNewQuestion({
          id: "",
          questionText: "",
          optionA: "",
          optionB: "",
          optionC: "",
          optionD: "",
          correctAnswer: "",
          category: "",
          difficulty: ""
          });
         }}
>
             Add Question
             </button>

        <input
      type="text"
      placeholder="Search by Category"
      value={searchCategory}
      onChange={(e) => setSearchCategory(e.target.value)}
      />

       <button onClick={handleSearch}>
        Search Questions
       </button>
      
    
     <h2>
      {isEditing ? "Edit Question" : "Add New Question"}
     </h2>

      <input
      type="text"
      placeholder="Question"
       value={newQuestion.questionText}
       onChange={(e) =>
      setNewQuestion({ ...newQuestion, questionText: e.target.value })
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Option A"
  value={newQuestion.optionA}
  onChange={(e) =>
    setNewQuestion({ ...newQuestion, optionA: e.target.value })
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Option B"
  value={newQuestion.optionB}
  onChange={(e) =>
    setNewQuestion({ ...newQuestion, optionB: e.target.value })
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Option C"
  value={newQuestion.optionC}
  onChange={(e) =>
    setNewQuestion({ ...newQuestion, optionC: e.target.value })
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Option D"
  value={newQuestion.optionD}
  onChange={(e) =>
    setNewQuestion({ ...newQuestion, optionD: e.target.value })
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Correct Answer"
  value={newQuestion.correctAnswer}
  onChange={(e) =>
    setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Category"
  value={newQuestion.category}
  onChange={(e) =>
    setNewQuestion({ ...newQuestion, category: e.target.value })
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Difficulty"
  value={newQuestion.difficulty}
  onChange={(e) =>
    setNewQuestion({ ...newQuestion, difficulty: e.target.value })
  }
/>

<br /><br />

 <button
  onClick={isEditing ? handleUpdateQuestion : handleAddQuestion}
 >
  {isEditing ? "Update Question" : "Add Question"}
 </button>



      </div>
    </div>
  );
}

export default AdminDashboard;
// // function App() {
// //   return (
// //     <div>
// //       <h1>Placement Preparation Portal</h1>
// //       <p>Frontend Successfully Connected</p>
// //     </div>
// //   );
// // }

// // export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {

//   const [results, setResults] = useState([]);

//   useEffect(() => {

//     axios.get("http://localhost:8082/api/results")
//       .then(response => {
//         setResults(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });

//   }, []);

//   return (
//     <div>
//       <h1>Placement Preparation Portal</h1>

//       <h2>Results List</h2>

//       {results.map(result => (
//         <div key={result.id}>
//           <p>ID: {result.id}</p>
//           <p>Score: {result.score}</p>
//           <p>Total Questions: {result.totalQuestions}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// import ResultPage from "./pages/ResultPage";

// function App() {
//   return <ResultPage />;
// }

// export default App;

// import React from "react";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TestPage from "./pages/TestPage";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

  <Route path="/" element={<Dashboard />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/test" element={<TestPage />} />

  <Route
    path="/results"
    element={<h2>Results Coming Soon</h2>}
  />

  <Route path="/admin" element={<AdminDashboard />} />

  </Routes>
    </BrowserRouter>
  );
}

export default App;
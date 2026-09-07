import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TestPage from "./pages/TestPage";
import AdminDashboard from "./pages/AdminDashboard";
import ResultPage from "./pages/ResultPage";
import LoginInfo from "./pages/LoginInfo";


function AppContent() {

  const location = useLocation();

  // Login aur Register page par Navbar hide rahega
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";


  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/test" element={<TestPage />} />

        <Route path="/results" element={<ResultPage />} />

        <Route path="/admin" element={<AdminDashboard />} />
         
        <Route path="/login-info" element={<LoginInfo />} />
      </Routes>
    </>
  );
}


function App() {

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );

}


export default App;
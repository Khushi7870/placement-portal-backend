import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SnackbarProvider } from "notistack";
//import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TestPage from "./pages/TestPage";
import AdminDashboard from "./pages/AdminDashboard";
import ResultPage from "./pages/ResultPage";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {

  //const location = useLocation();

  // Login aur Register page par Navbar hide rahega
  //const hideNavbar =
   // location.pathname === "/login" ||
   // location.pathname === "/register";


  return (
    <>
     {/* {!hideNavbar && <Navbar />} */}
      <Routes>
         <Route
         path="/"
         element={
         <ProtectedRoute>
         <Dashboard />
         </ProtectedRoute>
         }
         />
       

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
         path="/dashboard"
        element={
        <ProtectedRoute>
        <Dashboard />
       </ProtectedRoute>
       }
        />

        <Route
       path="/test"
       element={
       <ProtectedRoute>
       <TestPage />
       </ProtectedRoute>
       }
       />

        <Route
       path="/results"
       element={
       <ProtectedRoute>
        <ResultPage />
        </ProtectedRoute>
       }
       />

        <Route path="/admin" element={<AdminDashboard />} />
         
         <Route
        path="/profile"
        element={
        <ProtectedRoute>
        <Profile />
        </ProtectedRoute>
         }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
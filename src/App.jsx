import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Header";
import { AuthProvider } from "./context/AuthContext";
import AddComment from "./Components/CreateComment/CreateComment"
import OneComment from "./Components/OneComment/OneComment"
import "./App.css"
import HomePage from "./Pages/Index/Index";
import RegisterPage from "./Components/Register/Register";
import LoginPage from "./Components/Login/Login";

function App() {
  
  return (
    <AuthProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/addcomment" element={<AddComment />} />
              <Route path="/comment/:id" element={<OneComment />} />
              <Route path="/perfil" element={<h1>Profile</h1>} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
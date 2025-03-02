import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/authPage/Login/Login.jsx';
import Register from './pages/authPage/Register/Register.jsx';
import Tellus from './pages/TellUs/Tellus.jsx';
import HomePage from './pages/Home/HomePage/HomePage.jsx';
import AuthContextProvider from './Context/AuthContext.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<AuthContextProvider />}>
            <Route path="/tell-us-about-you" element={<Tellus />} />
            <Route path="/home/*" element={<HomePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

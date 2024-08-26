import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import QuizPage from '../pages/QuizPage/QuizPage';
import HomePage  from '../pages/HomePage/HomePage';
import NavBar from '../layout/NavBar';
import AboutPawsonality from '../components/AboutPawsonality/AboutPawsonality';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignupPage from '../pages/SignupPage/SignupPage';


const Root = () => {
    return (
        <Router>
          <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/about" element={<AboutPawsonality />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    )
}

export default Root;
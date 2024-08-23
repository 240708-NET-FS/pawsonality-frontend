import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import QuizPage from '../pages/QuizPage/QuizPage';
import HomePage  from '../pages/HomePage/HomePage';
import NavBar from '../layout/NavBar';
import AboutPawsonality from '../components/AboutPawsonality/AboutPawsonality';

const Root = () => {
    return (
        <Router>
          <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/about" element={<AboutPawsonality />} />
        </Routes>
      </Router>
    )
}

export default Root;
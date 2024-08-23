import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import QuizPage from '../pages/QuizPage/LoginPage';


const Root = () => {
    return (
        <Router>
        <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      </Router>
    )
}

export default Root;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import QuizPage from '../pages/QuizPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';


const Root = () => {
    return (
        <Router>
        <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      </Router>
    )
}

export default Root;
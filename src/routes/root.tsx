import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';


const Root = () => {
    return (
        <Router>
        <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </Router>
    )
}

export default Root;
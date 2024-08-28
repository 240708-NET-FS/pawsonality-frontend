import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './layout/NavBar'
import AboutPawsonality from './components/AboutPawsonality/AboutPawsonality'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import QuizPage from './pages/QuizPage/QuizPage'
import SignupPage from './pages/SignupPage/SignupPage'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPawsonality />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

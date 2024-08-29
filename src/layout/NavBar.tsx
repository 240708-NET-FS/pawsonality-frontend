import { Link } from "react-router-dom";
import "./NavBar.css"
import { useNavigate } from "react-router-dom";


const NavBar = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    
    const logout =() => {
        localStorage.clear()
        window.location.reload()
        navigate("/");
    }

    
    return (
        <div id="navbarmain">
            <section id="leftsectionnav">
            <p><Link to="/">Home</Link></p>
            </section>
            <section id="rightsectionnav">
                <p><Link to="/about">About</Link></p>
                { token ?  <p><Link to="/quiz">Quiz</Link></p> : <p></p>} 
                {token ? (
                    <p><Link to="/profile">Profile</Link></p>
                ) : (
                    <p></p>
                )}
                {token ? (
                    <p className="logoutButton" onClick={logout}>Logout</p>
                ) : (
                    <p><Link to="/login">Login</Link></p>
                )}
                
                
            </section>
        </div>
    )
}

export default NavBar;
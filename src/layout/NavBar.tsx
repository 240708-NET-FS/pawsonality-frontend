import { Link } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
    const token = localStorage.getItem('token')
    
    const logout =() => {
        localStorage.clear()
    }

    
    return (
        <div id="navbarmain">
            <section id="leftsectionnav">
            <p><Link to="/">Home</Link></p>
            </section>
            <section id="rightsectionnav">
                
                <p><Link to="/quiz">Quiz</Link></p>
                {token ? (
                    <p><Link to="/">Profile</Link></p>
                ) : (
                    <p></p>
                )}
                {token ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <p><Link to="/login">Login</Link></p>
                )}
                
                
            </section>
        </div>
    )
}

export default NavBar;
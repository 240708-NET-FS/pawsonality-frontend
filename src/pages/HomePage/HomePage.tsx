import { Link } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => {
    const token = localStorage.getItem('token')

    return (
    <>
        <div>
            <section id="HomePageMainArea">
                <h1>
                    Welcome to Pawsonality!
                </h1>
                <img src="https://res.cloudinary.com/dzpne110u/image/upload/v1724432831/Project3Revature/pawsonality_ftq2s5.webp"/>
                {token ? (
                    <button>
                        <Link to ="/quiz">To Quiz!</Link>
                    </button>
                ) : (
                    <button>
                        <Link to="/login">To Login!</Link>
                    </button>
                )}
                <button>
                    <Link to="/about">About Pawsonality!</Link>
                </button>
            </section>
        </div>
    </>)
}
export default HomePage;
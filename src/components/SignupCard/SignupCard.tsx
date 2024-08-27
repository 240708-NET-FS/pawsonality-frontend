import { useState } from "react";
import "./SignupCard.css";
import { Link, useNavigate } from "react-router-dom";

export const SignupCard = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSignupClick = async () => {
        try {
            const response = await fetch("https://pawsonality-gsadcuahcpb6bwd8.eastus-01.azurewebsites.net/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            
           
            if (response.status === 200) {
                const result = await response.text()
                
                console.log(result);
                
                navigate("/login");
            } else {
                console.log(response);
                alert("Signup failed. Please check your details.");
            }
        } catch (error: any) {
            alert("An error occurred: " + error.message);
            console.log(error)
        }
    };

    return (
        <div className={"topContainer"}>
            <div className={"titleContainer"}>
                <div>Sign Up</div>
            </div>
            <br />
            <br />
            <form className={"inputContainer"}>
                <div className={"inputContainer"}>
                    <input
                        value={email}
                        placeholder="Email"
                        onChange={ev => setEmail(ev.target.value)}
                        className={"inputBox"}
                    />
                </div>
                <div className={"inputContainer"}>
                    <input
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={ev => setPassword(ev.target.value)}
                        className={"inputBox"}
                    />
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onSignupClick}
                        value={"Sign Up"}
                    />
                </div>
            </form>
              {/* Divider and Login Button */}
              <div className="divider-break">
                <h5>Already have an account?</h5>
            </div>
            <div className="button-redirect-div">
                <Link to="/login">
                    Sign in to your account
                </Link>
            </div>
        </div>
    );
};
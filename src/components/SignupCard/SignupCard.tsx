import { useState } from "react";
import "./SignupCard.css";
import { Link } from "react-router-dom";

export const SignupCard = () => {
    const [userName, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const onSignupClick = () => {
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: userName,
                firstName: firstName,
                lastName: lastName,
                password: password
            })
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        });
    };

    return (
        <div className={"topContainer"}>
            <div className={"titleContainer"}>
                <div>Sign Up</div>
            </div>
            <br />
            <br />
            <div className={"inputContainer"}>
                <input
                    value={firstName}
                    placeholder="First Name"
                    onChange={ev => setFirstName(ev.target.value)}
                    className={"inputBox"}
                />
               
            </div>
            <div className={"inputContainer"}>
                <input
                    value={lastName}
                    placeholder="Last Name"
                    onChange={ev => setLastName(ev.target.value)}
                    className={"inputBox"}
                />
            </div>
            <div className={"inputContainer"}>
                <input
                    value={userName}
                    placeholder="Username"
                    onChange={ev => setUsername(ev.target.value)}
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
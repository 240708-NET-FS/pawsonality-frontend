import { useState } from "react"
import "./LoginCard.css"
import { Link } from "react-router-dom";


export const LoginCard = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLoginClick = () => {
        fetch ("", {
            method: "POST",
            body: JSON.stringify({
                username: userName,
                password: password
            })
        }
    ).then((response: any) => response.json())
    .then((result: any) => {
        console.log(result);
    });
    }

    return (
        <div className={"topContainer"}>

        <div className={"titleContainer"}>
            <div>Login</div>
        </div>

        <br />
        <br />
        <div className={"inputContainer"}>
            <input
                value={userName}
                placeholder="sign in"
                onChange={ev => setUsername(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                type="password"
                placeholder="password"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onLoginClick}
                value={"Log in"} />
        </div>
           {/* Divider and Signup Button */}
           <div className="divider-break">
                <h5>Don't have an account?</h5>
            </div>
            <div className="button-redirect-div">
                <Link to="/signup">
                    Sign up for an account
                </Link>
            </div>
    </div>
    )


}
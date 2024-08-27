import { useState } from "react"
import "./LoginCard.css"
import { Link, NavLink, useNavigate } from "react-router-dom";


export const LoginCard = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onLoginClick = () => {
        fetch ("https://pawsonality-gsadcuahcpb6bwd8.eastus-01.azurewebsites.net/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
            },
            body: JSON.stringify({
                email: userName,
                password: password
            })
        }
    ).then((response: any) => 
    {
        if (response.status === 200) {
            return response.json();
            
        }
        else {
            alert("Invalid username or password")
            return null;
        }
    }
    )
    .then((result: any) => {
        
        if (result !== null) {
            localStorage.setItem("username", userName);
            localStorage.setItem("token", result.accessToken);
            navigate("/");
            window.location.reload()
        }
        
    }).catch((error: any) => {
        alert(error);
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
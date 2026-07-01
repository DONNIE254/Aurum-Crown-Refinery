import { useState } from "react";
import axios from "axios";

function AdminLogin() {

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [message, setMessage] =
        useState("");

    const login = async () => {

        try {

            const response =
                await axios.post(
                    "http://localhost:5000/api/auth/login",
                    {
                        username,
                        password
                    }
                );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(
                    response.data.user
                )
            );

            setMessage(
                "Login successful!"
            );

        } catch (err) {

            console.error(err);

            setMessage(
                "Invalid login"
            );
        }
    };

    return (

        <div
            style={{
                width: "400px",
                margin: "100px auto",
                padding: "30px",
                border: "1px solid #ccc"
            }}
        >

            <h1>
                ADMIN LOGIN
            </h1>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                    setUsername(
                        e.target.value
                    )
                }
                style={{
                    width: "100%",
                    marginBottom: "15px"
                }}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
                style={{
                    width: "100%",
                    marginBottom: "15px"
                }}
            />

            <button
                onClick={login}
            >
                LOGIN
            </button>

            <h3>
                {message}
            </h3>

        </div>
    );
}

export default AdminLogin;
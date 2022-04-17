import React from "react";
import globalStyles from "../styles/global.js";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const admin = () => {
    return (
        <>
            <style jsx global>
                {globalStyles}
            </style>

            <style jsx>{`
        .wrapper {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .signInPage {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .signInForm {
          text-align: center;
          width: 30vw;
          padding: 2em;
          justify-content: space-between;
        }
        .buttons{
            text-align: right;
            margin-top: 8vh;
        }

        img {
          max-width: 60%;
          max-height: 60%;
        }
      `}</style>

            <div className="wrapper">
                <div className="signInPage">
                    <Paper elevation={3}>
                        <div className="signInForm">
                            <div>
                                <h2><span style={{ color: "#0D21A1" }}>N</span><span style={{ color: "#E83151" }}>E</span><span style={{ color: "#F2BB05" }}>O</span></h2>
                                <h3>Sign In</h3>
                                <p>Use your provided credentials</p>
                            </div>

                            <br />
                            <div>
                                <TextField
                                    fullWidth
                                    type="email"
                                    name="email"
                                    id="outlined-basic"
                                    label="Username"
                                    variant="outlined"
                                />
                                <br />
                                <br />
                                <TextField
                                    fullWidth
                                    type="password"
                                    name="password"
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                />
                            </div>

                            <div className="buttons">
                                {" "}
                                <Button variant="contained">Sign In</Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    );
};

export default admin;

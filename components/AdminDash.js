import React from "react";
import globalStyles from "../styles/global.js";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";

const AdminDash = (props) => {
    useEffect(() => {
        GetJson();
    }, []);

    const [TextFieldValue, setTextFieldValue] = React.useState("");
    const handleChange = (event) => {
        setTextFieldValue(event.target.TextFieldValue);
    };

    const GetJson = () => {
        fetch(
            // add to env variable
            process.env.NEXT_PUBLIC_S3URL
        )
            .then((res) => res.json())
            .then((data) => JSON.stringify(data))
            .then((data) => setTextFieldValue(data));
    };

    return (
        <div>
            <style jsx global>
                {globalStyles}
            </style>
            <style jsx>
                {`
          .wrapper {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .body {
            width: 50vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
            </style>
            <div className="wrapper">
                <div className="body">
                    <h1>Admin</h1>
                    <p>Welcome to the admin page</p>

                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        min-rows={4}
                        value={TextFieldValue}
                        onChange={handleChange}
                    />
                    <button onClick={() => props.ToggleAuthentication()}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default AdminDash;

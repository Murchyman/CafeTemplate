import React from "react";
import Head from "next/head";
import useFetch from "../hooks/useFetch.js";
import globalStyles from "../styles/global.js";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";

const AdminDash = (props) => {
    const { data, loading } = useFetch(
        process.env.NEXT_PUBLIC_S3URL
    );


    useEffect(() => {
        if (data) {
            setTextFieldValue(JSON.stringify(data, null, 2));
        }
    }, [data]);


    function pushData() {
        const params = {
            json: JSON.stringify(JSON.parse(TextFieldValue)),
            file: `${process.env.NEXT_PUBLIC_Name}/Data.json`,
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };

        fetch('https://nkc4n1ec95.execute-api.ap-southeast-2.amazonaws.com/default/MudjimbaUploadToS3', options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

    const [TextFieldValue, setTextFieldValue] = React.useState("");



    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

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
                        style={{ backgroundColor: "white" }}
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        min-rows={4}
                        value={TextFieldValue}
                        onChange={(event) => setTextFieldValue(event.target.value)}
                    />
                    <button onClick={pushData}>Push Data</button>
                    <button onClick={() => props.ToggleAuthentication()}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default AdminDash;

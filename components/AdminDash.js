import React from "react";
import Head from "next/head";
import useFetch from "../hooks/useFetch.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import globalStyles from "../styles/global.js";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";

const AdminDash = (props) => {
  const [TextFieldValue, setTextFieldValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalText, setModalText] = React.useState("");
  const [modalButton, setModalButton] = React.useState("");

  const { data, loading } = useFetch(process.env.NEXT_PUBLIC_S3URL);

  useEffect(() => {
    if (data) {
      //when data is retrieved, set the textfield value
      setTextFieldValue(JSON.stringify(data, null, 2));
    }
  }, [data]);

  function pushData(json) {
    const params = {
      //json parse normalises the string that was disfigured by html then we can re-stringify it
      json: json,
      file: `${process.env.NEXT_PUBLIC_Name}/Data.json`,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(params),
    };

    fetch(
      "https://nkc4n1ec95.execute-api.ap-southeast-2.amazonaws.com/default/MudjimbaUploadToS3",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //this is a workaround because I can't be bothered to update the lambda function to pit out something better than 'yes' :p
        data === "yes"
          ? alert("Data pushed successfully")
          : alert("An error occured");
      });
  }

  return (
    <>
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
            width: 70vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .Buttons {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-top: 2em;
            width: 100%;
          }
          .Button {
            margin-right: 1em;
          }
          .Help {
            position: absolute;
            top: 1em;
            right: 1em;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 13em;
          }
        `}
      </style>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setModalText("");
          setModalTitle("");
          setModalButton("");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            color: "text.primary",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalText}
          </Typography>
          <br />
          <div style={{ textAlign: "right" }}>{modalButton}</div>
        </Box>
      </Modal>

      <div className="wrapper">
        <div className="body">
          <h1>Admin</h1>
          <p>Please call Mitch if you are confused 0490117140</p>
          <div className="Help">
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
                setModalText(
                  "This will reset the menu to a known working version in the backend. This is a destructive action and cannot be undone."
                );
                setModalButton(
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setOpen(false);
                      fetch(process.env.NEXT_PUBLIC_KnownWorkingData)
                        .then((response) => response.json())
                        .then((data) => {
                          pushData(JSON.stringify(data));
                        });
                    }}
                  >
                    Hard Reset
                  </Button>
                );
              }}
            >
              hard reset
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
                setModalTitle("Help");
                setModalText(
                  "This is the admin dashboard. Here you can upload data to the server. This is a JSON file. Please make sure that the data is in the correct format. If you are unsure about the format, please contact Mitch."
                );
              }}
            >
              Help
            </Button>
          </div>
          <TextField
            style={{ backgroundColor: "white" }}
            id="outlined-multiline-static"
            multiline
            fullWidth
            maxRows={25}
            value={TextFieldValue}
            onChange={(event) => setTextFieldValue(event.target.value)}
          />
          <div className="Buttons">
            <Button
              style={{ marginRight: "1em" }}
              size="large"
              onClick={() => setTextFieldValue(JSON.stringify(data, null, 2))}
              variant="contained"
            >
              Reset
            </Button>
            <Button
              size="large"
              onClick={() =>
                pushData(JSON.stringify(JSON.parse(TextFieldValue)))
              }
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Submit
            </Button>
          </div>

          {/* <button onClick={() => props.ToggleAuthentication()}>Logout</button> */}
        </div>
      </div>
    </>
  );
};

export default AdminDash;

import React from "react";
import SignOnForm from "../components/SignOnForm.js";
import AdminDash from "../components/AdminDash.js";
import { useState } from "react";

const admin = () => {

    const [authenticated, setAuthenticated] = useState(true);

    const ToggleAuthentication = () => {
        setAuthenticated(!authenticated);
    };


    if (authenticated) {
        return (<AdminDash ToggleAuthentication={ToggleAuthentication} />)
    }
    else {
        return (
            <SignOnForm ToggleAuthentication={ToggleAuthentication} />
        )
    }
};

export default admin;

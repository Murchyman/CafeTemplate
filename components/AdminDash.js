import React from 'react'
import globalStyles from '../styles/global.js'
const AdminDash = (props) => {

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
          justify-content: center;
        }
      `}
            </style>
            <div className="wrapper">
                <h1>Admin</h1>
                <p>Welcome to the admin page</p>
                <button onClick={() => props.ToggleAuthentication()}>Logout</button>
            </div>
        </div>
    );
}

export default AdminDash
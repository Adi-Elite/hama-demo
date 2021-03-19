import React from 'react';
import "./MemberSignIn.css";

 export const MemberSignIn = () => {
    return (
        <div style={{paddingRight:"10rem"}}>
            <div className="main-signin">
                <h2>Member Login</h2>
                <div>
                    Username
                </div>
                <input type="text" placeholder="username"/>
                <div>
                    Password
                </div>
                <input type="password" placeholder="password"/>
                <button className="button-signIn" >Sign In</button>
            </div>
        </div>
    )
}


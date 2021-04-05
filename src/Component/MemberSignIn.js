import React, { Component } from 'react';
import "./MemberSignIn.css";

 export class MemberSignIn  extends Component {
     constructor(){
         super();
         this.state={
             user:""
         }
     }
     render(){
        return (
            <div style={{paddingRight:"2rem"}}>
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
                    <a style={{fontSize:"1.2rem"}} >Login as an Admin</a>
                    <button className="button-signIn" >Sign In</button>
            </div>
            </div>
        )
     }
    
}


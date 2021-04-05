import React from 'react';
import {MemberSignIn} from './MemberSignIn.js';
import {Link} from 'react-router-dom';
import {Blog} from './Blog.js';


export function Mainpage() {
    return (
        <div>
                <MemberSignIn/>
                <Blog/>
        </div>
    )
}

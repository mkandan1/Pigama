import MyAccount from './MyAccount'
import React from 'react'
import { Link } from "react-router-dom";
import OauthState from '../Oauth/OauthState';
function MyAccountMiddleWare() {

   

    return(
       <>
        {
            OauthState ? <MyAccount/> : <p>You don't have access. Login <Link to='/Oauth/login'>here</Link></p>
        }
        </>
    )

}

export default MyAccountMiddleWare
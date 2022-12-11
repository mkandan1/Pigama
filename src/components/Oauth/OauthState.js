import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState} from "react";
import config from './../../config';

function OauthState() {
    const auth = getAuth(config);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            useEffect(()=>{
                setIsLoggedIn(true)
            })
        } else {
            useEffect(()=>{
                setIsLoggedIn(false)
            })
        }
    })
    return isLoggedIn
}

export default OauthState
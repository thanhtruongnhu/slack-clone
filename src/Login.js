import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                // when received info from user, update the actionTypes and push it into the datalayer (reducer)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                    // src="https://images.techhive.com/images/article/2016/11/siri-mac-icon-100694914-large.jpg"
                    alt=""
                />
                <h1>Sign in to Kyle's Slack Clone</h1>
                {/* <a href="https://www.github.com/">Visit my github repo!</a> */}
                <p>https://github.com/thanhtruongnhu</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login

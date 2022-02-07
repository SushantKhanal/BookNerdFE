import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../../utils/refreshTokenSetup';
import { CLIENT_ID } from '../../../constants';
import { registerUser } from './SignInService';
import { useNavigate } from 'react-router-dom';

function SignIn(props) {
    let navigate = useNavigate();

    const onSuccess = (res) => {
        props.changeLoggedInStateHandler(res, true);
        sendIdTokenToTheServer(res.getAuthResponse().id_token);
        refreshTokenSetup(res);
    };

    const sendIdTokenToTheServer = async (id_token) => {
        await registerUser();       
        navigate("/addPost", {replace: true});
    }

    const onFailure = (res) => {
        alert('[Login Failed] res:', res);
    };

    return (
      <div>
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px'}}
            isSignedIn={true}
          />
      </div>
    );
}
  
export default SignIn;

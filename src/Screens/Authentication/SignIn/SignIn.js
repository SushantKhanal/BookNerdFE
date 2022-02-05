import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../../utils/refreshTokenSetup';
import { CLIENT_ID } from '../../../constants';

function SignIn(props) {
    const onSuccess = (res) => {
        console.log('[Loogin Success] currentUser:', res.profileObj);
        props.changeLoggedInStateHandler(res, true);
        refreshTokenSetup(res);
    };

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

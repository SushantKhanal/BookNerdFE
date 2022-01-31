import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../../utils/refreshTokenSetup';

const CLIENT_ID = '405139444460-gdpnh7kgm306ao7rm78askvql7243pdm.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

function SignIn() {
    const onSuccess = (res) => {
        console.log('[Loogin Success] currentUser:', res.profileObj);

        //initialising the setup
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
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

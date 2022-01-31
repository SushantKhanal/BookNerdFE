import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '405139444460-gdpnh7kgm306ao7rm78askvql7243pdm.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

function SignOut() {
    const onSuccess = (res) => {
        alert('Logged out successfully!');
    };

    return (
      <div>
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
          />
      </div>
    );
}
  
export default SignOut;
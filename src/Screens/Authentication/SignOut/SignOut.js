import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { CLIENT_ID } from '../../../constants'

function SignOut(props) {
    let navigate = useNavigate();

    const onSuccess = (res) => {
        props.changeLoggedInStateHandler(res, false);
        navigate("/", {replace: true});
    };

    const onFailure = (res) => {
      alert('Logging out failed!');
    }

    return (
      <div>
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            onFailure={onFailure}
          />
      </div>
    );
}
  
export default SignOut;

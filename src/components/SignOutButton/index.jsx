import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { CLIENT_ID, LOGOUT_EVENT } from '../../constants'
import Emitter from '../../shared/Emitter';
import { updateLocalStorageUserData } from '../../utils/localStorageService';
import { StyledLogoutButton, StyledLogOutIcon } from './styles';

const SignOutButton = (props) => {

    const onLogOutSuccess = (res) => {
      updateLocalStorageUserData(null, false);
      Emitter.emit(LOGOUT_EVENT, null);
    };

    const onLogOutFailure = (res) => {
      alert('Logging out failed!');
    }

    return (
      <GoogleLogout
        clientId={CLIENT_ID}
        render={renderProps => (
            <>
                <StyledLogOutIcon onClick={renderProps.onClick}/>
                <StyledLogoutButton color="inherit" onClick={renderProps.onClick}>Logout</StyledLogoutButton>
            </>
        )}
        buttonText="Logout"
        onLogoutSuccess={()=>{
            onLogOutSuccess();
        }}
        onFailure={onLogOutFailure}
      />
    );
}
  
export default SignOutButton;

import React from 'react';
import { useState } from 'react';
import SignIn from '../../screens/Authentication/SignIn/SignIn';
import SignOut from '../../screens/Authentication/SignOut/SignOut';
import { updateLocalStorageUserData } from '../../utils/localStorageService';

const Home = () => {

    let [isLoggedIn, setLoggedIn] = useState();

    const changeLoggedInStateHandler = (data, state) => {
      updateLocalStorageUserData(data, state);
      setLoggedIn(state);
    }

    return (
            <div>
                {
                    isLoggedIn ? <SignOut changeLoggedInStateHandler={(data, state) => changeLoggedInStateHandler(data, state)}/> :  
                    <SignIn changeLoggedInStateHandler={(data, state) => changeLoggedInStateHandler(data, state)}/>
                }
            </div>
        );
    }

export default Home;

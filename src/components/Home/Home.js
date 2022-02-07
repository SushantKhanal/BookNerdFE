import React from 'react';
import { useState } from 'react';
import SignIn from '../../screens/Authentication/SignIn/SignIn';
import SignOut from '../../screens/Authentication/SignOut/SignOut';
import * as localStorageService from '../../utils/localStorageService';

const Home = () => {

    let [isLoggedIn, setLoggedIn] = useState();

    const changeLoggedInStateHandler = (data, state) => {
      updateLocalStorage(data, state);
      setLoggedIn(state);
    }
  
    const updateLocalStorage = (data, state) => {
      !state ? localStorageService.deleteItem('userData') : localStorageService.saveItem('userData', data);
      state && localStorageService.saveItem('userData', data);
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

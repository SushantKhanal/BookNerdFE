import { useState } from 'react';
import './App.css';
import SignIn from './Screens/Authentication/SignIn/SignIn';
import SignOut from './Screens/Authentication/SignOut/SignOut';
import * as localStorageService from './utils/localStorageService';

function App() {
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
    <div className="App">
      {
        isLoggedIn ? <SignOut changeLoggedInStateHandler={(newState) => changeLoggedInStateHandler(newState)}/> :  
        <SignIn changeLoggedInStateHandler={(newState) => changeLoggedInStateHandler(newState)}/>
      }
    </div>
  );
}

export default App;

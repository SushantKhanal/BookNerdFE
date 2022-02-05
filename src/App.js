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
        isLoggedIn ? <SignOut changeLoggedInStateHandler={(data, state) => changeLoggedInStateHandler(data, state)}/> :  
        <SignIn changeLoggedInStateHandler={(data, state) => changeLoggedInStateHandler(data, state)}/>
      }
    </div>
  );
}

export default App;

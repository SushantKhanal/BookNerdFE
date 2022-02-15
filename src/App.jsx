import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/Authentication/SignIn';
import { useEffect, useState } from 'react';
import { updateLocalStorageUserData } from './utils/localStorageService';
import { LOGOUT_EVENT } from './constants';
import Emitter from './shared/Emitter';

function App() {
  let [isLoggedIn, setLoggedIn] = useState();

  const changeLoggedInStateHandler = (data, state) => {
    updateLocalStorageUserData(data, state);
    setLoggedIn(state);
  }

  useEffect(() => {
    Emitter.on(LOGOUT_EVENT, (data)=>{
      changeLoggedInStateHandler(data, false);
    })
    return () => {
      Emitter.off(LOGOUT_EVENT);
    }
  }, []);

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home/>} />
      </Routes> */}
      {
        !isLoggedIn ? <SignIn changeLoggedInStateHandler={(data, state) => {
          changeLoggedInStateHandler(data, state);
        }}/> : <Home/>
      }
    </div>
  );
}

export default App;

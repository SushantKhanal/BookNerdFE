import './App.css';
import SignIn from './Screens/Authentication/SignIn/SignIn';
import SignOut from './Screens/Authentication/SignOut/SignOut';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Welcome to Book Nerd!
        </p>
      </header> */}
      <SignIn/>
      <SignOut/>
    </div>
  );
}

export default App;


//client id: 405139444460-gdpnh7kgm306ao7rm78askvql7243pdm.apps.googleusercontent.com
//client secret: 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
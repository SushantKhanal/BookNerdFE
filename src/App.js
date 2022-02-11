import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddPost from './screens/AddPost/AddPost';
import { AppBar, Container, CssBaseline } from '@mui/material';
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    // <div className="App">
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/addPost" element={<AddPost/>} />
    //   </Routes>
    // </div>

    <>
      <CssBaseline/>
      <NavBar/>
      <main>
        <div>
          <Container>

          </Container>
        </div>
      </main>
    </>
  );
}

export default App;

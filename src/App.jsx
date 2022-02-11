import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddPost from './screens/AddPost/AddPost';
import { CssBaseline, Grid } from '@mui/material';
import NavBar from "./components/Navbar/Navbar";
import Feed from './components/Feed/Feed';
import Rightbar from './components/Rightbar/RightBar';

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
      <Grid container>
        <Grid item sm={8} xs={12}>
          <Feed/>
        </Grid>
        <Grid item sm={4}>
          <Rightbar/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

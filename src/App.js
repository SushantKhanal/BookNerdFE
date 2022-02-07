import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddPost from './screens/AddPost/AddPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addPost" element={<AddPost/>} />
      </Routes>
    </div>
  );
}

export default App;

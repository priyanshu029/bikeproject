import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Test from './Test';
import Home from './component/home/Home';
import PopularBikes from './component/popular/PopularBikes';
import { Routes, Route } from 'react-router-dom';
import MyRouting from './component/router/MyRouting';
import About from './component/about/About';
import Login from './component/login/Login';
import SearchResult from './component/search/SearchResult';
import Favourite from './component/favourite/Favourite';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MyRouting />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/popularbikes' element={<PopularBikes/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/search' element={<SearchResult/>}></Route>
        <Route path='/favourite' element={<Favourite/>}></Route>
      </Routes>


    </div>
  );
}

export default App;

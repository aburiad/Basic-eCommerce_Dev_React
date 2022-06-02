import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Shop' element={<Shop></Shop>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

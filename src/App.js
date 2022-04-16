import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Home from './Components/Home/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
// import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route></Route>
     <Route path='/blog' element={<Blog></Blog>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;

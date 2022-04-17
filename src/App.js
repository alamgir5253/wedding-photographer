
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Home from './Components/Home/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login';
import Signup from './Components/SignUP/Signup';
// import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/blog' element={<Blog></Blog>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/signup' element={<Signup></Signup>}></Route>
     {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;

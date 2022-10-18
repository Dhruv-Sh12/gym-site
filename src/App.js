
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from './components/Intro';
import Footer from './Footer';
import Head from './Head';
import Courses from './components/Courses';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  return (
  <>
  <BrowserRouter>
    <Head/>
    <Routes>
        <Route path="/" element={ <Intro/>}></Route>
        <Route index element={<Intro />} />
        <Route path="courses" element={<Courses />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  
 
  
  </>
  );
}

export default App;

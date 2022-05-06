import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Footer from './components/footer';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=>{
    return (
    <>
    <Router>
      <ToastContainer/> 
      <Header/>
      <div className="wrapper">
        <div className='container-fluid'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/singin" element={<SignIn />} />
            <Route path="/singup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    
      <Footer/>
      </Router>
      </>  
    )
  }

export default App;
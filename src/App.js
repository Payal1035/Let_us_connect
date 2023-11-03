import './App.css';
import React from "react";
import Twitter from "./Twitter";
import Dashboard from './Dashboard';
import Kpp from './Group/Newkpp/Kpp';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from './Group/Main';
import Wsidebar from './Sidebar/Wsidebar';
import Message from './Message';
import Chating_Section from './Nchat/Chating_Section';




function App() {
  
  return (
    <>
    <>
      <BrowserRouter basename="/Lets_connect" >
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/Kpp" element={<Kpp />}/>
        <Route exact path="/Twitter" element={<Twitter />}/>
        <Route exact path="/Wsidebar" element={<Wsidebar/>}/>
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/Chat" element={<Chating_Section/>}/>
      </Routes>
      </BrowserRouter>
      </>
        </>
  );
}

export default App;


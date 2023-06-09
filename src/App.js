import React from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from "./Component/Home"
import Contact from "./Component/Contact"
import ContextData from './Component/ContextData';
import AddData from './Component/AddData';
import Data from "./Component/StudentInfo";
import AddNew from './Component/AddNew';
import Edit from './Component/Edit';
import { useState } from 'react';


function App() {
  let [data, SetData] = useState(Data);
  return (
    <div className='App'>
      <div className='Navbar'>
        <NavLink to="/" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Home</NavLink>
        <NavLink to="/students" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Students</NavLink>
        <NavLink to="/contact" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Contact US</NavLink>
      </div>

      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/students" element={
            <ContextData.Provider value={{entries : data , UpdateFun : SetData}}>
             <AddData/>
           </ContextData.Provider>
          } />

            <Route path="/addNew" element={
            <ContextData.Provider value={{entries:data ,UpdateFun :SetData}}>
             <AddNew/>
           </ContextData.Provider>
          } />

          <Route path="/students/editStudent" element={
            <ContextData.Provider value={{entries:data ,UpdateFun :SetData}}>
            <Edit/>
           </ContextData.Provider>
          } />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;

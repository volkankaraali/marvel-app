/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CharacterDetail from './pages/CharacterDetail';
import Home from './pages/Home';

function App() {

  

  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='detail/:id' element={<CharacterDetail/>} />
      </Routes>
      

    </div>
  );
}

export default App;

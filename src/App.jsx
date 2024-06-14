import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<header />} />
      </Routes>
    </BrowserRouter>
      <Header />
      <Main />
    </>
  )
}

export default App

import { useState } from 'react';
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Main />
    </>
  )
}

export default App

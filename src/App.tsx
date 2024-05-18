import { useState } from 'react'
import './App.css';
import LoginComponent from './components/LoginComponent';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigate from './components/Navigate';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginComponent/>
      {/* comment it out */}
      {/* <ProductList/> */}

    </>
  )
}

export default App

import React from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList.js';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
       <ProductList />
      </main>
    </div>
  );
}

export default App;


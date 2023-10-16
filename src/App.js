import './App.css';
import React, {useEffect} from 'react';
import {
  Navigate,
  NavLink,
  Routes,
  Route
} from "react-router-dom";
import productApi from './api/productApi'
import ProductFeature from './features/Product';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      };
      const productList =  await productApi.getAll(params);
      console.log(productList)
    }
    fetchProducts();
  }, [])
  return (
    <div className="App">
      <Header />
      <NavLink to='products/' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Product</NavLink>

      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/" element={<ProductFeature />} />
      </Routes>

    </div>
  );
}

export default App;

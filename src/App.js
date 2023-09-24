import './App.css';
import React, {useEffect} from 'react';
import {
  Navigate,
  NavLink,
  Routes,
  Route
} from "react-router-dom";
import productApi from './api/productApi'
import categoryApi from './api/categoryApi'
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

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
      Homepage
      <br></br>
      <NavLink to='todos' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Todo</NavLink>
      <br></br>
      <NavLink to='albums' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Album</NavLink>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>

    </div>
  );
}

export default App;

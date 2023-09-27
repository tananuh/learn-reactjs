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
import CounterFeature from './features/Counter';
import UserFeature from './features/User';

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
      {<UserFeature />}
      <NavLink to='' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Home</NavLink>
      <br></br>
      <NavLink to='todos' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Todo</NavLink>
      <br></br>
      <NavLink to='albums' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Album</NavLink>
      <br></br>
      <NavLink to='counter' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Counter</NavLink>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/counter" element={<CounterFeature />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>

    </div>
  );
}

export default App;

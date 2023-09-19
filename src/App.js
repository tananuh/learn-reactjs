import './App.css';
import {
  NavLink,
  Routes,
  Route
} from "react-router-dom";
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Homepage
      <br></br>
      <NavLink to='todos' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Todo</NavLink>
      <br></br>
      <NavLink to='albums' className={(navData) => (navData.isActive ? "current-page" : 'none')}>Album</NavLink>
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>
      
    </div>
  );
}

export default App;

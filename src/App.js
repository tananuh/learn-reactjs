import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Homepage
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>
      
    </div>
  );
}

export default App;

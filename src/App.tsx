import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
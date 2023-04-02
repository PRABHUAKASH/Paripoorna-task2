import './App.css';
import Navbar from './Components/Navbar';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css'
import MainLayout from './home.jsx';
import GamePage from './gamePage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} /> {/* Home route */}
        <Route path="/game" element={<GamePage />} /> {/* Game route */}
      </Routes>
    </Router>
    </>
  )
}

export default App

import './home.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function MainLayout() {

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleStartGame = () => {
    navigate('/game'); // Navigate to the GamePage route
  };

    return (
      <div>
        <div className="heroContainer">
            <img src="/imges/dices.png" alt="" />
            <div className="buttonBox">
                <h1>DICE GAME</h1>
                <button onClick={handleStartGame} >Start Game</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainLayout;
import './App.css';
import { useState} from 'react';
import Card from './components/Card';

const App = () => {
  const [side, setSide] = useState(0);
  const [card, setCard] = useState(1);
  const updateSide = () => setSide(side);

  const getNextCard = () => setCard(card+1);
  const getPreviousCard = () => setCard(card-1);
  
  return (
    <div className='App'>
      <h1>Practice Esperanto 🍄🌿</h1>
      <h2>Test your knowledge of the constructed language ☘️</h2>
      
    </div>
  )
}

export default App;
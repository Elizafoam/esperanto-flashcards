import './App.css';
import { useState} from 'react';
import Card from './components/Card';

const App = () => {
  const [side, setSide] = useState("word");
  const [card, setCard] = useState(1);
  const updateSide = () => {
    console.log();
    if (side.length == 4){
      setSide("translation");
    }
    else {
      setSide("word");
    }

  }
  const getNextCard = () => setCard(card+1);

  const cardPairs = [
    {"word": "name", "translation": "nomo"},
    {"word": "person", "translation": "persono"},
    {"word": "plant", "translation": "planto"},
    {"word": "tree", "translation": "arbo"},
    {"word": "house", "translation": "domo"},
    {"word": "child", "translation": "infano"},
    {"word": "saluton", "translation": "hello"},
    {"word": "word", "translation": "vorto"},
    {"word": "face", "translation": "vizagxo"},
    {"word": "man", "translation": "viro"},
    {"word": "fear", "translation": "timi"},
    {"word": "south", "translation": "sudo"},
    {"word": "robo", "translation": "robe"},
    {"word": "presi", "translation": "print"},
    {"word": "wall", "translation": "muro"},
    {"word": "rain", "translation": "pluva"},
    {"word": "mangxi", "translation": "eat"},
    {"word": "language", "translation": "lingvo"},
    {"word": "family", "translation": "familio"},
    {"word": "word", "translation": "bona"}
  ];
  
  return (
    <div className='App'>
      <h1>Practice Esperanto 🍄🌿</h1>
      <h2>Test your knowledge of the constructed language ☘️</h2>
      <h3>Total Number of Cards: {cardPairs.length}</h3>
      <h3>Current Card Number: {card}</h3>
      <div>{side}</div>
      <div onClick={updateSide}>
        <Card className='Card' onClick={updateSide} text={cardPairs[card][side]}/>
      </div>
      <div className='button' onClick={getNextCard}>→</div>
      
    </div>
  )
}

export default App;
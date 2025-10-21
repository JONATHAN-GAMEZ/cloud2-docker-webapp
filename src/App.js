import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response =>{
        setCharacters(response.data.results);
      })
      .catch(error => console.error('Error:', error));
  },[]);

  return (
    <div>
      <h1>Personajes de rick y morty</h1>
      {characters.map(character => (
        <div key={character.id}>
          <h2> {character.name} </h2>
          <p>Especie: {character.species}</p>
          <img src={character.image} alt={character.name} />
        </div>
      ))}

    </div>
  );
}

export default App;

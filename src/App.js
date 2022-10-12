import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';

import Recommended from './components/recommended.jsx';

const data = require('./fakeData/fakeMovies.js');

function App() {
  //const [movieId] = useState(642885);
  console.log('root data', data.recommended.results);
  const [recommendedMovies] = useState(data.recommended.results);
  // need to create get request to /recommended/movieId to get recommended movies and pass to component

  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <div><Recommended movies={recommendedMovies}/></div>
      </header>
    </div>
  );
}

export default App;

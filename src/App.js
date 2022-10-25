import React, {useState, useEffect} from 'react';
import './main.css'
import './details.css';
import Carousel from './components/main/subComponents/carousel.jsx';
// import Recommended from './components/recommended.jsx';
import Watch from './components/watch.jsx';

//const axios = require('axios');

const data = require('./fakeData/fakeMovies.js');

function App() {
  //console.log('root data', data.recommended.results);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [watchProviders, setWatchProviders] = useState({})

  React.useEffect(() => {
    // axios.get('/recommended/642885')
    //   .then((data) => {
    //     console.log(data);
    //   })
    setWatchProviders(data.watch);
    setRecommendedMovies(data.recommended.results);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      {/* <style>{'body { background-color:black; }'}</style> */}
        <h1>recommended for movie Hocus Pocus 2 642885</h1>
        <Carousel movies={recommendedMovies}/>
        {/* <Recommended movie={recommendedMovies}/> */}
        <h1>watch providers for thor love and thunder 616037</h1>
        <Watch providers={watchProviders}/>
      </header>
    </div>
  );
}

export default App;

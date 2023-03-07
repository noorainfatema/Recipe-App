import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "d978bffb";
  const APP_KEY = "fadc99c96e29940fc1e73f57890162b1";

  useEffect(() =>{
    console.log('Effect has been run');
  });

  const [counter, setCounter] = useState(0);

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button onClick={() => setCounter(counter + 1)} className="search-button" type="submit">{Counter}}</button>
      </form>
    </div>
  );
};

export default App;

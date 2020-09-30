import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import IMC from './components/Imc'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IMC></IMC>
      </header>
    </div>
  );
}

export default App;

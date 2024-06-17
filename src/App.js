import React from 'react';
import Header  from './Compomnents/LAYOUT/header';
import './App.css';
import Meals from './Compomnents/MEALS/meals';

function App() {
  return (
    <div className="App">
     <Header />
     <main>
      <Meals />
     </main>
    </div>
  );
}

export default App;

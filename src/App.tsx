import React from 'react';
import './App.css';
import AdventCalendar from './components/AdventCalendar';
import { clarity } from 'react-microsoft-clarity';

function App() {
  clarity.init('uem2s1oder');
  return (
    <div className="App">
        <h1>Advent Calendar 2025</h1>
        Martin's Code Lounge
      <main>
        <AdventCalendar />
      </main>
    </div>
  );
}

export default App;

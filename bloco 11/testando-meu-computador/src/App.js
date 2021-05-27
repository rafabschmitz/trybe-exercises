import React from 'react';
import './App.css';
//import ReactClass from './component.js';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['tomar banho', 'almoçar', 'jantar', 'estudar'];
const lista = array.map((compromisso) => Task(compromisso));

function App() {
  return (lista);
}

export default App;

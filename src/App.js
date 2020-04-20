import React from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent/ClassComponent';

function App() {
  console.log('App Component');
  return (
    <div className="App">
      <h1>APP Component</h1>
      <ClassComponent prebaChino={'hola Chino'} />
    </div>
  );
}

export default App;

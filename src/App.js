import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import data from './fakeData/data'


console.log(data);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
      
    </div>
  );
}

export default App;

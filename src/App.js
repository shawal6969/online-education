import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import fakeData from './fakeData/courses'
import { useState } from 'react';
console.log(fakeData);

function App() {
  const data = fakeData
  const [courses,setCourses] = useState(data);
  return (
    <div className="App">
      <Header></Header>
      {
        courses.map(course => <Courses course={course}></Courses>)
      }
    </div>
  );
}

export default App;

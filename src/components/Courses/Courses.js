import React from 'react';
import './Courses.css'

const Courses = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.course.name}</h1>
            <h3>{props.course.price}</h3>
            <button>Enroll Now</button>
        </div>
    );
};

export default Courses;
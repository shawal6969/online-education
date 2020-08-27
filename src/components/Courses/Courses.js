import React from 'react';
import './Courses.css'
import data from '../../fakeData/data'
import { useState } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Button from 'react-bootstrap/Button';

    function Courses(){
    const [courses, setCourses] = useState(data);

    var [enrollCourse, setEnrollCourse] = useState([])

    const handleEvent = (course) => {
        console.log("clicked", course);
        const newEnrollCourse = [...enrollCourse, course ];
        setEnrollCourse(newEnrollCourse);
    }

    const courseArea = {
        width: '70%'
    }

    return (
        <div className='courseContainer'>
            <div>
                {
                    courses.map(course => 
                        <div className='courseArea' style={courseArea}>
                            <h2>{course.name}</h2> 
                            <h3>{course.price}</h3>
                            <Button variant='warning' onClick = {() => (handleEvent(course))}>Enroll Now</Button>
                        </div>
                    )
                }
            </div>
            <StickyContainer>
                
            </StickyContainer>
            <div className='courseStatus' >
                <h5>Enrolled Course:{enrollCourse.length}</h5>
                <br/>
                <h6>course amount $00</h6>
            </div>
        </div>
    );
};

export default Courses;
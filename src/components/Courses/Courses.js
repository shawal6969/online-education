import React from 'react';
import './Courses.css'
import data from '../../fakeData/data'
import { useState } from 'react';
import Prices from '../Prices/Prices';


    function Courses(){
    const [courses, setCourses] = useState(data);

    const [cart, setCart] = useState([]);
    console.log(cart.length);

    const handleEvent = (course) => {
        console.log(course);
        const newCart = [...cart, course];
        setCart(newCart);
    }

    //console.log(cart);

    return (
        <div className='courseContainer'>
            <div>
               {
                   courses.map(course => <Prices handleEvent={handleEvent} course={course}></Prices>)
               }
            </div>
            <div className='courseStatus' style={{position: 'fixed', top: '100px'}}>
               
                <h2>course {cart.length}</h2>
            </div>
        </div>
    );
};

export default Courses;
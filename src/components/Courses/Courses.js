import React from 'react';
import './Courses.css'
import data from '../../fakeData/data'
import { useState } from 'react';
import Prices from '../Prices/Prices';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



    function Courses(){
    const [courses, setCourses] = useState(data);

    const [cart, setCart] = useState([]);
    //console.log(cart.length);

    const handleEvent = (course) => {
        //console.log(course);
        const newCart = [...cart, course];
        setCart(newCart);
    }

     //let total = cart.reduce((total, programm) => total + programm.price, 0);
     
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        total = total + Number(element.price);
        console.log(total);  
    }

    total.toFixed(2);
     
    //console.log(cart);

    return (
        <div className='courseContainer'>
            <div>
               {
                   courses.map(course => <Prices handleEvent={handleEvent} course={course}></Prices>)
               }
            </div>
            <div className='courseStatus' style={{position: 'fixed', top: '100px'}}>
                <h2 style={{padding: '25px'}}><FontAwesomeIcon icon={faShoppingCart} />{cart.length}</h2>
                <h6>$ {total.toFixed(2)}</h6>
            </div>
           
        </div>
    );
};

export default Courses;
import React from 'react';
import './Courses.css'
import data from '../../fakeData/data'
import { useState } from 'react';
import { Card, CardGroup, CardDeck, Container, Row, Col, Button } from 'react-bootstrap';

    function Courses(){
    const [courses, setCourses] = useState(data);

    var [enrollCourse, setEnrollCourse] = useState([])

    const handleEvent = (course) => {
        console.log("clicked", course);
        const newEnrollCourse = [...enrollCourse, course ];
        setEnrollCourse(newEnrollCourse);
    }

    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            {
                                courses.map(course =>
                                    <CardGroup style={{display: 'flex', flexDirection: 'row',}}>
                                        <Card className='totalCourse' bg='dark' text='white' >
                                            <Card.Img variant="top" src={course.image}/>
                                            <Card.Body>
                                                <Card.Title>{course.name}</Card.Title>
                                                <Card.Text>
                                                {course.instructor}
                                                <br/>
                                                {course.duration}
                                                <br/>
                                                {course.students}
                                                </Card.Text>
                                            </Card.Body>
                                            <Button variant="danger">{course.price}</Button>
                                        </Card>
                                    </CardGroup>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='courseStatus' >
                <h5>Enrolled Course:{enrollCourse.length}</h5>
                <br/>
                <h6>course amount $00</h6>
            </div>
        </div>
    );
};

export default Courses;
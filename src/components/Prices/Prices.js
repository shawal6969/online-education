import React from 'react';
import { Card, CardGroup, CardDeck, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Prices = (props) => {
   // console.log(props);
    const {image,name, instructor, duration, students} = props.course
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <CardGroup>
                            <Card className='totalCourse' bg='dark' text='white' >
                                <Card.Img variant="top" src={image}/>
                                <Card.Body>
                                    <Card.Title>{props.course.name}</Card.Title>
                                    <Card.Text>
                                    {instructor}
                                    <br/>
                                    {duration}
                                    <br/>
                                    {students}
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="danger" onClick={() => props.handleEvent(props.course)}><FontAwesomeIcon icon={faShoppingCart} />{props.course.price}</Button>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Prices;
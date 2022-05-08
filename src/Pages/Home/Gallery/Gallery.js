import React from 'react';
import { Card } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div>
            <h3 className='text-center'>Our Services</h3>
            <div className='row d-flex justify-content-center my-3 g-0'>
                <Card className='col col-lg-3 shadow'>
                    <Card.Img variant="top" src="https://i.ibb.co/hKBjc6m/g3.jpg" />
                    <Card.Body>
                        <Card.Title>No more Checking</Card.Title>
                        <Card.Text>
                            You dont need to check every item for their inventory stock number. We do it digitally.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='col col-lg-3 mx-2 shadow'>
                    <Card.Img variant="top" src="https://i.ibb.co/QvH19Cf/g1.jpg" />
                    <Card.Body>
                        <Card.Title>Add Stock amount</Card.Title>
                        <Card.Text>
                            You can add stock numbers and this will be added to you current stock number efficiently and effectively.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='col col-lg-3 shadow'>
                    <Card.Img variant="top" src="https://i.ibb.co/4tzmMbR/g2.jpg" />
                    <Card.Body>
                        <Card.Title>Distribution</Card.Title>
                        <Card.Text>
                            We also keep track of you delivered goods. When a item is delivered the amount of stocks available are decreased.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default Gallery;
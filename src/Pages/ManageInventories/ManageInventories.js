import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageInventories = ({ inventory }) => {
    const { name, price, quantity, company } = inventory;
    return (
        <div className='col col-lg-4 my-2'>
            <Card className='shadow'>
                <Card.Body>
                    <Card.Title>Product: {name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                        <br />
                        Quantity: {quantity}
                        <br />
                        Company: {company}
                    </Card.Text>
                    <Button variant="dark">Delete</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ManageInventories;
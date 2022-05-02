import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, about, price, quantity, company, picture } = inventory;
    const navigate = useNavigate();

    const updateInventory = _id => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className='col col-lg-4 my-3'>
            <CardGroup className='d-flex h-100'>
                <Card>
                    <Card.Img variant="top" src={picture} width='160' height='281' fluid />
                    <Card.Body >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Company: {company}</Card.Text>
                        <Card.Text>Price: ${price}</Card.Text>
                        <Card.Text>Quantity: {quantity} pieces</Card.Text>
                        <Card.Text>
                            {about}
                        </Card.Text>

                    </Card.Body>
                    <Button onClick={() => updateInventory(_id)} className='w-50 mx-auto m-2' variant="dark">Update</Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Inventory;
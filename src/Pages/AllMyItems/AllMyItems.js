import React from 'react';
import { Card, Button } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';

const AllMyItems = ({ myItem }) => {
    const { _id, name, about, price, quantity, company, picture } = myItem;
    const [inventories, setInventories] = useInventory()
    const DeleteItem = _id => {

        const check = window.confirm('Do you really want to delete ?')
        if (check) {
            const url = `http://localhost:5000/inventory/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .them(data => {
                    const inventoriesLeft = inventories.filter(inventory => inventory._id !== _id)
                    setInventories(inventoriesLeft)
                })
        }

    }


    return (
        <div>
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
                    <Button variant="dark" onClick={() => DeleteItem(_id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllMyItems;
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';

const ManageInventories = ({ inventory }) => {
    const [inventories, setInventories] = useInventory()
    const { _id, name, price, quantity, company } = inventory;


    const deleteItem = _id => {
        const check = window.confirm('Do you really want to delete ?')
        if (check) {
            const url = `https://damp-eyrie-36624.herokuapp.com/inventory/${_id}`
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
                    <Button variant="dark" onClick={() => deleteItem(_id)}>Delete</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ManageInventories;
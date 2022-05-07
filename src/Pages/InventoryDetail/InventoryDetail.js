import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { _id } = useParams();
    const [inventory, setInventory] = useState([])
    const [reload, setReload] = useState(0)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInventory(data)
                setQuantity(inventory.quantity)
            })

    }, [reload])

    const handleDelivery = () => {
        const quantity = inventory.quantity
        const newQuantity = { quantity: quantity - 1 }
        const url = `http://localhost:5000/inventory/${_id}`
        axios.put(url, newQuantity)
        setReload(reload + 1)
    }



    // const handleDelivery = event => {
    //     event.preventDefault();
    //     const url = `http://localhost:5000/inventory/${_id}`
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: ('user')
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('Success', data)
    //             alert('User Added')
    //             event.target.reset()
    //         })
    // }

    const handleNewQuantity = event => {
        event.preventDefault()
        const quantity = inventory.quantity
        const newQuantityValue = event.target.quantity.value;
        const newQuantity = { quantity: parseInt(quantity) + parseInt(newQuantityValue) }
        const url = `http://localhost:5000/inventory/${_id}`
        axios.put(url, newQuantity)
        setReload(reload + 1)
        event.target.reset();
    }

    return (
        <div className='container'>
            <div>
                <h3 className='my-5 text-center'>Update Inventory</h3>
                <div className="card my-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={inventory.picture} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{inventory.name}</h5>
                                <p className="card-text">Company: {inventory.company}</p>
                                <p className="card-text">Price: ${inventory.price}</p>
                                <p className="card-text">Quantity: {reload > 0 ? quantity : inventory.quantity} pieces</p>
                                <p className="card-text">{inventory.about}</p>
                            </div>
                            <button onClick={handleDelivery} className='btn btn-dark ms-3'>Delivered</button>

                            <form onSubmit={handleNewQuantity}>
                                <label className='form-label'>
                                    New Quantity:
                                    <input className='ms-2 w-50 form-control' name='quantity' />
                                    <input className='btn btn-dark' type="submit" value="Update" />
                                </label>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default InventoryDetail;
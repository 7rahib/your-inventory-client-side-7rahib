import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { _id } = useParams();
    const [inventory] = useInventoryDetail(_id);

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
                                <p className="card-text">Quantity: {inventory.quantity} pieces</p>
                                <p className="card-text">{inventory.about}</p>
                            </div>
                            <button className='btn btn-dark ms-3'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;
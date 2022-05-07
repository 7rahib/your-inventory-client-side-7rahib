import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import ManageInventories from '../ManageInventories/ManageInventories';

const AllInventories = () => {
    const [inventories] = useInventory()
    return (
        <div className='container'>
            <div className='d-flex justify-content-between my-3'>
                <h3 className='text-center'>Full Inventory</h3>
                <Link to='/additem' className='btn btn-dark '>Add New Item</Link>
            </div>

            <div className='row'>
                {
                    inventories.map(inventory => <ManageInventories
                        key={inventory._id}
                        inventory={inventory}
                    ></ManageInventories>)
                }
            </div>
        </div>
    );
};

export default AllInventories;
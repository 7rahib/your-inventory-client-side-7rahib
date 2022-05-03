import React from 'react';
import useInventory from '../../hooks/useInventory';
import ManageInventories from '../ManageInventories/ManageInventories';

const AllInventories = () => {
    const [inventories] = useInventory()
    return (
        <div className='container'>
            <div className='d-flex justify-content-between my-3'>
                <h3 className='text-center'>Full Inventory</h3>
                <button className='btn btn-dark '>Add New Item</button>
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
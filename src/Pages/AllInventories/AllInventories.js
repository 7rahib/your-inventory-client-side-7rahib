import React from 'react';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Home/Inventory/Inventory';

const AllInventories = () => {
    const [inventories] = useInventory()
    return (
        <div className='container'>
            <h3 className='text-center my-3'>Full Inventory</h3>
            <div className='row'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default AllInventories;
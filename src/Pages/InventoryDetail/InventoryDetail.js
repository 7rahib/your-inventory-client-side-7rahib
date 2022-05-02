import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { _id } = useParams();
    const [inventory] = useInventoryDetail(_id);

    return (
        <div>
            <h2>Details for {inventory.name}</h2>
            <div className='text-center'>
            </div>
        </div>
    );
};

export default InventoryDetail;
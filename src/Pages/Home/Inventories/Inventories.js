import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = useInventory()
    const navigate = useNavigate();

    const viewInventory = () => {
        navigate('/inventory');
    }
    return (
        <div className='container'>
            <div className='m-3'>
                <h1 className='text-center'>Top Inventory</h1>
                <div className='row'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </div>
            <button onClick={viewInventory} className='btn btn-dark'>View All</button>
        </div>
    );
};

export default Inventories;
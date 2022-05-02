import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [stocks, setStocks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setStocks(data))
    }, [])
    return (
        <div className='container'>
            <div className='m-3'>
                <h1 className='text-center'>Inventory {stocks.length}</h1>
                <div className='row'>
                    {
                        stocks.map(stock => <Inventory
                            key={stock._id}
                            stock={stock}
                        ></Inventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;
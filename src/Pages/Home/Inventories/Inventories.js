import React, { useEffect, useState } from 'react';

const Inventories = () => {
    const [stocks, setStocks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setStocks(data))
    }, [])
    return (
        <div className='m-3'>
            <h1 className='text-center'>Inventory {stocks.length}</h1>
            {
                stocks.map(stock => <div>{stock.name}</div>)
            }
        </div>
    );
};

export default Inventories;
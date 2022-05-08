import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInventories from '../ManageInventories/ManageInventories';

const AllInventories = () => {
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        fetch(`https://damp-eyrie-36624.herokuapp.com/inventory?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [inventories, page, size])


    useEffect(() => {
        fetch('https://damp-eyrie-36624.herokuapp.com/inventorycount')
            .then(res => res.json())
            .then(data => {
                const count = data.count
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])



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
            <div className='flex justify-center my-2'>
                {
                    [...Array(pageCount).keys()].map(
                        buttonCount => <button onClick={() => setPage(buttonCount)} className={page === buttonCount ? 'bg-blue-800 shadow-md ms-1 btn btn-primary' : 'ms-1 btn btn-dark'}>{buttonCount + 1}</button>
                    )
                }
                <select onChange={event => setSize(event.target.value)} className='ms-2'>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default AllInventories;
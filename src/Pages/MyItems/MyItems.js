import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AllMyItems from '../AllMyItems/AllMyItems';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email
            const { data } = await axios.get(`http://localhost:5000/myitems?email=${email}`)
            setMyItems(data)
        }
        getOrders()
    }, [user])
    console.log(myItems)
    return (
        <div className='container'>
            <h3 className='text-center'>My Items</h3>
            <div className='row'>
                {
                    myItems.map(myItem => <AllMyItems
                        key={myItem._id}
                        myItem={myItem}
                    ></AllMyItems>)
                }
            </div>
        </div>
    );
};

export default MyItems;
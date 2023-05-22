import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToy from '../MyToy/MyToy';

const MyToys = () => {
    const {user, errorToast} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    
    // load my toys 
    useEffect( () => {
        fetch(`http://localhost:5000/my-toys?seller_email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
        })
        .catch(error => errorToast(error.message))
    } , [])


    return (
        <div>
            <h1 className='text-center font-bold text-4xl underline mt-20'>My toys</h1>
            {
                myToys?.map(myToy => <MyToy
                key={myToy._id}
                myToy={myToy}
                setMyToys={setMyToys}
                myToys={myToys}>  
                </MyToy>)
            }
        </div>
    );
};

export default MyToys;
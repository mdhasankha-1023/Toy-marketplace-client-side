import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToy from '../MyToy/MyToy';
import { FaArrowDown } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    const { user, errorToast } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useTitle('My toys')


    // load my toys 
    useEffect(() => {
        fetch(`https://toy-marketplace-server-drab.vercel.app/my-toys?seller_email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
            .catch(error => errorToast(error.message))
    }, [])

    // handle sort by price
    // const handleSortBtn = (value) => {
        
    //         fetch(`http://localhost:5000/my-toys?value=price&type=${value}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setMyToys(data)
    //             })
    // }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-4xl underline mt-20'>My toys</h1>
            <div className="dropdown dropdown-bottom dropdown-end w-full text-end">
                <label tabIndex={0} className="btn btn-outline border-[#EA624C] hover:bg-[#EA624C] hover:border-none m-1">Short-by-price <FaArrowDown className='ms-2'></FaArrowDown></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleSortBtn(false)}><a>price-descending</a></li>
                    <li onClick={() => handleSortBtn(true)}><a>price-ascending</a></li>
                </ul>
            </div>
            <div>
                {
                    myToys?.map(myToy => <MyToy
                        key={myToy._id}
                        myToy={myToy}
                        setMyToys={setMyToys}
                        myToys={myToys}>
                    </MyToy>)
                }
            </div>
        </div>
    );
};

export default MyToys;
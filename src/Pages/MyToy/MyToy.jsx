import React, { useContext } from 'react';
import { FaStar, FaStarHalfAlt, FaTrashAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MyToy = ({ myToy, setMyToys, myToys }) => {
    const { successToast } = useContext(AuthContext)
    const { toy_name, seller_name, seller_email, img_url, price, rating, categoryName, available_quantity, details_description, _id } = myToy;

    // handleUpdateBtn
    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-drab.vercel.app/my-toys/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(myToy)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(toy => toy._id !== id)
                            setMyToys(remaining)
                            successToast('Successfully Deleted')
                        }
                    })
            }
        })


    }


    return (
        <div className='w-11/12 mx-auto my-20 relative'>
            <div className="hero py-14 bg-base-200">
                <div className="hero-content flex-col lg:flex-row items-start">
                    <img src={img_url} className="max-w-sm rounded-lg " />
                    <div className='flex flex-col'>
                        <div className='flex-none'>
                            <h1 className="text-5xl font-bold">{toy_name}</h1>
                            <div className='flex gap-3 my-5'>
                                <p><span className='font-bold'>Seller Name:</span> {seller_name}</p>
                                <p><span className='font-bold'>Email:</span> {seller_email}</p>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <Rating
                                    className='text-[#FFD400]'
                                    fullSymbol={<FaStar></FaStar>}
                                    emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                    placeholderRating={rating}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    readonly
                                ></Rating>
                                <span className='font-bold'>{rating}</span>
                                <p className='border-l-2 border-black ps-1'><span className='font-bold'>Quantity:</span>  {available_quantity}</p>
                                <p className='border-l-2 border-black ps-1'><span className='font-bold'>Category:</span>  {categoryName}</p>
                            </div>
                            <hr />
                            <p className='text-5xl font-bold text-[#EA624C] my-8'>${price}</p>
                        </div>
                        <hr />
                        <div className='mt-12'>
                            <p className='font-bold'>Details:</p>
                            <p>{details_description}</p>
                        </div>
                        <div className='mt-12 flex gap-4'>
                            <Link to={`/update-my-toy/${_id}`}><button className="btn btn-sm bg-[#EA624C] border-none">Update</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => handleDeleteBtn(_id)} className="btn btn-sm bg-[#EA624C] border-none absolute -left-2 -top-2 rounded-full"><FaTrashAlt></FaTrashAlt></button>
        </div>
    );
};

export default MyToy;
import React from 'react';
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyData = useLoaderData();
    const { img_url, toy_name, seller_name, seller_email, price, rating, available_quantity, details_description } = toyData;
    console.log(toyData)
    return (
        <div className='w-11/12 mx-auto my-20'>
            <h1 className='text-center text-4xl font-bold my-14'>This is Toy details</h1>
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
                            </div>
                            <hr />
                            <p className='text-5xl font-bold text-[#EA624C] my-8'>${price}</p>
                        </div>
                        <hr />
                        <div className='mt-12'>
                            <p className='font-bold'>Details:</p>
                            <p>{details_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
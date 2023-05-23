import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from '../ToyRow/ToyRow';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {
    const loadedData = useLoaderData()
    const [toys, setToys] = useState(loadedData)
    const [searchText, setSearchText] = useState('')
    useTitle('All toys')

    // handle Search Button
    const handleSearchBtn = () => {
        fetch(`https://toy-marketplace-server-drab.vercel.app/searchByName&subCategory/${searchText}`)
        .then(res => res.json())
        .then(data => setToys(data))
    }

    

    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-center text-4xl font-bold my-14 underline'>All Toys</h3>
            <div className="my-8">
                <div className="input-group">
                    <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search…" className="input input-bordered" />{" "}
                    <button onClick={handleSearchBtn}  className="btn btn-square bg-[#EA624C] border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
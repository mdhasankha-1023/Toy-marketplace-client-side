import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from '../ToyRow/ToyRow';

const AllToys = () => {
    const loadedData = useLoaderData()
    const [searchItem, setSearchItem] = useState('')

    // handle Search Button
    const handleSearchInput = (event) => {
        event.preventDefault();
        setSearchItem(event.target.value)

    }
        // const filterToys = loadedData.filter(toy => toy.toy_name.toLowerCase().includes(searchItem.toLowerCase()));

    

    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-center text-4xl font-bold my-14 underline'>All Toys</h3>
            <form className="my-8">
                <div className="input-group">
                    <input type="text" onChange={handleSearchInput} placeholder="Search…" value={searchItem} className="input input-bordered" />
                    <button  className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </form>
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
                            loadedData.map(toy => <ToyRow
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
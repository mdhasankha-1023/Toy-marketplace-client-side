import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UpdateMyToy = () => {
    const {successToast, errorToast} = useContext(AuthContext)
    const loadedData = useLoaderData()
    const { _id, toy_name, seller_name, seller_email, img_url, price, rating, categoryName, available_quantity, details_description } = loadedData;
    console.log(loadedData)

    // handle Update My Toy Form
    const handleUpdateMyToyForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateInfo = {price, quantity, description}
        
        fetch(`https://toy-marketplace-server-drab.vercel.app/my-toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                successToast('Updated successfully')
            }
            else if(data.modifiedCount === 0){
                errorToast('Already updated')
            }
        })
        .catch(error => errorToast(error.message))

    }


    return (
        <div className="hero my-24">
            <div className="hero-content border w-4/5 rounded-lg bg-[#98D6E5]">
                <div className="card w-full">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-3xl underline'>Add A toy</h2>
                        <form onSubmit={handleUpdateMyToyForm}>
                            {/* row-1 */}
                            <div className='flex gap-4 w-full'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text"
                                    defaultValue={toy_name} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" className="input input-bordered" defaultValue={seller_name} readOnly />
                                </div>
                            </div>

                            {/* row-2 */}
                            <div className='flex gap-4 w-full mt-4'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" className="input input-bordered" defaultValue={seller_email} readOnly />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy picture URL</span>
                                    </label>
                                    <input type="text" className="input input-bordered" defaultValue={img_url} readOnly />
                                </div>
                            </div>
                            {/* row-3 */}
                            <div className='flex gap-4 w-full mt-4 justify-center'>
                                <div className="form-control w-1/5 flex-grow">
                                    <label className="label">
                                        <span className="label-text">Category Name</span>
                                    </label>
                                    <input type="text" defaultValue={categoryName} className="input input-bordered" readOnly />
                                </div>
                                <div className="form-control w-1/5">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="$" className="input input-bordered" defaultValue={price} />
                                </div>
                                <div className="form-control w-1/5">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="number" className="input input-bordered" defaultValue={rating} readOnly />
                                </div>
                                <div className="form-control w-1/5">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="number" name='quantity' className="input input-bordered" defaultValue={available_quantity} />
                                </div>
                            </div>
                            {/* row-4 */}
                            <div className="form-control full mt-5">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <textarea name="description" className='w-full rounded-md h-52 p-4' placeholder='Toy details' defaultValue={details_description} ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn text-white border-none bg-[#EA624C]' type="submit" value="ADD" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMyToy;
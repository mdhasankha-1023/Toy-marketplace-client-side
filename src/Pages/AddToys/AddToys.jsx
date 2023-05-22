import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddToys = () => {
    const {successToast, errorToast} = useContext(AuthContext)

    // handleAddToyForm
    const handleAddToyForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.toyName.value;
        const seller_name = form.sellerName.value;
        const seller_email = form.email.value;
        const img_url = form.photoUrl.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const rating = form.ratings.value;
        const available_quantity = form.quantity.value;
        const details_description = form.details.value;
        const toyInfo = {toy_name, seller_name, seller_email, img_url, price, rating, categoryName, available_quantity, details_description}
        console.log(toyInfo)

            fetch('https://toy-marketplace-server-drab.vercel.app/my-toys', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(toyInfo)

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    successToast('Toy added successfully')
                    form.reset()
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
                        <form onSubmit={handleAddToyForm}>
                            {/* row-1 */}
                            <div className='flex gap-4 w-full'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toyName' placeholder="type your toy name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='sellerName' placeholder="type your Name" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* row-2 */}
                            <div className='flex gap-4 w-full mt-4'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="type your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy picture URL</span>
                                    </label>
                                    <input type="text" name='photoUrl' placeholder="toy picture url" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* row-3 */}
                            <div className='flex gap-4 w-full mt-4 justify-center'>
                                <div className="form-control w-1/5 flex-grow">
                                    <label className="label">
                                        <span className="label-text">Category Name</span>
                                    </label>
                                    <input type="text" name='categoryName' placeholder="type toy category" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/5">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="$" className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control w-1/5">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="number" name='ratings' placeholder="toy ratings" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/5">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="number" name='quantity' placeholder="quantity" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* row-4 */}
                            <div className="form-control full mt-5">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <textarea name="details" className='w-full rounded-md h-52 p-4' placeholder='Toy details' ></textarea>
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

export default AddToys;
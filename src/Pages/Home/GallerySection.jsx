import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryCard from './GalleryCard/GalleryCard';

const GallerySection = () => {
    const loadedData = useLoaderData();
    const [data, setData] = useState(loadedData.slice(0, 8))
    const [clicked, setClicked] = useState(false)

    // handleViewMoreBtn
    const handleViewMoreBtn = () => {
        setClicked(true)
        setData(loadedData)
    }
    // handleViewLessBtn
    const handleViewLessBtn = () => {
        setClicked(false)
        setData(loadedData.slice(0, 8))
    }


    return (
        <div data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className='w-11/12 mx-auto mt-32'>
            <h1 className='md:text-4xl font-bold text-center'>Our Toys Gallery</h1>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 my-12'>
                {
                    data.map(data => <GalleryCard
                        key={data._id}
                        data={data}></GalleryCard>)
                }
            </div>
            <div className='text-center'>
                {clicked ?
                    <button onClick={handleViewLessBtn} className="btn bg-[#EA624C] border-none btn-sm">Show less</button>
                    :
                    <button onClick={handleViewMoreBtn} className="btn bg-[#EA624C] border-none btn-sm">Show More</button>
                }

            </div>
        </div>
    );
};

export default GallerySection;
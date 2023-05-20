import React from 'react';

const GalleryCard = ({ data }) => {
    console.log(data)
    const { img_url } = data;
    return (
        <div className='w-full'>
            <div className="carousel-item  w-[12rem] h-[10rem] border mx-auto m-1 p-5">
            <img src={img_url} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        </div>
    );
};

export default GalleryCard;
import React from 'react';
import Swal from 'sweetalert2';

const GalleryCard = ({ data }) => {
    const { img_url, toy_name } = data;

    // handleModal
    const handleModal = () => {
        Swal.fire({
            imageUrl: `${img_url}`,
            imageHeight: 400,
            imageAlt: `${toy_name}`
          })
    }
    return (
        <div className='w-full'>
            <div className="carousel-item  w-[12rem] h-[10rem] border mx-auto m-1 p-5 cursor-pointer">
            <img src={img_url} onClick={handleModal} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        </div>
    );
};

export default GalleryCard;
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
        <div className='md:w-full mx-auto'>
            <div className="carousel-item w-[7rem]  md:w-[12rem] md:h-[10rem] border mx-auto m-1 p-5 cursor-pointer">
            <img src={img_url} onClick={handleModal} className="md:w-full mx-auto" alt="Tailwind CSS Carousel component" />
        </div>
        </div>
    );
};

export default GalleryCard;
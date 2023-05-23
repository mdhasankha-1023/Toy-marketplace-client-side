import React from 'react';
// import img1 from '../../assets/banner_img/1.jpg'
import banner from '../../assets/banner_img/banner_bg.webp'
import img1 from '../../assets/banner_img/5.png'
import img2 from '../../assets/banner_img/6.png'
import Aos from 'aos';




const Banner = () => {

    return (
        <>
            <div data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center" className="w-full image-full relative mt-8">
                <figure className='w-full md:h-full h-[250px]'><img className='w-full h-full' src={banner} alt="Shoes" /></figure>
                <div className="card-body absolute top-0 left-0 md:h-full md:w-1/2 w-full">
                    <h2 className="card-title md:mt-24 mt-8 md:text-5xl text-white font-bold">PICK THE BEST TOY CAR <br /> FOR YOUR KIDS</h2>
                    <p className='text-semibold flex-grow-0'>Make play time a blast with our finest toys and games!</p>
                    <div className="card-actions justify-start m-0">
                        <button className="md:px-4 md:py-3 py-2 px-2 font-bold rounded-lg text-white md:mt-8 hover:bg-[#c03924] bg-[#EA624C]">Parches now</button>
                    </div>
                </div>
                <div className='md:w-1/2 hidden sm:hidden md:block  absolute top-0 right-0'>
                    <img className='w-4/5' src={img2} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;
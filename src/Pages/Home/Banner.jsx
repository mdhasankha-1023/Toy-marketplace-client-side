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
                <figure><img src={banner} alt="Shoes" /></figure>
                <div className="card-body absolute top-0 left-0 h-full">
                    <h2 className="card-title md:mt-24 mt-8 md:text-5xl text-white font-bold">PICK THE BEST TOY CAR <br /> FOR YOUR KIDS</h2>
                    <p className='text-semibold flex-grow-0'>Make play time a blast with our finest toys and games!</p>
                    <div className="card-actions justify-start m-0">
                        <button className="px-4 py-3 font-bold rounded-lg text-white mt-8 hover:bg-[#c03924] bg-[#EA624C]">Parches now</button>
                    </div>
                </div>
                <div className='w-1/2 absolute top-0 right-0 flex justify-center'>
                    <img className='w-4/5' src={img2} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;
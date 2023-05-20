import React from 'react';
import brand_1 from '../../../assets/brands_logo/1.png'
import brand_2 from '../../../assets/brands_logo/2.jpg'
import brand_3 from '../../../assets/brands_logo/3.jpg'
import brand_4 from '../../../assets/brands_logo/4.jpg'
import brand_5 from '../../../assets/brands_logo/5.png'
import brand_6 from '../../../assets/brands_logo/6.png'


const OurBrandSection = () => {
    return (
        <div className='w-11/12 mx-auto my-12'>
            <h2 className='text-center text-4xl font-bold mt-16 mb-12'>Our Company sponsor</h2>
            <div className='flex gap-4 w-6/12 mx-auto mb-4'>
                <div className='w-1/2 h-24 border p-3'>
                <img className='w-full h-full' src={brand_1} alt="" />
                </div>
                <div className='w-1/2 h-24 border p-3'>
                <img className='w-full h-full' src={brand_2} alt="" />
                </div>
            </div>
            <div className='flex gap-4 w-6/12 mx-auto'>
                <div className='w-3/12 h-20 border p-3'>
                <img className='w-full h-full' src={brand_3} alt="" />
                </div>
                <div className='w-3/12 h-20 border p-3'>
                <img className='w-full h-full' src={brand_4} alt="" />
                </div>
                <div className='w-3/12 h-20 border p-3'>
                <img className='w-full h-full' src={brand_5} alt="" />
                </div>
                <div className='w-3/12 h-20 border p-3'>
                <img className='w-full h-full' src={brand_6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurBrandSection;
import React from 'react';
import img1 from '../../assets/banner_img/1.jpg'
import img2 from '../../assets/banner_img/2.jpg'
import img3 from '../../assets/banner_img/3.jpg'
import img4 from '../../assets/banner_img/4.jpg'
3
const Banner = () => {
    return (
        <>
            <div className="carousel w-full h-[80vh] ">
                <div id="item1" className="carousel-item w-full relative">
                    <img src={img1} className="w-full h-[80vh] " />
                    <div className='absolute bottom-0 text-center w-full pb-16 bg-gradient-to-r from-[rgba(21, 21, 21, 0)] to-[rgba(21, 21, 21, 0)]'>
                        <h2 className='text-white text-4xl font-bold py-2'>PICK THE BEST TOY CAR <br /> FOR YOUR KIDS</h2>
                        <p className='text-zinc-950'>Make play time a blast with our finest toys car and games</p>
                        <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0 pb-5">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                        </div>
                    </div>
                    
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <img src={img2} className="w-full" />
                    <div className='absolute bottom-0 text-center w-full pb-16 bg-[#2BB24C]'>
                        <h2 className='text-white text-4xl font-bold py-2'>PICK THE BEST TOY CAR <br /> FOR YOUR KIDS</h2>
                        <p className='text-zinc-950'>Make play time a blast with our finest toys car and games</p>
                        <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0 pb-5">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <img src={img3} className="w-full" />
                    <div className='absolute bottom-0 text-center w-full pb-16 bg-[#2BB24C]'>
                        <h2 className='text-white text-4xl font-bold py-2'>PICK THE BEST TOY CAR <br /> FOR YOUR KIDS</h2>
                        <p className='text-zinc-950'>Make play time a blast with our finest toys car and games</p>
                        <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0 pb-5">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <img src={img4} className="w-full" />
                    <div className='absolute bottom-0 text-center w-full pb-16 bg-[#2BB24C]'>
                        <h2 className='text-white text-4xl font-bold py-2'>PICK THE BEST TOY CAR <br /> FOR YOUR KIDS</h2>
                        <p className='text-zinc-950'>Make play time a blast with our finest toys car and games</p>
                        <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0 pb-5">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;
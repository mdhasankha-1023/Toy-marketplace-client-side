import React from 'react';
import clint1 from '../../../assets/Clients_pic/client_1.jpg'
import clint2 from '../../../assets/Clients_pic/client_2.jpg'
import clint3 from '../../../assets/Clients_pic/client_3.jpg'

const HappyClintSection = () => {
    return (
        <div data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className='w-full bg-[#F5B120] py-8 my-16'>
            <h1 className='text-center text-4xl font-bold text-white'>Our Happy Clients say</h1>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full flex-col p-8">
                    <h4 className='text-center text-white font-bold mb-8'>
                        "I have been buying toys and games from this store for my kids for many many years.
                        The guys form the shop <br /> know exactly what our children need and want.
                        And they are always in trend. I totally recommend them!"
                    </h4>
                    <div className='flex mx-auto gap-2 items-center text-white'>
                        <img src={clint1} className="w-20 h-20 rounded-full" />
                        <div>
                            <h5>Rajes khanna</h5>
                            <p>Customer</p>
                        </div>
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full flex-col p-8">
                    <h4 className='text-center text-white font-bold mb-8'>
                        "I have been buying toys and games from this store for my kids for many many years.
                        The guys form the shop <br /> know exactly what our children need and want.
                        And they are always in trend. I totally recommend them!"
                    </h4>
                    <div className='flex mx-auto gap-2 items-center text-white'>
                        <img src={clint2} className="w-20 h-20 rounded-full" />
                        <div>
                            <h5>Shimul kha</h5>
                            <p>Customer</p>
                        </div>
                    </div>

                </div>
                <div id="item3" className="carousel-item w-full flex-col p-8">
                    <h4 className='text-center text-white font-bold mb-8'>
                        "I have been buying toys and games from this store for my kids for many many years.
                        The guys form the shop <br /> know exactly what our children need and want.
                        And they are always in trend. I totally recommend them!"
                    </h4>
                    <div className='flex mx-auto gap-2 items-center text-white'>
                        <img src={clint3} className="w-20 h-20 rounded-full" />
                        <div>
                            <h5>Singkhu sing</h5>
                            <p>Customer</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default HappyClintSection;
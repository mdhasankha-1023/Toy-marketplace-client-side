import React from 'react';
import Banner from '../Banner';
import GallerySection from '../GallerySection';
import OurBrandSection from '../OurBrandSection/OurBrandSection';
import HappyClintSection from '../HappyClintSection/HappyClintSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <HappyClintSection></HappyClintSection>
            <OurBrandSection></OurBrandSection>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner';
import GallerySection from '../GallerySection';
import OurBrandSection from '../OurBrandSection/OurBrandSection';
import HappyClintSection from '../HappyClintSection/HappyClintSection';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <HappyClintSection></HappyClintSection>
            <OurBrandSection></OurBrandSection>
        </div>
    );
};

export default Home;
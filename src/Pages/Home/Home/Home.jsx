import React from 'react';
import Banner from '../Banner';
import GallerySection from '../GallerySection';
import OurBrandSection from '../OurBrandSection/OurBrandSection';
import HappyClintSection from '../HappyClintSection/HappyClintSection';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitle from '../../../Hooks/useTitle';
import Aos from 'aos';

const Home = () => {
    useTitle('Home')
    
    return (
        <div >
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <HappyClintSection></HappyClintSection>
            <OurBrandSection></OurBrandSection>
        </div>
    );
};

export default Home;
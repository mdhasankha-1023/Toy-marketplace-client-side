import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';


const ShopByCategory = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    
    return (
      <div>
        <h1 className='text-4xl text-center font-bold'>Shop By Category</h1>
      </div>  
    );
};

export default ShopByCategory;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';


const ShopByCategory = () => {
  const loadedData = useLoaderData();
  
  

  return (
    <div data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className='w-11/12 mx-auto my-20'>
      <h1 className='text-4xl text-center font-bold my-8'>Shop By Category</h1>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Sports Cars</Tab>
          <Tab>Construction Cars</Tab>
          <Tab>Emergency Cars</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Luxury Sports Cars</Tab>
              <Tab>Exotic Sports Car.</Tab>
              <Tab>Sport Compact.</Tab>
            </TabList>
            <TabPanel>
            {/* {'Luxary'} */}
            </TabPanel>
            <TabPanel>
            {/* {'Exotic'} */}
            </TabPanel>
            <TabPanel>
            {/* {'Sport'} */}
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Marge Simpson</Tab>
              <Tab>Turanga Leela</Tab>
              <Tab>Bender Bending Rodriguez</Tab>
            </TabList>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Marge Simpson</Tab>
              <Tab>Turanga Leela</Tab>
              <Tab>Bender Bending Rodriguez</Tab>
            </TabList>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
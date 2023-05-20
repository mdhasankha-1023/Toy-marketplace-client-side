import React from 'react';

const BlogPage = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <h1 className='text-4xl text-center font-bold underline my-12'>Blog</h1>
            <div className='my-4'>
                <h2>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p></p>
            </div>
            <div className='my-4'>
                <h2>2. Compare SQL and NoSQL databases?</h2>
                <p></p>
            </div>
            <div className='my-4'>
                <h2>3. What is express js? What is Nest JS ?</h2>
                <p></p>
            </div>
            <div className='my-4'>
                <h2>4. What is MongoDB aggregate and how does it work?</h2>
                <p></p>
            </div>
        </div>
    );
};

export default BlogPage;
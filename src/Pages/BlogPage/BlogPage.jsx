import React from 'react';
import useTitle from '../../Hooks/useTitle';

const BlogPage = () => {
    useTitle('Blog')

    return (
        <div className='w-11/12 mx-auto my-20'>
            <h1 className='text-4xl text-center font-bold underline my-12'>Blog</h1>
            <div className='my-4'>
                <h2 className='text-2xl font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2><br />
                <p className='text-gray-600'>An access token and a refresh token are both used in authentication and authorization processes for client-server communication. <br /><br />
                    Access Token:
                    An access token is a credential that is used to access protected resources on behalf of an authenticated user. It is typically issued by an authentication server (e.g., OAuth server) after a successful authentication process. Access tokens are short-lived and have an expiration time, usually ranging from minutes to hours. They contain information about the user and the permissions granted to the client application. <br /><br />
                    Refresh Token:
                    A refresh token is a long-lived credential used to obtain a new access token when the current access token expires or becomes invalid. It is also issued by the authentication server, usually alongside the access token, and has a longer expiration time compared to the access token. The refresh token is securely stored by the client application and used to request a new access token when needed.
                    <br /><br />
                    When a user authenticates with a server, the server validates the credentials and, if successful, generates an access token and a refresh token. The access token is then sent to the client application, which includes it in subsequent requests to access protected resources. The server verifies the access token to ensure that the client has the necessary permissions. <br /><br />
                    When the access token expires, the client can use the refresh token to request a new access token from the authentication server, without requiring the user to reauthenticate. The server checks the validity of the refresh token and, if valid, issues a new access token to the client. This process continues until the refresh token itself expires or is revoked. <br /><br />
                    Access tokens and refresh tokens should be stored securely on the client-side to prevent unauthorized access. Here are some common practices:
                    <br /><br />
                    Access tokens: These should be stored in a secure storage mechanism, such as an HTTP-only cookie or local storage. Using an HTTP-only cookie helps protect against cross-site scripting (XSS) attacks, as the token cannot be accessed by JavaScript. Local storage can also be used but requires careful protection against XSS attacks.

                    Refresh tokens: These should be stored in a more secure storage mechanism, such as an HTTP-only cookie with the "Secure" and "SameSite" attributes set. Alternatively, you can use browser storage mechanisms specifically designed for storing sensitive data, like "localStorage" or "sessionStorage."
                </p>
            </div>
            <div className='my-4'>
                <h2 className='text-2xl font-bold'>2. Compare SQL and NoSQL databases?</h2><br />
                <p className='text-gray-600'>SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database systems. Here's a comparison of SQL and NoSQL databases:</p><br /><br />
                SQL Databases:
                <br />
                1. Structure: SQL databases are based on the relational model and use tables with predefined schemas to store and organize data. They have a well-defined structure with fixed columns and data types. <br /><br />

                2. Data Integrity: SQL databases enforce data integrity rules through features like primary keys, foreign keys, and constraints. They provide ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data consistency and reliability. <br /><br />

                3. Query Language: SQL databases use the SQL query language for defining and manipulating data. SQL is a standardized language that allows users to perform complex queries, joins, aggregations, and transactions. <br /><br />

                4. Scalability: SQL databases typically scale vertically by adding more resources (e.g., CPU, memory) to a single server. Vertical scaling has limitations in terms of scalability compared to NoSQL databases.
                <br /><br />
                5. Data Relationships: SQL databases handle relationships between tables through joins. These relationships can be defined using foreign keys, enabling efficient querying and data retrieval.
                <br /><br />
                NoSQL Databases:
                <br /><br />
                Structure: NoSQL databases are schema-less or have flexible schemas. They can store unstructured or semi-structured data in various formats like key-value pairs, documents, graphs, or column families.
                <br /><br />
                Data Flexibility: NoSQL databases allow for dynamic and evolving data structures. They can handle data with varying attributes and structures without the need for a predefined schema.
                <br /><br />
                Scalability: NoSQL databases are designed to scale horizontally by adding more servers to a distributed system. They can handle large amounts of data and high traffic loads by distributing data across multiple nodes.
            </div>
            <div className='my-4'>
                <h2 className='text-2xl font-bold'>3. What is express js? What is Nest JS ?</h2><br />
                <p className='text-gray-600'>Express.js and NestJS are both web application frameworks used for building server-side applications in Node.js. Here's an overview of each framework:
                    <br /><br />
                    Express.js: <br />
                    Express.js is a minimalist and flexible web application framework for Node.js. It provides a set of features and tools to build web servers and APIs quickly. Express.js is known for its simplicity, lightweight nature, and easy-to-use routing system. It allows developers to handle HTTP requests and responses, define routes, and integrate middleware for tasks such as request parsing, authentication, and error handling.
                    <br /><br />
                    NestJS: <br />
                    NestJS is a progressive and opinionated web framework for building efficient, scalable, and maintainable server-side applications in Node.js. It is inspired by Angular's architecture and applies many of its concepts to server-side development. NestJS leverages TypeScript, decorators, dependency injection, and modules to create a structured and modular application structure.
                </p>
            </div>
            <div className='my-4'>
                <h2 className='text-2xl font-bold'>4. What is MongoDB aggregate and how does it work?</h2><br />
                <p className='text-gray-600'>In MongoDB, the aggregate method is used to perform advanced data processing and analysis operations on the documents within a collection. It allows you to perform complex aggregations, transformations, and computations on the data stored in MongoDB.
                <br /><br />
                    The aggregate method takes an array of stages as its argument. Each stage represents a specific operation or step in the aggregation pipeline. The pipeline consists of multiple stages that are executed sequentially, with the output of each stage becoming the input for the next stage.</p>
            </div>
        </div>
    );
};

export default BlogPage;
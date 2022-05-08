import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-black text-center m-2'>Questions and Answer</h1>
            <div className='w-100 m-3'>
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white ">
                        <h5 class="text-gray-900 text-xl leading-tight font-semibold mb-2">1. Difference between Javascript and Nodejs</h5>
                        <p class="text-gray-700 text-base mb-4">
                            <h6 class="text-gray-900 text-lg leading-tight font-normal mb-2">a. Javascript</h6>
                            Javascript is a programming language that is used for writing scripts on the website. Javascript is capable enough to add HTML and play with the DOM. It is basically used on the client-side. 	Javascript can only be run in the browsers.
                        </p>
                        <p class="text-gray-700 text-base mb-4">
                            <h6 class="text-gray-900 text-lg leading-tight font-normal mb-2">a. Nodejs</h6>
                            NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development. Nodejs is written in C, C++ and Javascript.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white ">
                        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">2. When should you use nodejs and when should you use mongodb</h5>
                        <p class="text-gray-700 text-base mb-4">
                            We use Nodejs in the server side. It is a Javascript runtime environment. It is basically Javascript that runs in the backend or the server-side. We use nodejs to create api and other functionalities to make backend work with the frontend.
                            Again, MongoDB is a NoSQL database. We use MongoDB as our primary database. Here, we are able to store our required informations and other things using its dynamic schema.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white ">
                        <h5 class="text-gray-900 text-xl leading-tight font-semibold mb-2">3. Differences between SQL and NoSQL databases.</h5>
                        <p class="text-gray-700 text-base mb-4">
                            <h6 class="text-gray-900 text-lg leading-tight font-normal mb-2">a. SQL</h6>
                            SQL databases are primarily called as Relational Databases. SQL databases defines and manipulates data based structured query language (SQL). In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. SQL databases are table-based in structure.
                        </p>
                        <p class="text-gray-700 text-base mb-4">
                            <h6 class="text-gray-900 text-lg leading-tight font-normal mb-2">a. NoSQL</h6>
                            NoSQL database are primarily called as non-relational or distributed database. A NoSQL database has dynamic schema for unstructured data. The other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores in structure.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white ">
                        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">4. What is the purpose of jwt and how does it work</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
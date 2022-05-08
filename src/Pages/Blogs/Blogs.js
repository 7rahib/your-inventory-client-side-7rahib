import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-dark text-center m-2'>Questions and Answer</h1>
                <Card className='m-5'>
                    <Card.Header className='fw-bold'>Question 1: Difference between Javascript and Nodejs</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <span className='fw-bold'>a. Javascript</span>
                            <p>
                                Javascript is a programming language that is used for writing scripts on the website. Javascript is capable enough to add HTML and play with the DOM. It is basically used on the client-side. 	Javascript can only be run in the browsers.
                            </p>
                            <span className='fw-bold'>b. Nodejs</span>
                            <p>
                                NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development. Nodejs is written in C, C++ and Javascript.
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className='m-5'>
                    <Card.Header className='fw-bold'>Question 2: When should you use nodejs and when should you use mongodb ?</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                We use Nodejs in the server side. It is a Javascript runtime environment. It is basically Javascript that runs in the backend or the server-side. We use nodejs to create api and other functionalities to make backend work with the frontend. <br />
                                Again, MongoDB is a NoSQL database. We use MongoDB as our primary database. Here, we are able to store our required informations and other things using its dynamic schema.
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className='m-5'>
                    <Card.Header className='fw-bold'>Question 3: Differences between SQL and NoSQL databases.</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <span className='fw-bold'>a. SQL</span>
                            <p>
                                SQL databases are primarily called as Relational Databases. SQL databases defines and manipulates data based structured query language (SQL). In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. SQL databases are table-based in structure.
                            </p>
                            <span className='fw-bold'>b. NoSQL</span>
                            <p>
                                NoSQL database are primarily called as non-relational or distributed database. A NoSQL database has dynamic schema for unstructured data. The other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores in structure.
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className='m-5'>
                    <Card.Header className='fw-bold'>Question 4: What is the purpose of jwt and how does it work ?</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                We use Nodejs in the server side. It is a Javascript runtime environment. It is basically Javascript that runs in the backend or the server-side. We use nodejs to create api and other functionalities to make backend work with the frontend. <br />
                                Again, MongoDB is a NoSQL database. We use MongoDB as our primary database. Here, we are able to store our required informations and other things using its dynamic schema.
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default Blogs;
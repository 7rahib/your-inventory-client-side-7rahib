import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <section className="visit" id="visit">
                <div className="container h-100 ">
                    <div className="row h-100 ">
                        <div className="col-lg-6 col-md-12 ">
                            <div className="d-flex flex-column justify-content-center h-100 align-items-start ">
                                <h1 className="display-2 text-white ">Warehouse Made Digital</h1>
                                <Link className="btn-visit" to='/blogs'>Visit Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
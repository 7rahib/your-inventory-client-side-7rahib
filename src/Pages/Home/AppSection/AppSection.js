import React from 'react';
import './AppSection.css'

const AppSection = () => {
    return (
        <div className='my-4'>
            <h3 className='text-center my-3'>Other platforms</h3>
            <div className="app-section" id="app-section">
                <div className="container h-100 ">
                    <div className="row h-100 ">
                        <div className="col-lg-6 col-md-12 ">
                            <div className="d-flex flex-column justify-content-center h-100 align-items-start ">
                                <h1 className="display-2 text-white ">Use our Mobile App</h1>
                                <h3 className="display-5 text-white ">Get it from</h3>
                                <img src="https://i.ibb.co/YXNXcwt/download.png" alt="" height='120' width='120' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AppSection;
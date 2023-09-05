import React from 'react'
import { app } from '../Const'

function Footer() {
    return (
        <div>
            <div className="container mt-5" style={{backgroundColor:'#ffffff'}}>
                <div className='row'>
                    <div className="col-md-3 col-lg-3 ">
                        <div>
                            <img src={app.logo} alt="" className='' />
                            <span className='text-logo'>productly</span></div>
                    </div>
                    <div className="col-md-3 col-lg-3  ">
                        <ul className="list-style-none ">
                            <li className="inner-li fw-bold mb-3">
                                Quick Link
                            </li>
                            <li className="inner-li">About Us</li>
                            <li className="inner-li">Blog</li>
                            <li className="inner-li">CopyRight</li>
                            <li className="inner-li">FAQ</li>

                        </ul>
                    </div>
                    <div className="col-md-3 col-lg-3 ">
                        <ul className="list-style-none">
                            <li className="inner-li fw-bold mb-3">
                                Legal Stuff
                            </li>
                            <li className="inner-li">Disclaimer</li>
                            <li className="inner-li">Financing</li>
                            <li className="inner-li">Privacy Policy
                            </li>
                            <li className="inner-li">Terms of Service</li>

                        </ul>
                    </div>
                    <div className="col-md-3 col-lg-3 text-center">
                        <p className="fw-bold fs-5 text-capitalize">knowing you're always on
                            the best energy deal.</p>
                            <input type="text" placeholder='Email Address' className='footer-input' />
                            <div className="base btn px-3 m-2">Sign Up Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
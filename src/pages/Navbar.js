import React from 'react';
import { app } from '../Const';

function Navbar() {
    return (
        // <div className='main-nav navbar flex-wrap  d-flex justify-content-evenly align-items-center m-2  '>
        //     <a className="logo">
        //         <img src={app.logo} alt="" />
        //         productly
        //     </a>
        //     <div className="d-flex flex-sm-column flex-md-column flex-lg-row ">
        //         <a href="">Product</a>
        //         <a href="">
        //             Customer
        //         </a>
        //         <a href="">Pricing</a>
        //         <a href="">Promotion</a>
        //       <span className="right-container">
        //          <a className='bg-white btn'>Sign In</a>
        //         <a className='btn'>Sign Up</a>
        //       </span>
               

          
        //         </div>
           
        //     {/* <button className='visible-icon '>Sign In</button> */}
        // </div>
        <nav className="navbar main-nav  navbar-expand-lg bg-body-tertiary">
  <div className="container ">
    <a className="navbar-brand nav d-flex justify-content-center align-items-center" href="#"> <img src={app.logo} alt="" className='' />
          productly</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Product</a>
        <a className="nav-link" href="#">Customer</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link " aria-disabled="true">Promotion</a>
        <span className="right-container">
            <a className='bg-white btn'>Sign In</a>
                <a className='btn s-btn'>Sign Up</a>
              </span>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar
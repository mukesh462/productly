import React from 'react'
import { app } from '../Const'
import { Cubic, gsap } from 'gsap'
import { Timeline } from 'gsap/gsap-core';
import ScrollTrigger from "gsap/ScrollTrigger";


function Main() {
    const child = (num) => document.querySelector(`.bottom-text`).childNodes[num]

    React.useEffect(() => {
        gsap.fromTo(".main-top-img", { opacity: 0, x: 200 }, { opacity: 1, duration: 2, x: 0, transition: 'transform 0.7ms' });
        gsap.fromTo(".top-text", { x: -100, opacity: 0.2 }, { opacity: 1, duration: 2, x: 0 });

        gsap.fromTo(".top-san-text", { y: 100, opacity: 0.2, ease: Cubic.easeIn }, { opacity: 1, duration: 2, y: 0, transition: 'transform 0.7ms' });
        //    gsap.fromTo(".top-san-text", {y:100,opacity:0.2,ease:Cubic.easeIn}, {opacity: 1, duration: 1,y:0});

        animi('.icon-pointer').fromTo('.icns', { duration: 5, rotateY: '180deg', transition: 'transform 0.8s' }, { duration: 2, rotateY: '0deg' })
        animi('.icon-pointer').fromTo('.bottom-btn-s', { duration: 5, scale: 2, transition: 'transform 0.8s' }, { duration: 2, scale: 1 })

        // gsap.to('',{rotate:0,})
        animi(child(0), 'top 80%', 'top 30%').fromTo(child(0), { translateX: '-100%', duration: 10 }, {
            translateX: '0', ease: 'ease', transition: 'transform 0.5s'
        });
        animi(child(0), 'top 80%', 'top 30%').fromTo(child(1), { translateX: '100%', duration: 5 }, {
            translateX: '0', transition: 'transform 0.5s'
        });
        animi('.left-tr').fromTo('.left-tr-1', { duration: 10, y: 100, alpha: 0.5 }, {
            transition: 'transform 0.5s', y: 0, alpha: 1
        });
        animi('.left-tr').fromTo('.left-tr-2', { duration: 10, y: 100, alpha: 0.5 }, {
            transition: 'transform 0.5s', y: 0, alpha: 1, delay: 1
        });
        animi('.righter').fromTo('.righter-1', { duration: 10, y: 100, alpha: 0.5 }, {
            transition: 'transform 0.5s', y: 0, alpha: 1
        });
        animi('.righter').fromTo('.righter-2', { duration: 10, y: 100, alpha: 0.5 }, {
            transition: 'transform 0.5s', y: 0, alpha: 1, delay: 1
        });
        animi('.middler').fromTo('.middler-1', { duration: 10, y: 100, alpha: 0.5 }, {
            transition: 'transform 0.5s', y: 0, alpha: 1
        });
        animi('.middler').fromTo('.middler-2', { duration: 10, y: 100, alpha: 0.5 }, {
            transition: 'transform 0.5s', y: 0, alpha: 1, delay: 1
        });
        // animi('.super-area').fromTo('.img1',{top:300,zIndex:-1,opacity:0.2,duration:2},{top:0,zIndex:0,opacity:1})
    }, [])
    const animi = (s, t = 'top center', b = 'top 30%') => {
        return new Timeline({
            scrollTrigger: {
                trigger: s,
                // markers: true,
                start: t,
                // start:()=> '-'+ document.querySelector(`.bottom-text`).offsetHeight + 10,
                end: b,
                scrub: true,
                yoyo: true
            },

        })
    }
   



    return (
        <div className='main-page'>
            {/* top */}
            <div className="container mt-5 main-inner">
                <div className="row">
                    <div className="col-sm-12 col-md-6 colo-lg-6 align-self-center container overflow-hidden">
                        <p className="text-center display-5 fw-bold top-text">
                            The Design Thinking
                            superpowers
                        </p>
                        <div className="top-san-text">
                            Tools, tutorials, design and innovation experts, all in
                            one place! The most intuitive way to imagine your
                            next user experience.
                        </div>
                        <div className="container  p-2 my-3 top-san-text">
                            <div className="btn base px-4 fw-bold">Get Started</div>
                            <div className="btn "> <i className="fa-solid fa-play base-text"></i> <a href="" className='base-text'>Watch Videos</a></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 colo-lg-6">
                        <img src={app.person} alt="" className='img-fluid main-top-img ' />
                    </div>
                </div>
            </div>

            <div className="text-center display-4 container fw-bold bottom-text">
                <span className=''>We design tools to unveil</span>
                <span>your superpowers</span>
            </div>
            {/* middle */}
            <div className="container boxer-main my-5 ">
                <div className="row overflow-hidden">
                    <div className="col-12 col-md-3 col-lg-3 p-2 box-container boxer-1">
                        <div className="icon-pointer icns">
                            <i className="fa-solid fa-arrow-pointer arrow "></i>
                        </div>
                        <div className="d">
                            <p>First click tests</p>
                            <p className='text-wrap'>While most pweffwewef  ewrwrwe  wetwet t w tetwet weteople enjoy
                                casino gambling.</p>
                        </div>



                    </div>
                    <div className="col-12 col-md-3 col-lg-3 p-2 box-container">
                        <div className="icon-pointer-snake icns">
                            <i className="fa-solid fa-staff-snake snake"></i>
                        </div>
                        <p>Design surveys</p>
                        <p>Sports betting, lottery and
                            bingo playing for the fun</p>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 p-2 box-container">
                        <div className="icon-pointer-heart icns">
                            <i className="fa-solid fa-heart heart"></i>
                        </div>
                        <p>Accessory makers</p>
                        <p>The Myspace page defines
                            the individual.</p>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 p-2 box-container">
                        <div className="icon-pointer-sand icns">
                            <i className="fa-regular fa-hourglass-half sand"></i>
                        </div>
                        <p>Five second tests</p>
                        <p>Personal choices and the
                            overall personality of the
                            person.</p>
                    </div>


                </div>
                <div className=" p-2  text-center overflow-hidden">
                    <p className='btn base px-5 text-uppercase fw-bold bottom-btn-s' >Sign up Now</p>
                </div>
            </div>

            <div className="container">
                <div className="row overflow-hidden left-tr">
                    <div className="col-12 col-md-6 col-lg-6 left-tr-1">
                        <div className="container-fluid p-1">
                            <article>
                                Effortless Validation for
                            </article>
                            <p className="fs-2 fw-bold">Design Professionals </p>
                            <p className="fs-5">
                                The Myspace page defines the individual, his or her
                                characteristics, traits, personal choices and the overall
                                personality of the person.
                            </p>
                        </div>
                        <ul className='list-type-none p-0 list-insider '>
                            <li >
                                <p className="fs-5 fw-bold">Accessory makers</p>
                                <div className="">The Myspace page defines
                                    the individual The Myspace page defines the individual, his or her characteristics, traits.</div>
                            </li>
                            <li >
                                <p className="fs-5 fw-bold">Design surveys</p>
                                <div className="">Sports betting, lottery and bingo playing for the fun While most people enjoy casino gambling.</div>
                            </li>
                            <li>
                                <p className="fs-5 fw-bold">Accessory makers</p>
                                <div className="">The Myspace page defines
                                    the individual.</div>
                            </li>
                        </ul>


                    </div>
                    <div className="col-12 col-md-6 col-lg-6 left-tr-2 overflow-y-hidden">
                        <img src={app.mobile} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row righter overflow-hidden">
                    <div className="col-12 col-md-6 col-lg-6 righter-1 overflow-hidden">
                        <img src={app.side} className='img-fluid' alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 righter-2 overflow-hidden">
                        <div className="container-fluid p-1">
                            <article>
                                Easier decision making for
                            </article>
                            <p className="fs-2 fw-bold">Product Managers </p>
                            <p className="fs-5">
                                The Myspace page defines the individual, his or her
                                characteristics, traits, personal choices and the overall
                                personality of the person.
                            </p>
                        </div>
                        <ul className='list-type-none p-0 list-insider-1'>

                            <li >
                                <span className=""><i className="fa-solid fa-check"></i></span>
                                <div className="">Never worry about overpaying for your
                                    energy again</div>
                            </li>
                            <li >
                                <span className=""><i className="fa-solid fa-check"></i></span>
                                <div className=""> We will only switch you to energy companies
                                    that we trust and will treat you right</div>
                            </li>
                            <li >
                                <span className=""><i className="fa-solid fa-check"></i></span>
                                <div className=""> We track the markets daily and know where the
                                    savings are.</div>
                            </li>
                        </ul>


                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row middler overflow-hidden" >
                    <div className="col-12 col-md-6 col-lg-6 middler-1 overflow-hidden">
                        <div className="container-fluid p-1">
                            <article>
                                Effortless Validation for
                            </article>
                            <p className="fs-2 fw-bold">Design Professionals </p>
                            <p className="fs-5">
                                The Myspace page defines the individual, his or her
                                characteristics, traits, personal choices and the overall
                                personality of the person.
                            </p>
                        </div>
                        <ul className='list-type-none p-0 list-insider'>
                            <li >
                                <p className="fs-5 fw-bold">Accessory makers</p>
                                <div className="">The Myspace page defines
                                    the individual The Myspace page defines the individual, his or her characteristics, traits.</div>
                            </li>
                            <li >
                                <p className="fs-5 fw-bold">Design surveys</p>
                                <div className="">Sports betting, lottery and bingo playing for the fun While most people enjoy casino gambling.</div>
                            </li>
                            <li>
                                <p className="fs-5 fw-bold">Accessory makers</p>
                                <div className="">The Myspace page defines
                                    the individual.</div>
                            </li>
                        </ul>


                    </div>
                    <div className="col-12 col-md-6 col-lg-6 middler-2 overflow-hidden">
                        <img src={app.team} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>

            <div className="container ">

                <div className="super-area">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className='wave' viewBox="0 0 1440 320">
                        <path fill="#ffd700" fill-opacity="0.25" d="M0,256L80,218.7C160,181,320,107,480,74.7C640,43,800,53,960,101.3C1120,149,1280,235,1360,277.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg> */}
                    <img src={require('../asset/person1.png')} alt="" className="img1 d-none d-md-block d-lg-block" />
                    <img src={require('../asset/person2.png')} alt="" className="img2 d-none d-md-block d-lg-block" />
                    <img src={require('../asset/person3.png')} alt="" className="img3 d-none d-md-block d-lg-block" />
                    <img src={require('../asset/person4.png')} alt="" className="img4 d-none d-md-block d-lg-block" />

                    <div className="text-container d-flex flex-column justify-content-center align-items-center">
                        <h2 className='my-2 fw-bold fs-1'>Need a super hero?</h2>
                        <p className="fs-4 w-75 text-center my-2">Do you require some help for your project: Conception workshop,
                            prototyping, marketing strategy, landing page, Ux/UI?</p>
                        <p className="text-center btn base my-2">Contact our experts</p>
                    </div>
                </div>
            </div>
            {/* bottom section */}
            <div className="bottom-section container mt-5">
                <p className="fs-1 fw-bold">Marketing Strategies</p>
                <p className="fs-4">
                    Join 40,000+ other marketers and get proven strategies on email marketing
                </p>
                <div className="my-5">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 mb-4 mb-lg-0">
                            <div className="card" >
                                <img src={require('../asset/post1.png')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="card-title">
                                        By Abdullah | 03 March 2019
                                    </div>
                                    <p className="card-text fw-bold">Increasing Prosperity
                                        With Positive Thinking</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 mb-4 mb-lg-0">
                            <div className="card" >
                                <img src={require('../asset/post2.png')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="card-title">
                                        By Abdullah | 03 March 2019
                                    </div>
                                    <p className="card-text fw-bold">Increasing Prosperity
                                        With Positive Thinking</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 mb-4 mb-lg-0">
                            <div className="card" >
                                <img src={require('../asset/post3.png')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="card-title">
                                        By Abdullah | 03 March 2019
                                    </div>
                                    <p className="card-text fw-bold">Increasing Prosperity
                                        With Positive Thinking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
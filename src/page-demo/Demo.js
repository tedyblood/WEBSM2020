import React, {Component, Fragment} from "react";
import ScrollToTop from 'react-scroll-up';
import {
    FaReact,
    FaSass
} from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import {
    FiSmartphone,
    FiCode,
    FiDownload,
    FiCommand,
    FiHeadphones,
    FiBold,
    FiChevronUp
} from "react-icons/fi";

const featureList = [
    {
        icon: <FaReact/>,
        title: 'Latest React 16.8+',
        subtitle: 'We used latest react vertion ^16.8.6.Its a awesome design made by react.'
    },
    {
        icon: <FiSmartphone/>,
        title: 'Perfect Responsive',
        subtitle: 'Our Template is full Perfect for all device. You can visit our template all device easily.'
    },
    {
        icon: <FiCode/>,
        title: 'Well Documented Codes',
        subtitle: 'The Trydo code is awesome well documented code. And Its customization is very easily'
    },
    {
        icon: <FaSass/>,
        title: 'Sass Available',
        subtitle: 'The tamplate has Sass available for css. You can Change css by sass'
    },
    {
        icon: <FiDownload/>,
        title: 'Fast Loading Speed',
        subtitle: 'Trydo is faster loading speed.Trydo create your theme so much faster '
    },
    {
        icon: <FiCommand/>,
        title: 'Modern Design',
        subtitle: 'Trydo is a modern creatuve design for Creative Agency , Personal Portfolio etc....'
    },
    {
        icon: <FiHeadphones/>,
        title: '24 Support System',
        subtitle: 'We are provide 24 hours support for all clients.You can purchase without hesitation.'
    },
    {
        icon: <FiBold/>,
        title: 'Bootstrap Comfortable',
        subtitle: 'Bootstrap comfortable is available in trydo. So layout changes is so much easily'
    }
]
class Demo extends Component {
    render() {
        return (
            <Fragment>
                {/* Start Banner Area  */}
                <div className="prv-banner-wrapper"
                     style={{backgroundImage: `url("assets/images/preview/preview-bg.jpg")`}}>
                    <div className="container-fluid">
                        <div className="plr--120">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5">
                                    <div className="inner">
                                        <Fade bottom>
                                            <div className="logo text-left">
                                                <a href="/">
                                                    <img src="/assets/images/logo/logo-all-dark.png" alt="Trydo Images"/>
                                                </a>
                                            </div>
                                        </Fade>
                                        <Fade bottom>
                                            <p className="title">Welcome to TryDO React Creative Agency Template Built With React JS.
                                                NO jQuery!</p>
                                        </Fade>
                                        <Fade bottom>
                                            <div className="purshase-btn">
                                                <a href="https://themeforest.net/checkout/from_item/25457315?license=regular" className="rn-button-style--2 btn-solid">BUY Now</a>
                                                <a href="#demo" className="rn-button-style--2 btn-border rn-btn-dark border-opacity-half">View Demos</a>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fullscreen empty-div gradient-overlay"></div>
                {/* End Banner Area  */}

                {/* Start Preview Main Wrapper */}
                <div className="main-wrapper" id="demo">
                    {/* Start Main Demo Area  */}
                    <div className="home-demo-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <Fade bottom>
                                            <h2 className="theme-gradient">Home Demo</h2>
                                        </Fade>
                                        <Fade bottom>
                                            <p>Choose one of styles or cutomize easily your site following your ideas. <br/> More
                                                demos are coming soon.</p>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/main-demo">
                                            <img src="/assets/images/preview/demo-home.png" alt="Main Home"/>
                                            <h3 className="title">Main Demo</h3>
                                            <p className="info">Our Template is perfect for creative agency.All agencies use this template for all purpose.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/creative-agency">
                                            <img src="/assets/images/preview/creative-agency.png" alt="Images"/>
                                            <h3 className="title">Creative Agency</h3>
                                            <p className="info">Its a modern design with all realted features for creative agencies company.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/personal-portfolio">
                                            <img src="/assets/images/preview/personal-portfolio.png" alt="Portfolio Details"/>
                                            <h3 className="title">Personal Portfolio</h3>
                                            <p className="info">Its a personal portfolio tamplate that's can be used your Personal useses,  Freelancer, Designer, and Developer etc.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/portfolio-home">
                                            <img src="/assets/images/preview/portfolio-home.png" alt="Images"/>
                                            <h3 className="title">Portfolio Home</h3>
                                            <p className="info">Its a minimal portfolio template. You can be showing your portfolio perfectly by using this template.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/digital-agency">
                                            <img src="/assets/images/preview/digital-agency.png" alt="Main Home"/>
                                            <h3 className="title">Digital Agency</h3>
                                            <p className="info">A Digital Agency template is a nice slider animation, faster loading and all features available for agencies.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/business">
                                            <img src="/assets/images/preview/business.png" alt="Images"/>
                                            <h3 className="title">Business</h3>
                                            <p className="info">It has available all kinds of features for a Business corporate website.You can be use it for your Business website.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/startup">
                                            <img src="/assets/images/preview/startup.png" alt="Images"/>
                                            <h3 className="title">Startup</h3>
                                            <p className="info">A modern and nice design template that can be all startup agencies for all kinds of startup purpose.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                

                                

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/paralax">
                                            <img src="/assets/images/preview/paralax.png" alt="Main Home"/>
                                            <h3 className="title">Paralax</h3>
                                            <p className="info">Its a nice and awesome paralax background image design.You can be use it for Business, Corporate, Degital Agency and other so on.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/studio-agency">
                                            <img src="/assets/images/preview/studio-agency.png" alt="Main Home"/>
                                            <h3 className="title">Studio Agency</h3>
                                            <p className="info">It has been used background video and vedio popup.You can use it for all kinds of agencies studio.</p>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}
                            </div>
                        </div>
                    </div>
                    {/* End Main Demo Area  */}


                    {/* Start Main Demo  */}
                    <div className="home-demo-area bg_color--3 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="theme-gradient">Inner Pages</h2>
                                        <p>Choose one of styles or cutomize easily your site following your ideas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/service">
                                            <img src="/assets/images/preview/service.png" alt="Service"/>
                                            <h3 className="title">Service</h3>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/service-details">
                                            <img src="/assets/images/preview/service-details.png" alt="Main Home"/>
                                            <h3 className="title">Service Details</h3>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/about">
                                            <img src="/assets/images/preview/about.png" alt="Main Home"/>
                                            <h3 className="title">About</h3>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/blog">
                                            <img src="/assets/images/preview/blog-list.png" alt="Main Home"/>
                                            <h3 className="title">Blog List</h3>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/blog-details">
                                            <img src="/assets/images/preview/blog-details.png" alt="Main Home"/>
                                            <h3 className="title">Blog Details</h3>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}


                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/portfolio">
                                            <img src="/assets/images/preview/portfolio.png" alt="Main Home"/>
                                            <h3 className="title">Portfolio</h3>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/portfolio-details">
                                            <img src="/assets/images/preview/portfolio-details.png" alt="Main Home"/>
                                            <h3 className="title">Portfolio Details</h3>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}

                                {/* Start Single Demo  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-demo">
                                        <a target="_blank" href="/contact">
                                            <img src="/assets/images/preview/contact.png" alt="Main Home"/>
                                            <h3 className="title">Contact</h3>
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Demo  */}
                            </div>
                        </div>
                    </div>
                    {/* End Main Demo  */}


                    {/* Start Feature Area  */}
                    <div className="prv-feature service-area bg_color--4 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="text-white">Awesome Feature</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Start Single Feature  */}
                                {featureList.map((value, i) => (
                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12" key={i}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {value.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{value.title}</h3>
                                                <p className="subtitle">{value.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* End Single Feature  */}
                            </div>
                        </div>
                    </div>
                    {/* End Feature Area  */}

                    {/* Start Footer Area  */}
                    <footer className="call-to-action-wrapper text-white-wrapper call-to-action ptb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <span>Purchase The TryDo and Make Your Site super faster and easy.</span>
                                        <h2>Let's go to Purchase</h2>
                                        <a className="rn-button-style--2" href="https://themeforest.net/checkout/from_item/25457315?license=regular"><span>Purchase Now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* End Footer Area  */}

                </div>

                {/* End Preview Main Wrapper */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </Fragment>
        )
    }
}
export default Demo;
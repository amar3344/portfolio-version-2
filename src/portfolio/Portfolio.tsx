import React from 'react';
import "./index.css";

const Portfolio = () => {
    const myImage = require("./assets/myImg.jpg")
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
                <div className="container">
                    <a className="navbar-brand" href="#">Amar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="bgimage" id="home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                            <h2 className="hero_title">Hi, it's me Amar</h2>
                            <p className="hero_desc">I am a professional FullStack Developer in Hyderabad city</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container mt-4 pt-4">
                    <h1 className="text-center">About Me</h1>
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <img src={myImage} className="imageAboutPage" alt="" />
                        </div>
                        <div className="col-lg-8">
                            <p> Experienced front-end developer with an overall professional background 
                                of 1.6 years of relevant technical experience. Specializing in HTML, CSS, 
                                JavaScript, React, React-Native and TypeScript, Redux Toolkit, Comet-Chat. 
                                Proven track record of designing responsive UIs, integrating APIs, and leading 
                                successful projects.
                            </p>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <ul>
                                        <li>Name: Amar Kumar</li>
                                        <li>Age: 26</li>
                                        <li>Occupation: Fullstack Developer</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services">
                <div className="container">
                    <h1 className="text-center">Services</h1>
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className="fas servicesIcon fa-clock"></i>
                                    <h4 className="card-title mt-3">Website Development</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-layer-group'></i>
                                    <h4 className="card-title mt-3">Website Design</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='far servicesIcon fa-check-circle'></i>
                                    <h4 className="card-title mt-3">Website Deployment</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-search'></i>
                                    <h4 className="card-title mt-3">SEO</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-shield-alt'></i>
                                    <h4 className="card-title mt-3">DevOps</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-wrench'></i>
                                    <h4 className="card-title mt-3">QA</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <div className="container mt-3">
                    <h1 className="text-center">Portfolio</h1>
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card">
                                <img className="card-img-top" src="images/portfolioImage1.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">YouTube Clone</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Quiz App</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="images/portfolioImage3.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Product Landing Page</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Messaging Service</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="images/portfolioImage1.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Twitter Clone</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Blog App</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <footer id="footer">
                <div className="container-fluid">
                    <div className="social-icons mt-4">
                        <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.twitch.tv/" target="_blank"><i className="fab fa-twitch"></i></a>
                    </div>
                </div>
            </footer> */}
        </div>
    )
}

export default Portfolio

import React from 'react'
import Navbar from './Navbar'
import '../components_css/About.css'

const About = () => {
  return (
    <>
    <Navbar />
    <div className='container mt-5'>

        <h1 className='text-white'>About Us</h1>

        <div className="accordion mt-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button bgBody" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Overview
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body bgBody">
                The Pexels clone is an application designed to provide users with a vast library of high-quality, royalty-free stock photos and videos. It caters to photographers, designers, marketers, and anyone in need of free visual content, offering an intuitive platform for searching, browsing, and downloading media.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button bgBody collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                User Authentication
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body bgBody">
                Users can sign up and log in using email, social media accounts, or other single sign-on options. This feature ensures secure access and personalized experiences, allowing users to manage their profiles, including uploading an avatar and editing personal information.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button bgBody collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Search and Discovery
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body bgBody">
                The app features a powerful search engine that allows users to find images and videos using keywords. Content is organized into categories and collections for easier browsing, with trending and popular sections highlighted on the homepage to showcase the most sought-after media.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button bgBody collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                User Interaction
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body bgBody">
                Users can engage with content by liking photos and videos, adding them to their favorites, and leaving comments or reviews. Additionally, users can follow their favorite photographers to stay updated with their latest uploads, fostering a community of creatives.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button bgBody collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                UX/UI Design
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body bgBody">
                The app is designed to be fully responsive, ensuring seamless operation across all devices. The user interface emphasizes intuitive navigation and high-quality visuals, with large thumbnails and clean layouts to showcase the media effectively.
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About

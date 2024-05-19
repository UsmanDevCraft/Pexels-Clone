import React from 'react'
import { IoMdImages } from "react-icons/io";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { IoMdPhotos } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LiaVideoSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className='container'>
      
        <nav className="navbar navbar-expand-lg bg-dark.bg-gradient">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fw-semibold fs-4 me-5" to="/"><IoMdImages className='me-2 fs-1' />Pexels Clone</Link>
                <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-semibold fs-5" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-semibold fs-5" aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-white fw-semibold fs-5" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Explore
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/searchApi"><IoMdPhotos /> Discover Photos</Link></li>
                        <li><Link className="dropdown-item" to="/popularSearches"><IoSearch /> Popular Searches</Link></li>
                        <li><Link className="dropdown-item" to="/searchVideo"><LiaVideoSolid /> Free Videos</Link></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar

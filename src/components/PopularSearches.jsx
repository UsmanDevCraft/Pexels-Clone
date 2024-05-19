import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../components_css/About.css'

const PopularSearches = () => {
  return (
    <>
    <Navbar />
    <div className='container text-white pb-5'>
        <div className="container d-flex justify-content-center gap-4 my-5">
          <Link className="nav-link active" aria-current="page" to="/"><p className="text-white fs-5 fw-semibold">Home</p></Link>
          <Link className="nav-link active" aria-current="page" to="/searchVideo"><p className="text-white fs-5 fw-semibold">Videos</p></Link>
          <Link className="nav-link active" aria-current="page" to="/popularSearches"><p className="text-white fs-5 fw-semibold">Searches</p></Link>
          <Link className="nav-link active" aria-current="page" to="/searchApi"><p className="text-white fs-5 fw-semibold">Photos</p></Link>
        </div>

        <h1 className='text-center'>Popular Searches</h1>
        <p className='text-center'>The most popular search terms on Pexels</p>

        <div className="container d-flex justify-content-center flex-wrap gap-2 mt-5 popSearchParent">
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Mother's Day</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Buddha</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Cinco De Mayo</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Summer</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Berries</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Barbecue</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Jungle</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Rain</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Travel</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Chef</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Italian Food</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Wedding</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Coral Reef</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Workers</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Neon Sign</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Bouquet</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Pastry</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Ocean</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Wind</div>
          <div className='bg-success fs-3 fw-semibold hoverEffect d-flex justify-content-center align-items-center' style={{width:"16rem", height:"16rem"}}>Full Moon</div>
        </div>
    </div>
    </>
  )
}

export default PopularSearches

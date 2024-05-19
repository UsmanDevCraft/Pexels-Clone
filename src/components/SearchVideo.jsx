import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchVideo = () => {

    const [videos, setVideos] = useState("");
  const [text, setText] = useState(""); 
  const [loading, setLoading] = useState(false);

  const Apicall = async () => {
    setLoading(true);
    const response = await fetch(`https://api.pexels.com/videos/search?query=${text}&per_page=10`, {
      method: "GET",
      headers: {
        "Authorization": "HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw",
      },
    });
    const json = await response.json();
    // console.log(json.videos);
    setVideos(json.videos);
    setLoading(false);
  };

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Apicall();
  };

  return (
    <>
    <Navbar />

    <div className="container text-white mt-3">
    <h1>Search Your Free Videos</h1>
    </div>

    <div className='container mt-4 mb-5'>
      <form className="d-flex justify-content-center" role="search" onSubmit={onSubmit}>
        <input className="form-control me-2" style={{width: '25rem'}} type="search" placeholder="Search" aria-label="Search" onChange={onChange}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

    <div className="d-flex justify-content-center flex-wrap gap-2 pb-5">
      {
        loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
      }
    {
      videos && videos.map((element)=>{
        const id = element.id;
        const imgUrl = element.image;
        const downloadVideoLink = element.video_files[0].link;
        return (
          <div key={id}>
            <div className="card" style={{width: "18rem"}}>
              <img src={imgUrl} className="card-img-top" alt="..." />
            </div>
              <div className="container d-flex justify-content-center mt-2">
              <a href={downloadVideoLink} target='_main'><button className="btn btn-outline-info">download Video</button></a>
              </div>
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default SearchVideo

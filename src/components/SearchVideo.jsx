import React, { useState } from 'react'
import Navbar from './Navbar'
import { MdDownloadForOffline } from "react-icons/md";
import '../components_css/Searchvid.css'
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchVideo = () => {

    const [videos, setVideos] = useState("");
    const [totalResults, setTotalResults] = useState("");
  const [text, setText] = useState(""); 
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);

  const Apicall = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.pexels.com/videos/search?query=${text}&per_page=20&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw",
          },
        }
      );
      const json = await response.json();
      // console.log(json.videos);
      if (json.videos.length === 0) {
        setTotalResults(0);
      } else {
        setVideos((prevVideo) => [...prevVideo, ...json.videos]);
        setTotalResults(json.total_results);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset page number on new search
    setVideos([]); // Clear videos on new search
    Apicall();
  };

  return (
    <>
      <div className="mainBody">
        {/* ------------ Background Video ------------ */}
        <video autoPlay loop muted className="background-video">
          <source src="/pexels_bg_video.001.mp4" type="video/mp4" />
        </video>

        {/* ------------ content div above video ------------ */}
        <div className="contentBody">
          <Navbar />

          <div className="container text-white mt-3">
            <h1>Search Your Free Videos</h1>
          </div>

          <div className="container mt-4 mb-5">
            <form
              className="d-flex justify-content-center"
              role="search"
              onSubmit={onSubmit}
            >
              <input
                className="form-control me-2"
                style={{ width: "25rem" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={onChange}
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="d-flex justify-content-center flex-wrap gap-2 pb-5">
            {loading && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}

            {/* ----------------- Infinite scroll code ----------------- */}
              <InfiniteScroll
                dataLength={videos.length}
                next={Apicall}
                hasMore={videos.length < totalResults}
                loader={
                  <div className="mt-3 d-flex justify-content-center overflow-hidden">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                }
              >
              <div className="d-flex justify-content-center flex-wrap mt-5 gap-2">
              {videos && videos.map((element) => {
                const id = element.id;
                const imgUrl = element.image;
                const downloadVideoLink = element.video_files[0].link;
                return (
                  <div key={id}>
                    <div className="card" style={{width:"16rem", height:"16rem"}}>
                      <img src={imgUrl} className="card-img-top" style={{width:"16rem", height:"16rem"}} alt="..." />
                    </div>
                    <div className="container d-flex justify-content-center mt-2">
                      <a href={downloadVideoLink}>
                        <MdDownloadForOffline className="mb-2 fs-2 text-white hoverImageApi" />
                      </a>
                    </div>
                  </div>
                );
              })}
              </div>
              </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchVideo

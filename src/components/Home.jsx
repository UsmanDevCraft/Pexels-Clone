import React, { useEffect, useState } from 'react';
import '../components_css/Home.css';
import Navbar from './Navbar';
import HomeApiCard from './HomeApiCard';
import { IoMdImages } from 'react-icons/io';
import { BiSolidVideos } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const [dropDown, setDropDown] = useState('Photos');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(null);
  const history = useHistory();

  const changeDrop = () => {
    setDropDown(dropDown === 'Photos' ? 'Videos' : 'Photos');
  };

  const searchPush = () => {
    if (dropDown === 'Photos') {
      history.push('/searchApi');
    } else {
      history.push('/searchVideo');
    }
  };

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=people&page=${page}&per_page=20`,
        {
          method: 'GET',
          headers: {
            Authorization: 'HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw',
          },
        }
      );
      const json = await response.json();
      setTotalResults(json.total_results);
      if (json.total_results === 0 || photos.length >= json.total_results) {
        setHasMore(false);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...json.photos]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <div className="home">
        <div className="bgImage">
          <Navbar />
          <div className="container text-center textSearch">
            <p className="text-white fs-2 fw-semibold lh-1">
              The best free stock photos, royalty free
            </p>
            <p className="text-white fs-2 fw-semibold lh-1">
              images & videos shared by creators.
            </p>

            <div className="container d-flex justify-content-center">
              <form className="d-flex" role="search">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle me-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {dropDown}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={changeDrop}>
                        <BiSolidVideos />
                        Videos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={changeDrop}>
                        <IoMdImages />
                        Photos
                      </a>
                    </li>
                  </ul>
                </div>
                <input
                  className="form-control me-2 searchWidth"
                  style={{ width: '25rem' }}
                  type="search"
                  placeholder={`Search for free ${dropDown}`}
                  aria-label="Search"
                  onClick={searchPush}
                />
              </form>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center gap-4 my-5">
          <Link className="nav-link active text-white fw-semibold fs-5" aria-current="page" to="/"><p className="text-dark fs-5 fw-semibold">Home</p></Link>
          <Link className="nav-link active text-white fw-semibold fs-5" aria-current="page" to="/searchVideo"><p className="text-dark fs-5 fw-semibold">Videos</p></Link>
          <Link className="nav-link active text-white fw-semibold fs-5" aria-current="page" to="/popularSearches"><p className="text-dark fs-5 fw-semibold">Searches</p></Link>
          <Link className="nav-link active text-white fw-semibold fs-5" aria-current="page" to="/searchApi"><p className="text-dark fs-5 fw-semibold">Photos</p></Link>
        </div>

        <div className="pb-5">
          <h1 className='ms-5'>Free Stock Photos</h1>
          <InfiniteScroll
            dataLength={photos.length} // Use photos.length as dataLength
            next={fetchPhotos}
            hasMore={hasMore}
            loader={
              <div className="d-flex justify-content-center overflow-hidden">
                <div className="spinner-border text-primary text-center" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
            <div className="d-flex justify-content-center flex-wrap mt-5 gap-2">
              {photos.map((element) => {
                const id = element.id;
                const imgUrl = element.src.original;
                return (
                  <div key={id}>
                    <HomeApiCard id={id} imgUrl={imgUrl} />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Home;

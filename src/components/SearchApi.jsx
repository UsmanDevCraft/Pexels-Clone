import React, { useState } from 'react';
import Navbar from './Navbar';
import '../components_css/SearchApi.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchApi = () => {
  const [photos, setPhotos] = useState([]);
  const [text, setText] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const Apicall = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${text}&page=${page}&per_page=10`,
        {
          method: 'GET',
          headers: {
            Authorization: 'HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw',
          },
        }
      );
      const json = await response.json();
      if (json.photos.length === 0) {
        setTotalResults(0);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...json.photos]);
        setTotalResults(json.total_results);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset page number on new search
    setPhotos([]); // Clear photos on new search
    Apicall();
  };

  return (
    <>
      <Navbar />

      <div className="container text-white mt-3">
        <h1>Search Your Free Images</h1>
      </div>

      <div className="container mt-4 mb-5">
        <form className="d-flex justify-content-center" role="search" onSubmit={onSubmit}>
          <input
            className="form-control me-2"
            style={{ width: '25rem' }}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-2">
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        <InfiniteScroll
          dataLength={photos.length}
          next={Apicall}
          hasMore={photos.length < totalResults}
          loader={
            <div className="d-flex justify-content-center overflow-hidden">
              <div className="spinner-border text-primary" role="status">
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
                <div className="card" style={{ width: '18rem' }}>
                  <img src={imgUrl} className="card-img-top" alt="..." />
                </div>
              </div>
            );
          })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default SearchApi;

import React from 'react'

const HomeApiCard = (props) => {

    const { imgUrl, id} = props;

  return (
    <div>
        <div className="card" style={{width:"18rem", height: "100%"}}>
            <img src={imgUrl} className="card-img-top" alt="..." />
        </div>
    </div>
  )
}

export default HomeApiCard

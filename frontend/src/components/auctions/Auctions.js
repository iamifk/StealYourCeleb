import React from "react";
import { Link } from "react-router-dom";

const SingleAuction = ({ auction, col }) => {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <div className='card p-3 rounded'>
        <img className='card-img-top mx-auto' src={auction.images[0].url} />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>
            <Link to={`/auction/${auction._id}`}>{auction.itemName}</Link>
          </h5>

          <Link
            to={`/auction/${auction._id}`}
            id='view_btn'
            className='btn btn-block'
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAuction;
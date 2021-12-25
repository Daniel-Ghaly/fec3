import React from 'react';
import StarRating from './OverviewComponents/StarRating.js';
import Reviews from './OverviewComponents/Reviews.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <StarRating rating ={3.25}/>
        <Reviews numberOfReviews = {9} />
        <div id = 'category-overview'>Category</div>
        <div id = 'product-name-overview'>Product Name</div>
        {/* <Price/> */}
      </>
    )
  }
}

export default Overview;
import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import AverageRating from './AverageRating.jsx';
import { token } from '/config.js';
import PercentRecommended from './PercentRecommended.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingFactors from './RatingFactors.jsx';

function ReviewsSidebar ({productId}) {
  const [productMetaData, setProductMetaData] = useState({});

  // eventually pull in stars component here and give its own classname for styles
  useEffect(() => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`;

    const fetchMeta = async () => {
      const getMetaData = await Axios.get(url, {
        headers: {
          'Authorization': token
        }
      });
      const data = await getMetaData.data;
      setProductMetaData(data);
      console.log(data);
    };
    fetchMeta();
  }, []);

    const renderComponents = () => {
      return (
        <div className='sidebar-components'>
          <AverageRating ratings={productMetaData.ratings}/>
          <PercentRecommended recommended={productMetaData.recommended}/>
          <RatingBreakdown ratings={productMetaData.ratings}/>
          <RatingFactors characteristics={productMetaData.characteristics} />
        </div>
      )
    };

  return (
    <div className='reviews-sidebar'>
      {/* <h5>This is the main sidebar</h5> */}
      {productMetaData.ratings !== undefined ?
        renderComponents() : null}
    </div>
  )
}

export default ReviewsSidebar;


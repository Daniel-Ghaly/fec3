import React from 'react';
import StarRating from './OverviewComponents/StarRating.js';
import Reviews from './OverviewComponents/Reviews.js';
import axios from 'axios'


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfReviews: null,
      rating: null,
      productName: null,
      productCategory: null,
      productPrice: null
    }
  }

  componentDidMount() {

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344', {
      headers: {
        authorization: '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'
      }
    })
    .then(res => {
      this.setState({numberOfReviews: res.data.results.length})

      var sum = 0;
      res.data.results.forEach(item => {
        sum += item.rating
      })
      var rating = sum/(res.data.results.length)
      this.setState({rating: rating})
    })

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344', {
      headers: {
        authorization: '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'
      }
    })
    .then(res => {
      this.setState({productName: res.data.name})
      this.setState({productCategory: res.data.category})
      this.setState({productCategory: res.data.category})
      this.setState({productPrice: res.data.default_price})

    })
  }

  render () {


    return (
      <>
        <StarRating rating ={this.state.rating}/>
        <Reviews numberOfReviews = {this.state.numberOfReviews} />
        <div id = 'category-overview'>{this.state.productCategory}</div>
        <div id = 'product-name-overview'>{this.state.productName}</div>
        <div id = 'price-overview'>${this.state.productPrice}</div>
        {/* <Price/> */}
      </>
    )
  }
}

export default Overview;
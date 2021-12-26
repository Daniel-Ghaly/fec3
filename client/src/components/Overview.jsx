import React from 'react';
import axios from 'axios'

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      quantities: [],
      outOfStock: null,
      selectedStyle: 240500,
      selectedSize: 'L',
      quantity: null

    }
  }

  // handleAddToCart() {
  //   if()
  // }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        authorization: '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'
      }
    })
    .then(res => {
      this.setState({selectedStyle: res.data.results[0]['style_id']})
      var sizesArr = [];
      res.data.results.forEach(style => {
        var styleSkus = style.skus
        for (var sku in styleSkus) {
          if (!sizesArr.includes(styleSkus[sku].size)) {
            sizesArr.push(styleSkus[sku].size)
          }
        }

      })
      console.log(sizesArr)
      this.setState({sizes: sizesArr})
    })


    var quantity = 0;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles`, {
      headers: {
        authorization: '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'
      }
    })
    .then(res => {
      res.data.results.forEach(style => {
        if (style.style_id === this.state.selectedStyle) {
          var styleSkus = style.skus
          console.log(styleSkus)
          for (var sku in styleSkus) {
            if (styleSkus[sku].size === this.state.selectedSize) {
              // console.log('a',styleSkus[sku].quantity)
              // console.log(styleSkus[sku].quantity)
              quantity += styleSkus[sku].quantity
              // console.log(quantity)
            }
          }
        }

      })


      this.setState({quantity: quantity})


    })



  }



  render () {



    var output = [];
      if(this.state.quantity >= 15) {

        for (var i = 1; i <= 15; i++) {
          output.push(<option>{i}</option>)
        }
      } else {
          for (var i = 1; i <= this.state.quantity; i++) {
            output.push(<option>{i}</option>)
          }
        }






    return (
      <>

  <div className="select-dropdown">
    <select>

    {this.state.outOfStock ? <option >OUT OF STOCK</option> : <option >Select Size</option>}

    {!this.state.outOfStock ? this.state.sizes.map(size =>
    <option>{size}</option>
    ) : '' }

    </select>
  </div>







  <div className="select-dropdown">
    <select>



      {output}
      {/* <option value="Brooklyn">1</option>
      <option value="Manhattan">Manhattan</option>
      <option value="Queens">Queens</option> */}
    </select>
  </div>
<button /*handleAddToCart = {this.handleAddToCart.bind(this)} */className="button-13" role="button">Add To Cart</button>





      </>
    )
  }
}

export default Overview;
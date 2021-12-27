import React from 'react';
import StyleSelector from './OverviewComponents/StyleSelector.js'
import axios from 'axios'

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbnails: [],
      styles: [],
      selectedStyle: null
    }
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        authorization: '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'
      }
    })
    .then(res => {
      var styles = [];
      res.data.results.forEach(style => {
        styles.push(style['style_id'])
      })
      this.setState({styles:styles})
    })


    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        authorization: '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'
      }
    })
    .then(res => {
      var urls = [];
      console.log(res.data.results[0])
      res.data.results.forEach(style => {
        urls.push(style.photos[0]['thumbnail_url'])
      })
      this.setState({thumbnails: urls})
    })




  }

  handleStyleClick(e) {



    console.log(e)
    var selectedStyle = this.state.styles[i]
    this.setState({selectedStyle: selectedStyle})
  }

  render () {



    return (
      <>

        <StyleSelector thumbnails = {this.state.thumbnails} handleStyleClick = {this.handleStyleClick.bind(this)}/>

      </>
    )
  }
}

export default Overview;
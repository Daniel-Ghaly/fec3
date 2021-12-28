import React from 'react';
import gray from '/Users/danielghaly/Desktop/Hack Reactor/fec3/client/src/components/OverviewComponents/grey-box.png'
import axios from 'axios'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import checkmark from '/Users/danielghaly/Desktop/Hack Reactor/fec3/client/src/components/OverviewComponents/stars/unnamed (3).jpeg'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {



  }

  // handleStyleClick(i) {
  //   var
  // }

  render () {

    var output = [];

    for (var i = 0; i < this.props.thumbnails.length; i++) {

      var element;
      var index = i

      // if (this.state.selectedStyleIndex === index) {
      //   element = [<div id = 'image-container'> <img className = 'thumbnail-image' onClick = {() => {this.props.handleStyleClick(index)}} src = {this.props.thumbnails[i]} /> <img className = 'checkmark' src ={checkmark} /> </div>]
      // }
      element = [<div id = 'image-container'> <img className = 'thumbnail-image' onClick = {() => {this.props.handleStyleClick(index)}} src = {this.props.thumbnails[i]} /> <img className = 'checkmark' src ={checkmark} /> </div>]

      output.push(element[0])
    }

    return (
      <>
      <div id = 'style-container'>
        <div id = 'selected-style'>Style: (Selected Style)</div>
        <div id = 'styles-container'>
        {output}
        </div>
      </div>
      </>
    )
  }
}




export default StyleSelector;




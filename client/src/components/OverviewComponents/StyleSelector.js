import React from 'react';
import gray from '/Users/danielghaly/Desktop/Hack Reactor/fec3/client/src/components/OverviewComponents/grey-box.png'
import axios from 'axios'

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

      var index = i
      output.push(<img className = 'added'  onClick = {() => {this.props.handleStyleClick(index)}} src = {this.props.thumbnails[i]} />)
    }

    return (
      <>
      <div id = 'style-container'>
        <div id = 'selected-style'>Style: (Selected Style)</div>
        <div id = 'img-container'>
        {output}
        </div>
      </div>
      </>
    )
  }
}




export default StyleSelector;




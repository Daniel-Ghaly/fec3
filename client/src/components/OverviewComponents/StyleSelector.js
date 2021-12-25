import React from 'react';
import gray from '/Users/danielghaly/Desktop/Hack Reactor/fec3/client/src/components/OverviewComponents/grey-box.png'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    var count = 0;
    var output = [];

    for (var i = 0; i < 4; i++) {

      output.push(<img id = 'gray' src = {gray} />)
    }

    return (
      <>
      <div id = 'style-container'>
      <div id = 'selected-style'>Style: (Selected Style)</div>
      {output}
      </div>
      </>
    )
  }
}




export default StyleSelector;




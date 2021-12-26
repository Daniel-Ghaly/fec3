import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>

  <div class="select-dropdown">
    <select>
      <option value="Brooklyn">Brooklyn</option>
      <option value="Manhattan">Manhattan</option>
      <option value="Queens">Queens</option>
    </select>
  </div>


  <div class="select-dropdown">
    <select>
      <option value="Brooklyn">1</option>
      <option value="Manhattan">Manhattan</option>
      <option value="Queens">Queens</option>
    </select>
  </div>
<button class="button-13" role="button">Add To Cart</button>





      </>
    )
  }
}

export default Overview;
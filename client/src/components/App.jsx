import React from 'react';
import Random from './Random.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Random />
      </div>
    )
  }
};

export default App;
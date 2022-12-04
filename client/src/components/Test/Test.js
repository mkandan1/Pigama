import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI () {
        fetch("http://localhost:8800/test")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

  componentWillMount(){
    this.callAPI()
  }
    
  render() {
    return (
      <div>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default Test
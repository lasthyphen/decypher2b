import React from 'react'

let bpiURL = "https://api.coindesk.com/v1/bpi/currentprice.json";

class Phu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(bpiURL)
      .then(response => response.json())
      .then(response => this.setState({ data: response }));
  }

  render() {
    return (
      <div>
        <p>{this.state.data && this.state.data.bpi.USD.rate}</p>
      </div>
    );
  }
}
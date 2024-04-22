import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props); // call the parent constructor

    this.state = {
      counter: 0
    };

    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component did mount');
    // Fetch data from API
    // Set a subscription
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <p>Counter: { this.state.counter }</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

export default App;
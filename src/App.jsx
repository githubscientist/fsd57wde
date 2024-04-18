import { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <p>Counter: {this.props.counter}</p>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props); // to call the constructor of the parent class

    // define the state
    this.state = {
      counter: 0
    }
  }

  handleIncrement = () => {
    // update teh state (data) of the component: counter
    this.setState({
      // provide a new state
      counter: this.state.counter + 1
    })
  }
 
  render() {
    console.log(`rendering...${this.state.counter}`);
    return (
      <div>
        <Counter counter={ this.state.counter } />
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default App;
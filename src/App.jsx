import { Component } from "react";
import Hello from "./components/Hello";

class App extends Component {

  render() {
    const user = 'John Doe';

    return (
      <div>
        <Hello user={ user } />
      </div>
    )
  }
}

export default App;
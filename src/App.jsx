// Function Component or Stateless Component
// Created as JavaScript functions
// They accept a single “props” (which stands for properties) object argument with data and return React elements describing what should appear on the screen.
// JSX => JavaScript XML (HTML with JavaScript Embedded)
// const App = () => {
//   return (
//     <h1>Hello, World!</h1>
//   )
// }

// export default App;

// Class Component or Stateful Component

import { Component } from "react";

class App extends Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    )
  }
}

export default App;
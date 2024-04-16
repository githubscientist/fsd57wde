const App = () => {

  // console.log('Hello, World!');
  // Get the current date and time
  const now = new Date();

  return (
    <p>Hello <strong>World</strong>, it is <em>{ now.toString() }</em></p>
  )
}

export default App;
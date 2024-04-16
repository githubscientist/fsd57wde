const Hello = () => {
  return (
    <p>Hi User! Welcome to our Application!</p>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings!</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App;
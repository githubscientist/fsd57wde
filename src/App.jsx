const App = () => {

  const handleClick = () => console.log('Increment button is clicked')

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App;
import Hello from "./components/Hello";

const App = () => {

  const user = 'John Doe';

  return (
    <div>
      <Hello user={ user } />
    </div>
  )
}

export default App;
import Child from "./components/Child";

const App = () => {
  
  return (
    <div>
      <label htmlFor="parentInput">Parent Component: </label>
      <input 
        type='text'
        placeholder='Parent Component...'
        id="parentInput"
      />
      <Child />
    </div>
  )
}

export default App;
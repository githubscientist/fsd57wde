import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = () => {

  return (
      <div>
          <h2>Child Component</h2>
          <hr />
          <GrandChildComponent />
    </div>
  )
}

export default ChildComponent;
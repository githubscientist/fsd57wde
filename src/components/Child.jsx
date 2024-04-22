import Header from "./Header";

const Child = (props) => {
  return (
    <div>
      <Header name={ props.name } />
    </div>
  )
}

export default Child;
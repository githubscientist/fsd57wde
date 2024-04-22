import Header from "./Header";

const Child = ({ name, setName }) => {
  return (
    <div>
      <Header name={name} />
      <button onClick={() => { setName('Sathish') }}>Update Name</button>
    </div>
  )
}

export default Child;
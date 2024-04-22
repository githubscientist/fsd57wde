import { useState } from "react";
import Header from "./Header";

const Child = () => {

  const [name, setName] = useState("");

  const updateName = (value) => {
    setName(value);
  }

  return (
    <div>
      <h1>Child Component: { name.length }</h1>
      <Header updateName={ updateName } />
    </div>
  )
}

export default Child;
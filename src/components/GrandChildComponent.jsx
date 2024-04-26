import { useContext } from "react";
import { MessageContext } from "../App";

const GrandChildComponent = () => {

    const { message } = useContext(MessageContext);

  return (
      <div>
          <h3>Grand Child Component</h3>
          <p>Message from parent: { message }</p>
    </div>
  )
}

export default GrandChildComponent;
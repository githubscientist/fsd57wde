const GrandChildComponent = ({ tasks }) => {
  return (
      <div>
          <h3>Grand Child Component</h3>
          <p>Message from parent: </p>
          <ul>
              {
                  tasks.map(task => (
                        <li key={task.id}>{ task.title }</li>
                  ))
              }
          </ul>
    </div>
  )
}

export default GrandChildComponent;
const App = (props) => {

  console.log(props);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          props.notes.map(note => 
            <li key={note.id}>{ note.content }</li>
          )
        }
      </ul>
    </div>
  )
}

export default App;
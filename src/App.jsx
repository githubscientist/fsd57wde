import Note from "./components/Note";

const App = ({ notes }) => {

  const addNote = (e) => {
    // prevent the default action of submitting the form
    e.preventDefault();

    // get the value of the input field
    const content = e.target.elements[0].value;

    // create a new note object with the content and a unique id
    const noteObject = {
      content: content,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    // add the note object to the array of notes
    notes.push(noteObject);

    console.log(notes);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note => 
            <Note note={note} key={ note.id } />
          )
        }
      </ul>
      <form onSubmit={addNote}>
        <input type="text" />
        <button type="submit" className="btn btn-primary">save</button>
      </form>
    </div>
  )
}

export default App;
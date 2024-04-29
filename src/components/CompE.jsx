import { useContext } from "react"
import { NotesContext } from "../App"

const CompE = () => {

    const { notes, addNote } = useContext(NotesContext);

    const handleNote = (e) => {
        e.preventDefault();

        /* {
            id: 3,
            content: "GET and POST are the most important methods of HTTP protocol",
            date: "2019-05-30T19:20:14.298Z",
            important: true
        } */

        const note = {
            id: notes.length + 1,
            content: e.target[0].value,
            date: new Date().toISOString(),
            important: false
        }

        addNote(note);
    }

  return (
      <div>
          <ul>
              {
                    notes.map(note => <li key={note.id}>{note.content}</li>)
              }
          </ul>
          <form onSubmit={handleNote}>
              <input type="text" />
              <button type="submit">Add Note</button>
          </form>
    </div>
  )
}

export default CompE
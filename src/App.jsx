import { createContext, useState } from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";

// create a context called as NotesContext
export const NotesContext = createContext();

const App = () => {

    const [notes, setNotes] = useState([
        {
            id: 1,
            content: "HTML is easy",
            date: "2019-05-30T17:30:31.098Z",
            important: true
        },
        {
            id: 2,
            content: "Browser can execute only JavaScript",
            date: "2019-05-30T18:39:34.091Z",
            important: false
        },
        {
            id: 3,
            content: "GET and POST are the most important methods of HTTP protocol",
            date: "2019-05-30T19:20:14.298Z",
            important: true
        }
    ]);

    const addNote = (note) => {
        setNotes([...notes, note]);
        alert("Note added successfully!");
    }

  return (
    <div>
        <NotesContext.Provider value={{ notes, addNote }}>
              <CompA />
              <CompB />
        </NotesContext.Provider>
    </div>
  )
}

export default App;
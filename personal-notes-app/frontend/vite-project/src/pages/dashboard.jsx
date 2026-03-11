import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard(){

 const [note,setNote] = useState("")
 const [notes,setNotes] = useState([])

 const navigate = useNavigate()

 const addNote = () => {

  if(note !== ""){
   setNotes([...notes,note])
   setNote("")
  }

 }

 const deleteNote = (index) => {

  const newNotes = notes.filter((n,i)=> i !== index)
  setNotes(newNotes)

 }

 const logout = () => {
  navigate("/login")
 }

 return(

  <div style={{padding:"40px", fontFamily:"Arial"}}>

   <h1>Personal Notes App</h1>

   <button onClick={logout}>
    Logout
   </button>

   <hr/>

   <h2>Add Note</h2>

   <input
    placeholder="Write a note..."
    value={note}
    onChange={(e)=>setNote(e.target.value)}
   />

   <button onClick={addNote}>
    Add
   </button>

   <h2>My Notes</h2>

   <ul>

    {notes.map((n,index)=>(
     <li key={index}>

      {n}

      <button onClick={()=>deleteNote(index)}>
       Delete
      </button>

     </li>
    ))}

   </ul>

  </div>

 )

}

export default Dashboard
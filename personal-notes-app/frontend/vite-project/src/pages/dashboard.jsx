import { useEffect, useState } from "react"
import API from "../services/api"

function Dashboard(){

 const [notes,setNotes] = useState([])
 const [title,setTitle] = useState("")
 const [content,setContent] = useState("")

 const token = localStorage.getItem("token")

 const getNotes = async () => {

  const res = await API.get("/notes",{
   headers:{ Authorization: token }
  })

  setNotes(res.data)

 }

 useEffect(()=>{
  getNotes()
 },[])

 const createNote = async ()=>{

  await API.post("/notes",
   {title,content},
   {headers:{ Authorization: token }}
  )

  setTitle("")
  setContent("")

  getNotes()

 }

 const deleteNote = async(id)=>{

  await API.delete(`/notes/${id}`,{
   headers:{ Authorization: token }
  })

  getNotes()

 }

 return(

  <div>

   <h1>My Notes Dashboard</h1>

   <div>

    <input
     placeholder="Note Title"
     value={title}
     onChange={(e)=>setTitle(e.target.value)}
    />

    <input
     placeholder="Note Content"
     value={content}
     onChange={(e)=>setContent(e.target.value)}
    />

    <button onClick={createNote}>
     Create Note
    </button>

   </div>

   <hr/>

   {notes.map(note=>(
    <div key={note._id}>

     <h3>{note.title}</h3>
     <p>{note.content}</p>

     <button onClick={()=>deleteNote(note._id)}>
      Delete

     </button>

    </div>
   ))}

  </div>

 )

}

export default Dashboard
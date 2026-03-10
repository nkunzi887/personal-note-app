const Note = require("../models/Note")

exports.getNotes = async (req,res)=>{

 const notes = await Note.find({userId: req.user.id})
 res.json(notes)
}

exports.createNote = async (req,res)=>{

 const note = new Note({
  userId: req.user.id,
  title: req.body.title,
  content: req.body.content
 })

 await note.save()

 res.json(note)
}

exports.deleteNote = async (req,res)=>{

 await Note.findByIdAndDelete(req.params.id)

 res.json({message:"Note deleted"})
}
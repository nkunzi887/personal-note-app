const router = require("express").Router()
const auth = require("../middleware/authMiddleware")
const {getNotes, createNote, deleteNote} = require("../controllers/noteController")

router.get("/", auth, getNotes)
router.post("/", auth, createNote)
router.delete("/:id", auth, deleteNote)

module.exports = router
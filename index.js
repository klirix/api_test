const express = require("express")
const bp = require("body-parser")
const sock = require("socket.io")
const {TodoManager} = require("./TodoManager")

express()


.use(bp.json())

.get("/todos", (req, res)=>{
    res.json(TodoManager.todos)
})

.post("/todos", ({body}, res)=>{
    try {
        res.json(TodoManager.create(body.todo))
    } catch (error) {
        res.json(error)
    }
})

.delete("/todos/:id", ({params:{id}}, res) => {
    res.json(TodoManager.remove(id))
})

.put("/todos/:id/toggle", ({params:{id}}, res) =>{
    res.json(TodoManager.toggleTodo(id))
})

.listen(80)
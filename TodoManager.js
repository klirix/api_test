const uuid = require("uuid")

const TodoManager = {
    todos : [],
    
    validateTodo : todo => {
        if (todo === undefined ||
            todo.name === undefined ||
            todo.name === "") return false
        return true
    },

    create : todo => {
        if (TodoManager.validateTodo(todo)) {
            console.log(todo)
            todo = {id: uuid(), created_at: Date.now(), completed: false, ...todo}
            TodoManager.todos = [...TodoManager.todos, todo]
            return todo
        } else {
            throw "Todo is invalid"
        }
    },

    remove : id => {
        let todo = TodoManager.todos.find(x=> x.id === id)
        TodoManager.todos = TodoManager.todos.filter(x=> x.id !== id)
        return todo
    },

    toggleTodo : id => {
        let todo = TodoManager.todos.find(x=> x.id === id)
        todo.completed = !todo.completed
        TodoManager.todos = [...TodoManager.todos.filter(x=> x.id !== id), todo]
        return todo
    }

}

module.exports = {
    TodoManager
}
import Todo from "./Todo"

const TodoList = ({ todos, setTodos }) => {

    return (
        <>
            <div className='todo-container'>
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            text={todo.text}
                            id={todo.id}
                            todo={todo}
                            todos={todos}
                            setTodos={setTodos} />)
                    )}
                </ul>
            </div>
        </>
    )
}

export default TodoList;
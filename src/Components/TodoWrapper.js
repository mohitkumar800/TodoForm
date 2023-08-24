import React , {useState} from "react";
import { TodoForm } from "./TodoForm";
import {v4 as uuidv4} from 'uuid';
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = ()=>{
    const [todos , setTodos] = useState([]);

    const addTodo = todo =>{
        setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const  toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ?{...todo, complete: !todo.completed}: todo))
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}:todo))
    }
    const editTask = (task , id) => {
        setTodos(todos.map(todo => todo.id === id ?{...
            todo , task, isEditing: !todo.isEditing}: todo))
    }
    // return(
    //     <div className="TodoWrapper">
    //         <TodoForm addTodo = {TodoForm}/>
    //     </div>
    // );
   
    return (
        <div className="TodoWrapper">
            <h1>Do THE TASK WARNA DAD WILL COME </h1>
            <TodoForm addTodo={addTodo} /> {/* Pass the addTodo function instead of TodoForm component */}
            {/* You can map over the todos array to display the list */}
            {todos.map(todo => (
                <div key={todo.id}>
                    {todo.task}
                </div>
            ))}
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>

                ):(
                    <Todo task ={todo} key ={index}  toggleComplete = { toggleComplete}
                    deleteTodo ={deleteTodo} editTodo={editTodo}
                    />

                )
               
            ))}
           
        </div>
    );

}
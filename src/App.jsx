import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const inicialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];


const App= () => {

    const [todos, setTodos] = useState(inicialStateTodos);

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);
    
    // Agregar Todo
    const addTodo = (todo) =>{
        setTodos([...todos, todo]);
    };

    //Delete Todo
    const deleteTodo = id => {
        const newArray = todos.filter(todo => todo.id !== id);
        setTodos(newArray);
    };

    // update todo
    const updateTodo = id => {

        const newArray = todos.map(todo =>{
            if (todo.id === id) {
                todo.state = !todo.state
            }
            return todo
        });
        setTodos(newArray);
    }

    // Orden de los Todos
     const orderTodo = arrayTodos =>{
        return arrayTodos.sort((a, b) =>{
            if ( a.priority === b.priority ) return 0
            if ( a.priority ===  true )return -1
            if ( a.priority === false ) return 1    
            }  
        );
     };

    return (
        <div className="container mb-2">
            <h1 className="text-center my-5"> Formularios</h1>
            <Formulario addTodo  = {addTodo} />
            <Todos todos = {orderTodo (todos)} deleteTodo= {deleteTodo} updateTodo = {updateTodo} orderTodo = {orderTodo} />
        </div>
    );
   
};

export default App
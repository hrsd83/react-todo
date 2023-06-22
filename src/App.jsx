import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const inicialStateTodos = [
    {
        id: 1,
        title: 'Todo #01',
        description: 'Description #02',
        state: true,
        priority:true
    },
    {
        id: 2,
        title: 'Todo #02',
        description: 'Description #02',
        state: false,
        priority:false
    },
    {
        id: 3,
        title: 'Todo #03',
        description: 'Description #03',
        state: false,
        priority:false
    },
    {
        id: 4,
        title: 'Todo #04',
        description: 'Description #04',
        state: true,
        priority:true
    },
    {
        id: 5,
        title: 'Todo #05',
        description: 'Description #05',
        state: false,
        priority:true
    }
] 

const App= () => {

    const [todos, setTodos] = useState(inicialStateTodos)

    const addTodo = (todo) =>{
        setTodos([...todos, todo])
    } 

    return (
        <div className="container mb-2">
            <h1 className="text-center my-5"> Formularios</h1>
            <Formulario addTodo  = {addTodo} />
            <Todos todos = {todos}/>
        </div>
    )
   
}

export default App
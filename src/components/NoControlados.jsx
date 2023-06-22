import { useRef, useState } from "react";



const NoControlados= () => {
    const form= useRef(null);
    const [error, setError] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        setError('')

        //Capturar los datos
        const data = new FormData(form.current);
        // console.log([...data.entries()])

        const {title, description, state} = Object.fromEntries([...data.entries()])

        
        //Validar los datos
        
        if(!title.trim() || !description.trim() || !state.trim()) return setError("Por favor llena todos campo")
        
        console.log(title,description,state)

        //Enviar los datos


        

    }
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input 
                type="text" 
                placeholder="Ingrese Todo" 
                className="form-control mb-2"
                name="title"
                defaultValue="Todo 01"
                />
            <textarea 
                className="form-control mb-2" 
                placeholder="Ingrese descripción"
                name="description"
                defaultValue="Description 01"

                />
             <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente </option> 
                <option value="completado">Completado </option> 
             </select>
             <button 
             type="submit" 
             className="btn btn-primary">Procesar</button>  

             {
                error !== '' && error
             } 

        </form>
    );
};

export default NoControlados
import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import "./react_ejercicio_9.css"

const App = () => {

    function Tarea({ id, texto, completada }) {

        function handleToggle(id){
            setTareas(tareas.map(tarea => 
                tarea.id === id ? {...tarea, completada: !tarea.completada} : tarea
            ))
        }
        return (
            <li>
                {texto} 
                <input type="checkbox"
                    checked={completada}
                    onChange={() => handleToggle(id)} />
            </li>
        )
    }

    function Lista ({ tareas }){
        return(
            <ul>
                {tareas.map(t => <Tarea key={t.id} {...t} />)}
            </ul>
        )     
    }
    

    
    const[texto, setTexto]=useState("") 
    const[completada, setCompletada]=useState(false)

    const getInitialTareas = () => {
        try {
            return JSON.parse(localStorage.getItem("datos")) || []
        } catch {
            return []
        }
    }

    const[tareas,setTareas]=useState(getInitialTareas)

    function addTarea() {
        const tareasActuales = [...tareas]
        setTareas([...tareasActuales, {id:Date.now(), texto: texto, completada: false}])
        setTexto("");
    }

    function deleteTarea() {
        setTareas(tareas.filter(tarea => !tarea.completada))
    };

    useEffect(() => {
        localStorage.setItem("datos", JSON.stringify(tareas))
    }, [tareas])


    
    return (
        <Layout
            title="9. Lista de Tareas con LocalStorage"
            description={"Crea una aplicación de lista de tareas. Cada tarea debe incluir un texto y un checkbox para marcarla como completada. Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga. Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage."}
            style={{ minHeight: "100vh", padding: "2rem"}}
        >         
        <div id="ejercicio9">
            <div>
                <p>Nueva tarea:</p>
                <div id="content">
                    <input type="text"
                        id="texto"
                        name="nuevaTarea"
                        value={texto}
                        onChange={(e)=>setTexto(e.target.value)}
                        placeholder="Escribe una tarea pendiente"
                    />
                    <button id="addTarea"
                        onClick={addTarea}>
                        Agregar nueva Tarea
                    </button>
                </div>
            </div>
            
            <p>Tareas:</p>
            <Lista tareas={tareas} />
            <button id="deleteTarea"
                onClick={deleteTarea}>
                    Eliminar tareas completadas
                </button>
        </div>
        
        </Layout>
    )
}

export default App

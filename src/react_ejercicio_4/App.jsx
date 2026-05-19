import { useState } from "react"
import Layout from "../components/Layout"
import "./react_ejercicio_4.css"

const App = () => {
    const [miLista] = useState(["Gato", "Perro", "Pez"])
    const [inputValue, setInputValue] = useState("")

    const miListaFiltrada = miLista.filter((value) => 
        value.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
        <Layout
            title="4. Filtro de Búsqueda en Tiempo Real"
            description={"Crea una página con un campo de texto y una lista predefinida de elementos. Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar solo los elementos que contienen el texto escrito."}
            style={{ minHeight: "100vh", padding: "2rem"}}
        >
            <div id="ejercicio4content">
                
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe algo..."
                />

                
                <ul>
                    {miListaFiltrada.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default App

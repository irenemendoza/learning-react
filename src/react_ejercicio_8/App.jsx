import { useState } from "react"
import Layout from "../components/Layout"
import "./react_ejercicio_8.css"

const App = () => {

    const [texto, setTexto] = useState("")
    const [caracter, setCaracter] = useState(0)
    const [palabras, setPalabras] = useState(0)
    
    return (
        <Layout
            title="8. Contador de Palabras y Caracteres"
            description={"Crea una página con un campo de texto donde el usuario pueda escribir un párrafo. Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo. Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea."}
            style={{ minHeight: "100vh", padding: "2rem"}}
        >
            <div id="ejercicio8">
                <div id="content">
                    <textarea
                        id="text"
                        name="text"
                        value={texto}
                        onChange={(e) => {
                            setTexto(e.target.value)
                            setCaracter(e.target.value.replace(/\s/g, "").length)
                            setPalabras(e.target.value.trim() === "" ? 0 : e.target.value.trim().split(/\s/g).length)
                        }}
                        placeholder="Escribe un texto"
                        autoFocus={true}>
                    </textarea>
                    <button
                        onClick={() => {
                            setTexto("");
                            setCaracter(0);
                            setPalabras(0);
                    }}>
                        Borrar
                    </button>
                </div>
                <div id="resultados">
                    <div id="caracteres">Número de caracteres: {caracter}</div>
                    <div id="palabras">Número de palabras: {palabras}</div>
                </div>
            </div>
        </Layout>
    )
}

export default App

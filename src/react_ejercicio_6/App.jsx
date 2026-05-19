import { useState, useRef } from "react"
import Layout from "../components/Layout"
import "./react_ejercicio_6.css"

const App = () => {


    const [totalSegundos, setTotalSegundos] = useState(0)
    const intervaloRef = useRef(null)

    // Calcular segundos, minutos y horas
    const segundos = totalSegundos % 60
    const minutos = Math.floor((totalSegundos % 3600) / 60)
    const horas = Math.floor(totalSegundos / 3600)

    // Formateo a dos cifras
    const formatear = (n) => String(n).padStart(2, "0")
    
    const tiempo = `${formatear(horas)}:${formatear(minutos)}:${formatear(segundos)}`

    const iniciar = () => {
        if (intervaloRef.current) return
        intervaloRef.current = setInterval(() => {
            setTotalSegundos(s => s+1)
        }, 1000)
    }

    const pausar = () => {
        clearInterval(intervaloRef.current)
        intervaloRef.current = null
    }

    const reiniciar = () => {
        clearInterval(intervaloRef.current)
        intervaloRef.current = null
        setTotalSegundos(0)
    }

    

    return (
        <Layout
            title="6. Temporizador con Inicio, Pausa y Reinicio"
            description={"Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: \“Iniciar\”, \“Pausar\” y \“Reiniciar\”. Al hacer clic en \“Iniciar\”, el temporizador debe comenzar a contar los segundos, minutos y horas. \“Pausar\” detiene el conteo pero mantiene el tiempo actual. \“Reiniciar\” pone el temporizador en 00:00:00."}
            style={{ minHeight: "100vh", padding: "2rem"}}
        >
        
        <div id="ejercicio6">
            <div id="temporizador">{tiempo}</div>
            <div id="buttons">
                <button class="button" id="inicio" onClick={iniciar}>
                    Iniciar
                </button>
                <button class="button" id="pausa" onClick={pausar}>
                    Pausar
                </button>
                <button class="button" id="reinicio" onClick={reiniciar}>
                    Reiniciar
                </button>
            </div>
        </div>
        
        
        </Layout>
    )
}

export default App

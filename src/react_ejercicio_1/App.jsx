import { useState } from "react"
import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import "./react_ejercicio_1.css"

const randomColor = () =>
    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

const App = () => {
    const [bgColor, setBgColor] = useState("#ffffff")

    return (
        <Layout
            title="1. Cambiador de Color de Fondo"
            description={"Crea una página web con un botón que diga \"Cambiar color\". Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio."}
            style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "2rem"}}
        >
            <PrimaryButton onMyClick={() => setBgColor(randomColor())}>
                Cambiar color
            </PrimaryButton>
        </Layout>
    )
}

export default App

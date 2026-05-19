import { useState } from "react"
import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import "./react_ejercicio_2.css"



const App = () => {
    const [clics, setClics] = useState(0)

    return (
        <Layout
            title="2. Contador de clics"
            description={"Crea una página con un botón que diga \"Contar clics\" y un texto inicial que muestre \"Clics: 0\". Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados."}
            style={{ minHeight: "100vh", padding: "2rem"}}
        >
            <PrimaryButton onMyClick={() => setClics(clics+1)}>
                Contar clics
            </PrimaryButton>
            <p id="result">Clics: {clics}</p>
        </Layout>
    )
}

export default App

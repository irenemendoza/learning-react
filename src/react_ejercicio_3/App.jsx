import { useState } from "react"
import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import List from "../components/List"
import "./react_ejercicio_3.css"

const App = () => {
    const [itemsList, setItemsList] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleAdd = () => {
        if (inputValue.trim() === "") return
        setItemsList([...itemsList, inputValue.trim()])
        setInputValue("")
    }

    const handleDelete = (index) => {
        setItemsList(itemsList.filter((_, i) => i !== index))
    }

    return (
        <Layout
            title="3. Lista Dinámica"
            description={"Crea una página con un campo de texto, un botón que diga \"Agregar\", y una lista vacía debajo. Cuando el usuario escriba un texto y haga clic en \"Agregar\", el texto debe añadirse como un nuevo elemento de la lista. Añade un botón al lado de cada elemento para eliminarlo de la lista."}
            style={{ minHeight: "100vh", padding: "2rem"}}
        >
            <div id="ejercicio3content">
                <div id="input">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <PrimaryButton onMyClick={handleAdd}>
                        Agregar
                    </PrimaryButton>
                </div>
                <hr />
                <List items={itemsList} onDelete={handleDelete} />
            </div>
        </Layout>
    )
}

export default App

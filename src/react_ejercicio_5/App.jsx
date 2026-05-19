import { useState } from "react"
import Layout from "../components/Layout"
import "./react_ejercicio_5.css"

const App = () => {
    const [inputValue1, setInputValue1] = useState("")
    const [inputValue2, setInputValue2] = useState("")

    const [resultado, setResultado] = useState(null)

    const calcular = (operacion) => {
        let num1 = parseFloat(inputValue1)
        let num2 = parseFloat(inputValue2)

        if (isNaN(num1) || isNaN(num2)){
            alert("Hay que introducir números")
            return
        }

        if ((operacion === "/") && (num2 <= 0)){
            alert("No es posible dividir entre 0 o un número negativo")
            return
        }

        const operaciones = {
            "+": num1 + num2,
            "-": num1 - num2,
            "x": num1 * num2,
            "/": num1 / num2,
        }

        setResultado(operaciones[operacion])
    }

    return (
        <Layout
            title="5. Calculadora Sencilla"
            description={"Crea una página con dos campos de entrada de números y cuatro botones: \"Sumar\", \"Restar\", \"Multiplicar\", y \"Dividir\""}
            style={{ minHeight: "100vh", padding: "2rem"}}
        >
            <div id="ejercicio5">
                
                    <div id="calculadora">
                        <div id="numeros">
                            <input type="text"
                                class="numero"
                                id="num1"
                                value={inputValue1}
                                onChange={(e) => setInputValue1(e.target.value)}
                                placeholder="Escribe un número" />
                            <input type="text"
                                id="num2"
                                class="numero"
                                value={inputValue2}
                                onChange={(e)=>setInputValue2(e.target.value)}
                                placeholder="Escribe un número" />
                        </div>  
                        <div id="operaciones">
                            <button id="suma" onClick={()=>calcular("+")}>+</button>
                            <button id="resta" onClick={()=>calcular("-")}>-</button>
                            <button id="multiplicacion" onClick={()=>calcular("x")}>x</button>
                            <button id="division" onClick={()=>calcular("/")}>/</button>
                        </div>      
                    </div>
                    <p>Resultado: {resultado}</p>
                
                
            </div>
        </Layout>
    )
}

export default App

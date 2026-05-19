import { useState } from "react"
import Layout from "../components/Layout"
import "./react_ejercicio_7.css"

const App = () => {

    const[lengthPassword, setLengthPassword] = useState(0)
    const [password, setPassword] = useState("")

    const generador = () => {
        if (lengthPassword < 4 || isNaN(lengthPassword)){
            alert("La contraseña debe ser un número y tener más de cuatro caracteres");
            setLengthPassword("")
            return
        }

        function getRandomLower() {
	        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        }
        function getRandomUpper() {
	        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
        function getRandomNumber() {
	        return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
        }
        function getRandomSymbol() {
	        const symbols = "!@#$%{}_-[]";
	        return symbols[Math.floor(Math.random() * symbols.length)]
        }
        const valorRandom = {
	        lower: getRandomLower,
	        upper: getRandomUpper,
	        number: getRandomNumber,
	        symbol: getRandomSymbol,
        }
        const tipoCaracteres = ["lower", "upper", "number", "symbol"]
        const caracteresObligatorios = [valorRandom.lower(), valorRandom.upper(), valorRandom.number(), valorRandom.symbol()]
        const contraseñaArray = caracteresObligatorios
        const longitud = parseInt(lengthPassword)

        for (let long = caracteresObligatorios.length; long < longitud; long++){
            const tipo = tipoCaracteres[Math.floor(Math.random()*tipoCaracteres.length)]
            const nuevoCaracter = valorRandom[tipo]()
            contraseñaArray.push(nuevoCaracter)
        }

        function mezclar(array) {
            for (let i = array.length -1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i+1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const contraseñaArrayMezclada = mezclar(contraseñaArray)
        setPassword(contraseñaArrayMezclada.join(""))
        setLengthPassword("")
    }

    return (
            <Layout
                title="7. Generador de Contraseñas Aleatorias"
                description={"Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga \“Generar contraseña\”. Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales. Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4."}
                style={{ minHeight: "100vh", padding: "2rem"}}
            >
            <div id="ejercicio7">
                <div id="content">
                    <input type="text"
                        value={lengthPassword}
                        onChange={(e) => setLengthPassword(e.target.value)}
                        onClick={() => setPassword("")}
                        placeholder="Longitud de la contraseña aleatoria" />
                    <button id="generador" onClick={generador}>
                        Generador de contraseña aleatoria
                    </button>
                </div>
                <div id="password">
                    Contraseña aleatoria generada: {password}
                </div>
            </div>
            
            </Layout>
        )
}

export default App

import Layout from "../components/Layout"
import "./indice.css"

const ejercicios = [
    { texto: "Ejercicio 1 - Cambiador de color de fondo", href: "/react_ejercicio_1.html" },
    { texto: "Ejercicio 2 - Contador de clics", href: "/react_ejercicio_2.html" },
    { texto: "Ejercicio 3 - Lista dinámica", href: "/react_ejercicio_3.html" },
    { texto: "Ejercicio 4 - Filtro de Búsqueda en Tiempo Real", href: "/react_ejercicio_4.html"},
    { texto: "Ejercicio 5 - Calculadora Sencilla", href:"/react_ejercicio_5.html"},
    { texto: "Ejercicio 6 - Temporizador con Inicio, Pausa y Reinicio", href:"/react_ejercicio_6.html"},
    { texto: "Ejercicio 7 - Generador de Contraseñas Aleatorias", href:"/react_ejercicio_7.html"},
    { texto: "Ejercicio 8 - Contador de palabras y caracteres", href:"/react_ejercicio_8.html"},
    { texto: "Ejercicio 9 - Lista de Tareas con LocalStorage", href:"react_ejercicio_9.html"},
]

const App = () => (
    <Layout title="Ejercicios de React" style={{ minHeight: "100vh", padding: "2rem" }}>
        <ul>
            {ejercicios.map((ejercicio) => (
                <li key={ejercicio.href}>
                    <a href={ejercicio.href}>{ejercicio.texto}</a>
                </li>
            ))}
        </ul>
    </Layout>
)

export default App

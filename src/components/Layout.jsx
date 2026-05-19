import "./Layout.css"

const Layout = ({ title, description, children, style }) => (
    <div className="exercise" style={style}>
        <a href="../../index.html" id="back">Volver al menú</a>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
    </div>
)

export default Layout
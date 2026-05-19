import PrimaryButton from "./PrimaryButton"

const ListItem = ({ item, onDelete }) => (
    <li>
        {item}
        <PrimaryButton onMyClick={onDelete}>Eliminar</PrimaryButton>
    </li>
)

export default ListItem

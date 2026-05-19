import ListItem from "./ListItem"

const List = ({ items, onDelete }) => (
    <ul>
        {items.map((item, index) => (
            <ListItem key={index} item={item} onDelete={() => onDelete(index)} />
        ))}
    </ul>
)

export default List

import "./PrimaryButton.css"

const PrimaryButton = ({
    onMyClick, //function
    children, // string | elemento HTML
}) => {
    return (
        <button onClick={onMyClick} className="bg-blue-500 text-white p-2 rounded-md cursor-pointer mb-5">
            {children}
        </button>
    );
}

export default PrimaryButton
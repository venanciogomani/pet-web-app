const PetAttribute = ({
    title,
    value
}) => {
    return (
        // Container for the pet attribute
        <div className="flex flex-col py-4">
            {/* Display the title with bold font */}
            <span className="font-semibold">{title}</span>
            {/* Display the corresponding value */}
            <span>{value}</span>
        </div>
    );
}

export default PetAttribute;

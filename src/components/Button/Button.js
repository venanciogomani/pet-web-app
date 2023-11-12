const Button = ({
    lable,
    action,
    show
}) => {
    return (
        <button 
            className={`
                ${show ? 'flex' : 'hidden'}
                md:flex 
                items-center 
                justify-center
                bg-default-blue-light
                text-white 
                font-bold 
                px-8 
                py-2 
                rounded-full 
                shadow-md 
                hover:bg-default-blue-dark
                focus:outline-none 
                focus:ring-2 
                focus:ring-default-blue-light
                focus:ring-opacity-75
                duration-300
                ease-in-out
            `}
            onClick={action}
        >
            {lable}
        </button>
    )
}

export default Button
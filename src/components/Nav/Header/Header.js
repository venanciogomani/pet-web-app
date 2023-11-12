import useNavigateTo from "../../../hooks/useNavigateTo";

const Header = () => {
    const navigateToHome = useNavigateTo();
    
    return (
        <header
            className="sticky top-0 z-10 bg-default-yellow-light md:bg-default-yellow-dark p-5 md:px-10"
        >
            <img
                className="w-8 cursor-pointer"
                src="/favicon.ico"
                alt="logo"
                onClick={() => navigateToHome()}
            />
        </header>
    )
}

export default Header
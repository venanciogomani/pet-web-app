import useNavigateTo from '../../hooks/useNavigateTo';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = () => {
    // Custom hook to navigate to specific routes
    const navigateToPetDetails = useNavigateTo();

    return (
        // Banner container
        <div className="bg-gray-100 w-full h-64 md:h-80 rounded-xl my-4 flex justify-between">
            <div className="w-full md:w-1/2 lg:w-2/3 h-full">
                <img
                    className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-l-xl"
                    src="/images/treats.jpeg"
                    alt="pets"
                />
            </div>
            {/* Banner content */}
            <div 
                className="h-full md:h-full w-full md:w-1/2 lg:w-1/3 bg-default-blue-light rounded-none md:rounded-r-xl flex flex-row md:flex-col items-center justify-between md:justify-center p-4"
            >
                {/* Banner title */}
                <h1 className="text-white font-semibold text-lg">
                    Pets directory
                </h1>
                {/* Banner description (hidden on small screens) */}
                <p className="text-white text-sm py-2 hidden md:flex">
                    See all pets available for adoption.
                    Promote them and help them find a home.
                </p>
                {/* "See all" button */}
                <div 
                    className="text-white md:text-default-blue-light bg-transparent md:bg-white font-bold px-0 md:px-8 py-2 rounded-full cursor-pointer"
                    onClick={() => navigateToPetDetails(`pets`)}
                >
                    {/* "See all" text (hidden on small screens) */}
                    <span className="hidden md:flex">See all</span>
                    {/* Arrow icon (visible on small screens) */}
                    <span className='flex md:hidden'>
                        <AiOutlineArrowRight/>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Banner;

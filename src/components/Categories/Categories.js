import CategoryCard from "../Cards/CategoryCard/CategoryCard";

const Categories = () => {
    return (
        // Container for the categories section with padding
        <div className="pt-5 pb-8 px-4">
            {/* Title for the categories section */}
            <h1 className="text-lg font-bold">
                Categories
            </h1>

            {/* Grid layout for category cards with responsive columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6">
                {/* Individual category cards with specified titles and icons */}
                <CategoryCard title="All pets" icon="heart" />
                <CategoryCard title="Location specific" icon="pin" />
                <CategoryCard title="Age specific" icon="clock" />
                <CategoryCard title="Available now" icon="confettie" />
                <CategoryCard title="For small or big homes" icon="home" />
            </div>
        </div>
    );
}

export default Categories;

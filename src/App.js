import { Route, Routes } from 'react-router-dom';

// Components
import Footer from './components/Nav/Footer/Footer';
import Header from './components/Nav/Header/Header';

// Pages
import PetDetails from './pages/PetDetails';
import PetFilter from './pages/PetFilter';
import AllPets from './pages/AllPets';

// Hooks
import useFetchPets from './hooks/useFetchPets';

// Styles
import './App.css';

function App() {
    // Custom hook to fetch pets data
    useFetchPets();

    return (
        <div className="min-h-screen">
            {/* Header component */}
            <Header />
            {/* Routing for different pages */}
            <Routes>
                {/* Home page with pet filtering */}
                <Route 
                    path="/" 
                    element={<PetFilter />} 
                />
                {/* Page to display all pets or pets of a specific species */}
                <Route 
                    path="/:species" 
                    element={<AllPets />} 
                />
                {/* Page to display all pets */}
                <Route 
                    path="/pets" 
                    element={<AllPets />} 
                />
                {/* Page to display details of a specific pet */}
                <Route 
                    path="/pets/:id"
                    element={<PetDetails />} 
                />
            </Routes>
            {/* Footer component - Uncomment if needed */}
            {/* <Footer /> */}
            <Footer />
        </div>
    );
}

export default App;

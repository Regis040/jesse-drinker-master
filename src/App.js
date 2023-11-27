import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CocktailsPage from './pages/CocktailsPage';
import CocktailsRandomPage from './pages/CocktailsRandomPage';
import CategoriesPage from './pages/CategoriesPage';
import IngredientsPage from './pages/IngredientsPage';
import CocktailDetailsPage from './pages/CocktailDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/random" element ={< CocktailsRandomPage />} />
          <Route path="/categories" element ={< CategoriesPage />} />
          <Route path="/ingredients" element={< IngredientsPage />} />
          <Route path="/cocktails/details/:id" element={< CocktailDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

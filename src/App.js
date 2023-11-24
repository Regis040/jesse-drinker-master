import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CocktailsPage from './pages/CocktailsPage';
import CocktailsRandomPage from './pages/CocktailsRandomPage';
import CategoriesPage from './pages/CategoriesPgae';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/random" element ={< CocktailsRandomPage />} />
          <Route path="/categories" element ={< CategoriesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CocktailsPage from './pages/CocktailsPage';
import CocktailsRandomPage from './pages/CocktailsRandomPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/random" element ={< CocktailsRandomPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

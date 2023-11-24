import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CocktailsPage from './pages/CocktailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cocktails" element={<CocktailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";

function CocktailCard ({cocktailToDisplay}) {
    return (
        <article class="coktails_position">
            {/* j'affiche le nom des cocktails compris dans ce tableau */}
                <img alt={cocktailToDisplay.strDrink} src={cocktailToDisplay.strDrinkThumb}/>
                
                    <h2>{cocktailToDisplay.strDrink}</h2>
                    <h4>fait avec {cocktailToDisplay.strIngredient1}, {cocktailToDisplay.strIngredient2}, {cocktailToDisplay.strIngredient3}, {cocktailToDisplay.strIngredient4}</h4>
                    <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Voir les détails</Link>                         
        </article>
    )
}
export default CocktailCard;
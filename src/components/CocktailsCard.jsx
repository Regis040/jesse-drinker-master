import { Link } from "react-router-dom";

function CocktailCard ({cocktailToDisplay}) {


    // Déclaration de la fonction EventListner qui est déclenchée au click sur le bouton.
    // Elle lance une action par l'intermédiaire de la méthode http "DELETE" sur l'url prévue dans ce but
    // A cet effet, elle nécessite un second paramètre qui est l'id car le premier, "event", est obligatoirement imposé par le navigateur
        const handleDeleteCocktail = async (event, id) => {

            await fetch("https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php?s=" + id, { // => fake url pour l'exo donc inutilisable
            // Les données du cocktail est supprimé
                method: "DELETE",
            });             
        };

    return (
        <article class="coktails_position">
            {/* j'affiche le nom des cocktails compris dans ce tableau */}
                <img alt={cocktailToDisplay.strDrink} src={cocktailToDisplay.strDrinkThumb}/>
                
                    <h2>{cocktailToDisplay.strDrink}</h2>
                    <h4>fait avec {cocktailToDisplay.strIngredient1}, {cocktailToDisplay.strIngredient2},
                         {cocktailToDisplay.strIngredient3}, {cocktailToDisplay.strIngredient4}</h4>
                    <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Voir les détails</Link>  

                    {/* Mise en place d'un "bouton" :
                    Afin de récupèrer les 2 paramètres, une fonction est créée sur l'eventListener afin de récupèrer l'action sur le bouton 
                    et l'id "cocktailToDisplay.idDrink".
                    */}
                    <button 
                        onClick={(event)=> {
                            handleDeleteCocktail (event, cocktailToDisplay.idDrink);
                        }}
                    >
                        Supprimez le cocktail
                    </button>                                        
        </article>
    );
}
export default CocktailCard;
import { useState } from "react";

function CocktailsRandomPage () {

    // Je veux récupèrer un cocktail aléatoire situé dasn une api via une url et afficher mon résulat
    // Une fonction Hook useState est mise en place car deux états sont créés:
    // Le premier est lié à l'attente de reception des données et leur traitement et le second à l'affichage du résulat
    // useState a pour variable "null" car elle corespond au premier état du rendu.
    const [cocktailRandom, setCocktailRandom] = useState(null);
    // afin d'eviter que ma demande tourne en boucle je pose une condition: "si ma variable d'état est vide, dasn ce cas j'exécute la fonction fetch et ainsi
    // lorsque cette varibale aura récupèrer les données la focntion async ne sera plus actionnée."
    if (cocktailRandom == null) {
        // Cette fonction async,anonyme et auto-invoquée, est necessaire à l'utilisation du mot clé "await" qui lui-m^me est important car il permet de définir l'attente 
        // des données qui doivent être récue dans la variable "cocktailRandomresponse"puis trnsformée en js lisible dans la variable cocktailsJs.
        (async () => {
            const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            const cocktailsJs = await cocktailRandomResponse.json();
            // les données traitées sont placées, en invoquant la fonction "setCocktailRandom", dasn la varibale d'état "cocktailJs" auquel on précise un chemin dasn l'API.
            setCocktailRandom(cocktailsJs.drinks[0]);
        })();
    }

    return (
       <main>
        {/* Si les données sont bien présentes dans la donnée d'état, alors on affiche le cocktail sinon on affiche que les données sont en cours de traitement 
        ce qui est le cas  au premier rendu du composant*/}
        {cocktailRandom ? (
                <>
                     <article>
                            <img src={cocktailRandom.strDrinkThumb} />
                            <h2>{cocktailRandom.strDrink}</h2>
                     </article>
                    
                </>
        ) : (
            <p>
                Cocktail en cours de présentation
            </p>
        )}
       </main>
    )
}
export default CocktailsRandomPage;
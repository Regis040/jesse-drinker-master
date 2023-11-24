import { useEffect, useState } from "react";

function CocktailsRandomPage () {

    // Je veux récupèrer un cocktail aléatoire situé dans une api via une url et afficher mon résulat
    // Une fonction Hook useState est mise en place car deux états sont créés:
    // Le premier est lié à l'attente de reception des données et leur traitement et le second à l'affichage du résulat
    // useState a pour variable "null" car elle correspond au premier état du rendu.
    const [cocktailRandom, setCocktailRandom] = useState(null);
    // afin d'eviter que ma demande tourne en boucle je pose une condition: "si ma variable d'état est vide, dasn ce cas j'exécute la fonction fetch et ainsi
    // lorsque cette varibale aura récupèrer les données la fonction async ne sera plus actionnée."
    

    // use effect est une fonction que react me fournit
    // et qui permet d'executer du code uniquement à certains
    // chargements du composant
    // ici, vu qu'on place un tableau vide au deuxième paramètre
    // de useeEffet
    // ça signifie qu'on peut executer la fonction une seule fois
    // au premier composant du chargement

       useEffect (() =>{
        // Cette fonction async,anonyme et auto-invoquée, est necessaire à l'utilisation du mot clé "await" qui lui-même est important car il permet de définir l'attente 
        // des données qui doivent être récues dans la variable "cocktailRandomresponse" puis transformée en js lisible dans la variable "cocktailsJs".
            (async () => {
                const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
                const cocktailsJs = await cocktailRandomResponse.json();
                // les données traitées sont placées, en invoquant la fonction "setCocktailRandom", dans la variable d'état "cocktailJs" auquel on précise un chemin dans l'API.
                // l'appel de cette fonction recharge le composant
                setCocktailRandom(cocktailsJs.drinks[0]);
            })();
       }, []);
 
 
                 // fonction eventListener qui est actionnée à l'appel du bouton: le composants est rechargé
                    const handleButtonClick = () => {
                        (async () => {
                            const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
                            const cocktailsJs = await cocktailRandomResponse.json();
                            // les données traitées sont placées, en invoquant la fonction "setCocktailRandom", dans la variable d'état "cocktailJs" auquel on précise un chemin dans l'API.
                            // l'appel de cette fonction recharge le composant
                            setCocktailRandom(cocktailsJs.drinks[0]);
                        })();
                    };
    return (
       <main>
        {/* Si les données sont bien présentes dans la donnée d'état, alors on affiche le cocktail sinon on affiche que les données sont en cours de traitement 
        ce qui est le cas  au premier rendu du composant*/}
        {cocktailRandom ? (
                <div class="divstyle">
                    <button onClick={handleButtonClick}>Change de cocktail</button>
                     <article class="coktail_position">
                            <img src={cocktailRandom.strDrinkThumb} />
                            <h2>{cocktailRandom.strDrink}</h2>
                            <h5>{cocktailRandom.strIngredient1}</h5>
                            <h5>{cocktailRandom.strIngredient2}</h5>
                            <h5>{cocktailRandom.strIngredient3}</h5>
                            <h5>{cocktailRandom.strIngredient4}</h5>
                            <h5>{cocktailRandom.strIngredient5}</h5>
                            <h5>{cocktailRandom.strIngredient6}</h5>
                            <h5>{cocktailRandom.strIngredient7}</h5>
                            <h5>{cocktailRandom.strIngredient8}</h5>
                            <h5>{cocktailRandom.strIngredient9}</h5>
                     </article>                    
                </div>
        ) : (
            <p>
                Cocktail en cours de présentation
            </p>
        )}
       </main>
    )
}
export default CocktailsRandomPage;
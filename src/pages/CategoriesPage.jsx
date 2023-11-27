import { useEffect, useState } from "react";

function CategoriesPage (){
    // Je veux récupèrer un cocktail aléatoire situé dans une api via une url et afficher mon résulat
    // Une fonction Hook useState est mise en place car deux états sont créés:
    // Le premier est lié à l'attente de reception des données et leur traitement et le second à l'affichage du résulat
    // useState a pour variable "null" car elle correspond au premier état du rendu.
    const [categories, setCategories]= useState(null);
    // afin d'eviter que ma demande tourne en boucle je pose une condition: "si ma variable d'état est vide, dasn ce cas j'exécute la fonction fetch et ainsi
    // lorsque cette varibale aura récupèrer les données la fonction async ne sera plus actionnée."
    

    // "useEffect" est une fonction Hook (commence par "use") que react me fournit
    // et qui permet d'executer du code uniquement à certains
    // chargements du composant, ici au premier chargement : 
    // ici, vu qu'on place un tableau vide au deuxième paramètre
    // de useEffet (ce qui est le cas quasiment tout le temps)
    // ça signifie qu'on peut executer la fonction une seule fois
    // au premier composant du chargement
    useEffect (() => {
        // Cette fonction async,anonyme et auto-invoquée, est necessaire à l'utilisation du mot clé "await" qui lui-même est important car il permet de définir l'attente 
        // des données qui doivent être récues dans la variable "cocktailRandomresponse" puis transformée en js lisible dans la variable "cocktailsJs".
        (async () => {
            const categoriesFetchResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            const categoriesFetch = await categoriesFetchResponse.json();
             // les données traitées sont placées, en invoquant la fonction "setCocktailRandom", dans la variable d'état "cocktailJs" auquel on précise un chemin dans l'API.
            // l'appel de cette fonction recharge le composant
            setCategories(categoriesFetch.drinks);
        }) ();
    }, []); // entre crochet il s'agit du paramètre de useEffect, en l'occurrence d'un tableau vide.

    return (
        <main class="joie-boisdemai">
         {/* Si les données sont bien présentes dans la donnée d'état, alors on affiche le cocktail sinon on affiche que les données sont en cours de traitement 
        ce qui est le cas  au premier rendu du composant*/}           
                {categories ? (
                <div class="categories-style">
                    <h1>Les catégories de cocktails</h1>
                   {categories.map ((category) => {
                    return (
                        <article>
                            <h3>{category.strCategory}</h3>
                        </article>
                    );
                   })}                                       
                </div>
        ) : (
            <p>
               Catégories coming soon 
            </p>
        )}
        </main>
    )
}
export default CategoriesPage;
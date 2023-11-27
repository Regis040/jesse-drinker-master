import { useEffect, useState } from "react";

function IngredientsPage () {
    // La fonction useState va afficher un premier rendu puis recevoir les données traitées, recharger le rendu
    // et afficher les données
    const [ingredients, setIngredients]= useState(null);

    // Une fonction qui pourrait être remplacée par un "if" mais qui ne continuera pas la boucle si les données ne sont pas reçues.
    //Le second paramètre, le tableau vide, précise cette action.
    useEffect (() => {
        (async () => {
            const ingredientsApiResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
            const ingredientsApi = await ingredientsApiResponse.json();
            //Les données traitées sont envoyées dans la fonction useState.
            
            setIngredients(ingredientsApi.drinks);
        })();
    }, []);


    return (
        <main>  
            {/* On affiche les deux effets: le premier lorsque les données n'ont pas encore été reçu et le second
            lorsque les données ont été reçu et traitées */}
            {ingredients ? (
                <section>
                    {/*  Les données recues et traitées vont ainsi être parcourues et affichées */}
                {ingredients.map((ingredient) => {
                    return (
                            <article>{ingredient.strIngredient1}</article>
                    )
                })}
                </section>  
            ) : (
                <p>Ingredients en préparation</p>
            )}          
        </main>
    )
}
export default IngredientsPage;
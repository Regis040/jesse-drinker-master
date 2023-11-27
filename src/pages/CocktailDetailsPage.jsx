import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function CocktailDetailsPage () {

    const { id } = useParams();
    const [cocktails, setCocktail] = useState(null);


    useEffect (() => {
        (async () => {
            const cocktailApiPromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
            const cocktailApi = await cocktailApiPromise.json();
            console.log(cocktailApi);
            setCocktail(cocktailApi.drinks[0]);
        }) ();
    }, []);

    return (
        <main>           
            {cocktails ? (
                <section>                                      
                    <article>
                         <h2>{cocktails.strDrink}</h2>
                    </article>                       
                   
                </section>  
            ) : (
                <p>Information en cours de chargement</p>
            )}          
         </main>           
    )
}
export default CocktailDetailsPage;
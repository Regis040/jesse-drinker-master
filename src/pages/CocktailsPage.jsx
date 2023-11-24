import {useState} from 'react'

function CocktailsPage () {

    // Je veux afficher les données lorsqu'elle seront prètes mais si elles ne le sont pas, je veux pouvoir le visualiser par un message.
    // Je met en place une fonction hook useState qui va me récupérer les cocktails.
    // au chargement du composant, les données sont abscentes quelques micro secondes. 
    // Cette information est traitée dans le paragraphe p "cocktails en préparation"    
    const [cocktails, setCocktails] = useState(null);

    // Afin d'éviter que la fonction tourne en boucle, on impose un "s'il n'y a pas de données, alors on execute le fetch"   
    if (!cocktails) {
// // La fonction fetch va récupèrer les données présents sur l'API
//      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
//     //  lorsque les données sont prètes (télécharger), elles sont placées dans la variable "response"
//             .then((response) => {
//                 // et retournées sous forme de javascript et donc présentées sous forme d'un tableau: le ".json"est trompeur car il s'agit bien de 
//                 // données transformés en tableau exploitable !
//         return response.json();        
//      }) 

//      .then((json) => {
//                 //   j'affiche dans la console le rendu du tableau
//         console.log(json);
//                 //   j'entre les données recueillies au sein de la fonction useState
//         setCocktails(json.drinks); //Le "drinks" est ajouté car ce  tableau qui contient "drinks" contient lui-même des objets qui nous intérressent
//      });
//     }
//     //  Les données recueillies dans la fonction "useState" sont traitées dans le "if ... si les données sont reçues et 
//     // transformer en javascript alors "Les cocktails sont prêts"".


// Fonction anonyme (pas de nom)
// qui s'auto-invoque
// la variable "cocktailsResponse" attend de recevoir les données de l'APi, attente qui est marqué le mot clé "await"
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            // la variable "json" va recevoir les données ci-dessus après qu'elle ait été transformée en données lisibles, en js. 
            // Ces données mettent également un certain temps à être traitées d'où l'implémentation du await (qui signifie "en attente de ...")
            const json = await cocktailsResponse.json();
            // Les donnéés transformées sont alors envoyées grâce à la fonction hook useState danss la variable "cocktails" 
            // afin d'être affichées après le "return", 1 fois grâce au "if" placé plus haut. 
            
            setCocktails(json.drinks);
        }) ();
    }
    return (
        <main>
            {cocktails ? (
            <>
            <h1>Mes cocktails préférés</h1>
            {/* Je veux récupérer le nom des cocktails */}
            {/* Je parcours mes données recuillies dans le tableau */}
                {cocktails.map((cocktail) => {
                    return (
                    <article class="coktails_position">
                        {/* j'affiche le nom des cocktails compris dans ce tableau */}
                            <img alt={cocktail.strDrink} src={cocktail.strDrinkThumb}/>
                            
                                <h2>{cocktail.strDrink}</h2>
                                 <h4>fait avec {cocktail.strIngredient1}, {cocktail.strIngredient2}, {cocktail.strIngredient3}, {cocktail.strIngredient4}</h4>
                            
                         
                    </article>
                    );
                })}
            </>
            ) : (
                <p>
                    Cocktails en cours de préparation
                </p>
            )}
        </main>
    )
};
export default CocktailsPage;

import { Link } from "react-router-dom";

function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/cocktails">Mes cocktails</Link></li>
                    <li><Link to="/random">Mon cocktail au hasard</Link></li>                               
                </ul>
            </nav>
        </header>
    )
}
export default Header;
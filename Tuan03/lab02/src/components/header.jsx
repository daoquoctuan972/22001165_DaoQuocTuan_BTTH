import '../components/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header(){
    return(
        <>
        <div className="bg-white">
            <header>
                <div>
                    <img src="" alt="" />
                    <span className='brand-name'>Chefify</span>
                </div>
                <div>
                    <input type="text" />
                </div>
                <nav>
                    <ul>
                        <li>What to cook</li>
                        <li>Recipes</li>
                        <li>Ingredients</li>
                        <li>Occasions</li>
                        <li>About us</li>
                    </ul>
                </nav>
                <button id='login'>Your Recipe Box</button>
                <img src="" alt="" />
            </header>
        </div>
        </>
    )
}
function Header() {
    return(
        <>
        <div className="inline-flex border-b-1 w-400 border-gray-200">
            <div className="flex ml-20">
                <img src="../public/img/logoshop.png" alt="" className="w-15 h-15 mt-3"/>
                <h2 className="text-2xl font-bold text-pink-500 mt-6 ml-3">Chefify</h2>
            </div>
            <div>
                <input type="search" name="" id="" className="bg-gray-100 ml-8 mt-6 w-50 rounded-md h-10" placeholder="Salad"/>
            </div>
            <div className="nav">
                <ul className="flex ml-15 mr-10">
                    <li className="m-2 mt-8 mr-10 text-gray-500 font-normal text-6">What to cook</li>
                    <li className="m-2 mt-8 mr-10 text-gray-500 font-normal text-6">Recipes</li>
                    <li className="m-2 mt-8 mr-10 text-gray-500 font-normal text-6">Ingredients</li>
                    <li className="m-2 mt-8 mr-10 text-gray-500 font-normal text-6">Occasions</li>
                    <li className="m-2 mt-8 mr-10 text-gray-500 font-normal text-6">About Us</li>
                </ul>
            </div>
            <div className="flex">
                <button className="bg-pink-100 w-40 h-10 mt-5 rounded-xl text-pink-500 font-medium">Your Recipe Box</button>
                <img src="../public/img/avt.png" alt="" className="ml-4 w-10 h-10 mt-5"/>
            </div>
        </div>
        </>
    )
}
export default Header
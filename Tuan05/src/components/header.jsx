function Header() {
    return(
        <>
        <div className="inline-flex border-b-1 w-full border-gray-200">
            <div className="flex ml-20">
                <img src="../public/img/logoshop.png" alt="" className="w-15 h-15 mt-3"/>
                <h2 className="text-2xl font-bold text-pink-500 mt-6 ml-3">Chefify</h2>
            </div>
            <div class="flex items-center space-x-2 bg-gray-100 p-2 rounded-xl h-10 mt-5 ml-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15z" />
                </svg>
                <input type="text" placeholder="" class="bg-transparent outline-none text-gray-700" />
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
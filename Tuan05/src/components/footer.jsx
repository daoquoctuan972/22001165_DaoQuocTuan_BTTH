function Footer(){
    return(
    <>
        <div className="flex bg-slate-900 w-full h-80 justify-self-center">
            <div className="text-white w-200 ml-15 text-sm mt-8">
                <p className="font-bold mt-1">About us</p>
                <p className="pr-70 mt-5">Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                <div className="flex mt-5">
                    <input type="text" className="rounded-lg w-100 h-9 bg-white" placeholder="Enter your email"/>
                    <button className="bg-pink-500 w-15 h-9 rounded-lg ml-4 text-base">Send</button>
                </div>
                <div className="flex mt-16">
                    <img src="../public/img/logo_white.png" alt="" className="w-13 h-13"/>
                    <p className="text-white font-extrabold text-2xl ml-2 mt-2">Chefify</p>
                    <div className="flex text-xs ml-6 mt-5">
                        <p>2023 Chefify Company</p>
                        <p className="ml-7">Terms of Services | Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-white text-sm">
                <div>
                    <h4 className="font-bold">Learn more</h4>
                    <ul>
                        <li className="mt-3">Our cooks</li>
                        <li className="mt-3">See our Features</li>
                        <li className="mt-3">FAQ</li>
                    </ul>
                </div>
                <div className="mt-11">
                    <h4 className="font-bold">Shop</h4>
                    <ul>
                        <li className="mt-3">Gift Subscription</li>
                        <li className="mt-3">Send Us Feedback</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-white text-sm ml-50">
                <h4 className="font-bold">Recipes</h4>
                <ul>
                    <li className="mt-3">What to cook this week</li>
                    <li className="mt-3">Pasta</li>
                    <li className="mt-3">Dinner</li>
                    <li className="mt-3">Healthy</li>
                    <li className="mt-3">Vegetarian</li>
                    <li className="mt-3">Vegan</li>
                    <li className="mt-3">Christmas</li>
                </ul>
            </div>
        </div>
    </>
    )
}
export default Footer
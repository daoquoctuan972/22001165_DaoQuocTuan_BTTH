import "../layout/layout.css"
function LayoutAdmin(){
    return(
        <>
            <div className="container">
                <div className="header border-b border-gray-300 flex">
                    <h2 className="text-[rgb(240,77,134)] font-bold text-2xl">Dashboard</h2>
                    <div className="w-full justify-items-end">
                        <div className="flex place-items-center">
                            <input type="text" className="bg-[url('/img/Search.png')] bg-no-repeat pl-5 h-9 w-60 rounded-lg bg-gray-100" placeholder="Search..." im/>
                            <img src="/img/Bell 1.png" alt=""  className="ml-3"/>
                            <img src="/img/Question 1.png" alt=""  className="ml-3"/>
                            <img src="/img/Avatar 313.png" alt="" width={'45px'} height={'25px'} className="ml-3"/>
                        </div>
                    </div>  
                </div>
                <div className="menu border-e border-gray-300 justify-content-center">
                    <img src="/img/Image 1858.png" alt="" />
                    <ul className="mt-5 mb-5">
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-white bg-[rgb(245,76,135)] text-gray-600 font-semibold">
                            <img src="/img/Squares four 1.png" alt="" className="mr-2"/>
                            Dashboard
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Folder.png" alt="" className="mr-2"/>
                            Projects
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Groups.png" alt="" className="mr-2"/>
                            Teams
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Pie chart.png" alt="" className="mr-2"/>
                            Analytics
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Chat.png" alt="" className="mr-2"/>
                            Messages
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Code.png" alt="" className="mr-2"/>
                            Integrations
                        </li>
                    </ul>
                    <div className="mt-5 place-items-center bg-[rgb(240,246,255)] rounded-lg p-6">
                        <img src="/img/Group.png" alt="" />
                        <button className="rounded border-1 border-[rgb(110,142,184)] mt-5 text-[rgb(110,142,184)] rounded-lg h-9 w-70">Try now</button>
                    </div>
                </div>
                <div className="content">
                    <div className="overview">
                        <div className="flex">
                            <img src="/img/Squares four 1.png" alt="" className="mr-2" height={'20px'}/>
                            <h2 className="font-bold text-xl">Overview</h2>
                        </div>
                        <div className="flex mt-3">
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(255,240,245)] mr-5 p-5">      
                                <h3 className="font-bold font-2xl">Turnover</h3>
                                <h1>$92,405</h1>
                                <p></p>
                            </div>
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(240,246,255)] mr-5 p-5">
                                <h3 className="font-bold font-2xl">Profit</h3>
                                <h1>$32,218</h1>
                                <p></p>
                            </div>
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(240,246,255)] mr-5 p-5">
                                <h3 className="font-bold font-2xl">New customer</h3>
                                <h1>298</h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="flex">
                            <img src="/img/File text 1.png" alt="" className="mr-2"/>
                            <h2 className="font-bold text-xl">Detailed report</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LayoutAdmin
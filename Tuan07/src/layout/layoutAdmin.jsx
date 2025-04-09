import "../layout/layout.css"
import ListUsers from "../user/ListUsers"
import AddUser from "../user/AddUser"
import { useState } from "react";
function LayoutAdmin({ onSave }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleAdd = (newUser) => {
        onSave(newUser);
        setIsOpen(false);
    };
    return (
        <>
            <div className="container w-full">
                <div className="header border-b border-gray-300 flex w-full">
                    <h2 className="text-[rgb(240,77,134)] font-bold text-2xl place-items-center">Dashboard</h2>
                    <div className="w-full justify-items-end">
                        <div className="flex place-items-center">
                            <input type="text" className="bg-[url('/img/Search.png')] bg-center bg-left bg-no-repeat pl-5 h-10 w-80 rounded-lg bg-gray-100" placeholder="Search..." im />
                            <img src="/img/Bell 1.png" alt="" className="ml-3" />
                            <img src="/img/Question 1.png" alt="" className="ml-3" />
                            <img src="/img/Avatar 313.png" alt="" width={'45px'} height={'25px'} className="ml-3" />
                        </div>
                    </div>
                </div>
                <div className="menu border-e border-gray-300 justify-content-center">
                    <img src="/img/Image 1858.png" alt="" />
                    <ul className="mt-5 mb-5">
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-white bg-[rgb(245,76,135)] text-gray-600 font-semibold">
                            <img src="/img/Squares four 1.png" alt="" className="mr-2" />
                            Dashboard
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Folder.png" alt="" className="mr-2" />
                            Projects
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Groups.png" alt="" className="mr-2" />
                            Teams
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Pie chart.png" alt="" className="mr-2" />
                            Analytics
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Chat.png" alt="" className="mr-2" />
                            Messages
                        </li>
                        <li className="flex rounded-lg mb-3 h-10 place-items-center text-gray-600 font-semibold">
                            <img src="/img/Code.png" alt="" className="mr-2" />
                            Integrations
                        </li>
                    </ul>
                    <div className="mt-5 place-items-center bg-[rgb(240,246,255)] rounded-lg p-6 mt-20">
                        <img src="/img/Group.png" alt="" />
                        <p className="text-center font-bold text-2xl mt-2">V2.0 is available</p>
                        <button className="rounded border-1 border-[rgb(110,142,184)] mt-5 text-[rgb(110,142,184)] rounded-lg h-9 w-70 bg-white" id="try">Try now</button>
                    </div>
                </div>
                <div className="content">
                    <div className="overview">
                        <div className="flex">
                            <img src="/img/Squares four 1.png" alt="" className="mr-2" height={'20px'} />
                            <h2 className="font-bold text-xl">Overview</h2>
                        </div>
                        <div className="flex mt-3">
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(255,240,245)] mr-5 p-5">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold">Turnover</h3>
                                        <h1 className="font-bold text-2xl mt-2">$92,405</h1>
                                    </div>
                                    <img src="/img/Button 1509.png" alt="" className="w-10 h-10" />
                                </div>
                                <div className="flex mt-8">
                                    <p className="text-green-600 mr-1 font-bold">^ 5.39% </p> <p>period of change</p>
                                </div>
                            </div>
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(240,246,255)] mr-5 p-5">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold">Profit</h3>
                                        <h1 className="font-bold text-2xl mt-1">$32,218</h1>
                                    </div>
                                    <img src="/img/Button 1529.png" alt="" className="w-10 h-10" />
                                </div>
                                <div className="flex mt-8">
                                    <p className="text-green-600 mr-1 font-bold">^ 5.39% </p> <p>period of change</p>
                                </div>
                            </div>
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(240,246,255)] mr-5 p-5">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold">New customer</h3>
                                        <h1 className="font-bold text-2xl mt-1">298</h1>
                                    </div>
                                    <img src="/img/Button 1530.png" alt="" className="w-10 h-10" />
                                </div>
                                <div className="flex mt-8">
                                    <p className="text-green-600 mr-1 font-bold">^ 6.84% </p> <p>period of change</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail mt-8 w-full">
                        <div className="flex">
                            <img src="/img/File text 1.png" alt="" className="mr-2 w-7 h-8" />
                            <h2 className="font-bold text-xl">Detailed report</h2>
                            <div className="flex justify-end w-5/6">
                                <button className="border border-[rgb(245,76,135)] w-30 flex items-center text-[rgb(245,76,135)] justify-center rounded-lg h-10 place-items-center mr-3" id="down-up" onClick={() => setIsOpen(true)}><img src="/img/Download.png" alt="" className="h-5 w-5 mr-2" /> Import</button>
                                <button className="border border-[rgb(245,76,135)] w-30 flex items-center text-[rgb(245,76,135)] justify-center rounded-lg h-10 place-items-center" id="down-up"><img src="/img/Move up.png" alt="" className="h-5 w-5 mr-2" /> Export</button>

                            </div>
                        </div>
                        <div className="mt-4">
                            <ListUsers></ListUsers>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <AddUser
                        onClose={() => setIsOpen(false)}
                        onSave={handleAdd}
                    />
                )}
            </div>
        </>
    )
}
export default LayoutAdmin
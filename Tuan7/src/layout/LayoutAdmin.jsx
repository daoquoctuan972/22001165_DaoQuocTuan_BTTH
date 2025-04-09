import { useState, useEffect } from "react"
import "../layout/LayoutAdmin.css"
import axios from "axios";
import ListUser from "../components/ListUser"

function LayoutAdmin() {
    const [overview, setOverview] = useState([]);

    useEffect(() => {
        const url = 'https://mocki.io/v1/fe1e55c6-0049-4e3d-8e7d-a1aa3dbb4d7f';

        axios.get(url)
            .then((response) => {
                setOverview(response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi fetch dữ liệu bằng axios:", error);
            });
    }, []);

    const item1 = overview.find(item => item.id === 1) || {};
    const item2 = overview.find(item => item.id === 2) || {};
    const item3 = overview.find(item => item.id === 3) || {};

    return (
        <>
            <div className="container">
                <div className="header border-b border-gray-300 flex">
                    <h2 className="text-[rgb(240,77,134)] font-bold text-2xl">Dashboard</h2>
                    <div className="w-full justify-items-end">
                        <div className="flex place-items-center justify-end">
                            <input type="text" className="bg-[url('/img/Search.png')] bg-left bg-center bg-no-repeat pl-5 h-9 w-60 rounded-lg bg-gray-100" placeholder="Search..." im />
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
                    <div className="mt-5 place-items-center bg-[rgb(240,246,255)] rounded-lg p-6">
                        <img src="/img/Group.png" alt="" />
                        <button className="rounded border-1 border-[rgb(110,142,184)] mt-5 text-[rgb(110,142,184)] rounded-lg h-9 w-70">Try now</button>
                    </div>
                </div>
                <div className="content">
                    <div className="overview">
                        <div className="flex">
                            <img src="/img/Squares four 1.png" alt="" className="mr-2" height={'20px'} />
                            <h2 className="font-bold text-xl">Overview</h2>
                        </div>
                        <div className="flex mt-3">
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(255,240,245)] mr-5 p-5" key={item1.id}>
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold">{item1.name}</h3>
                                        <h1 className="font-bold text-2xl mt-2">{item1.total}</h1>
                                    </div>
                                    <img src="/img/Button 1509.png" alt="" className="w-10 h-10" />
                                </div>
                                <div className="flex mt-8">
                                    <p className="text-green-600 mr-1 font-bold">^{item1.rate}</p> <p>period of change</p>
                                </div>
                            </div>
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(240,246,255)] mr-5 p-5" key={item2.id}>
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold">{item2.name}</h3>
                                        <h1 className="font-bold text-2xl mt-1">{item2.total}</h1>
                                    </div>
                                    <img src="/img/Button 1529.png" alt="" className="w-10 h-10" />
                                </div>
                                <div className="flex mt-8">
                                    <p className="text-green-600 mr-1 font-bold">^{item2.rate}</p> <p>period of change</p>
                                </div>
                            </div>
                            <div className="w-1/3 rounded-xl h-40 bg-[rgb(240,246,255)] mr-5 p-5" key={item3.id}>
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold">{item3.name}</h3>
                                        <h1 className="font-bold text-2xl mt-1">{item3.total}</h1>
                                    </div>
                                    <img src="/img/Button 1530.png" alt="" className="w-10 h-10" />
                                </div>
                                <div className="flex mt-8">
                                    <p className="text-green-600 mr-1 font-bold">^{item3.rate}</p> <p>period of change</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail mt-5">
                        <div className="flex">
                            <img src="/img/File text 1.png" alt="" className="mr-2 h-8 w-7" />
                            <h2 className="font-bold text-xl">Detailed report</h2>
                            <div className="flex justify-end w-5/6">
                                <button className="border border-[rgb(245,76,135)] w-30 flex items-center text-[rgb(245,76,135)] justify-center rounded-lg h-10 place-items-center mr-3" id="down-up"><img src="/img/Download.png" alt="" className="h-5 w-5 mr-2" /> Import</button>
                                <button className="border border-[rgb(245,76,135)] w-30 flex items-center text-[rgb(245,76,135)] justify-center rounded-lg h-10 place-items-center" id="down-up"><img src="/img/Move up.png" alt="" className="h-5 w-5 mr-2" /> Export</button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <ListUser></ListUser>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LayoutAdmin
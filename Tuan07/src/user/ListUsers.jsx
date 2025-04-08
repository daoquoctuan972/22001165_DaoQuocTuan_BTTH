import axios from "axios"
import { useEffect, useState } from "react";

const USERS_PER_PAGE = 6;

function ListUsers() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentAvatar, setCurrentAvatar] = useState(1);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((req) => setUsers(req.data))
            .catch(console.error)
    }, [])

    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    const selectedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);
    const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleAvatarNext = () => {
        setCurrentAvatar(currentAvatar + 1)
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    return (
        <>
            <div className="">
                <table className="w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr className="text-gray-500 h-13">
                            <th className="text-left px-6 py-3"><input type="checkbox" name="" id="" /></th>
                            <th className="text-left px-6 py-3">CUSTOMER NAME</th>
                            <th className="text-left px-6 py-3">COMPANY</th>
                            <th className="text-left px-6 py-3">ORDER VALUE</th>
                            <th className="text-left px-6 py-3">ORDERDATE</th>
                            <th className="text-left px-6 py-3">STATUS</th>
                            <th className="text-left px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedUsers.map((user) => (
                            <tr key={user.id} className="border border-gray-100 h-14 text-sm px-6 py-2">
                                <td className="px-6 py-2"><input type="checkbox" name="" id="" /></td>
                                <td className="flex place-items-center gap-3 mt-3 font-bold"><img src={"/img/Avatar (" + user.id + ").png"} alt="" className="h-8 w-8" />{user.name}</td>
                                <td>{user.company.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td><img src="/img/create.png" alt="" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex mt-4 gap-4 w-full place-items-center">
                    <div>
                        <p>{users.length} results</p>
                    </div>
                    <div className="w-5/6 flex  place-items-center">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border-0 text-gray-500"
                        >
                            {"<"}
                        </button>

                        {[...Array(totalPages)].map((_, index) => {
                            const pageNum = index + 1;
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`h-8 w-8 rounded-2xl mr-3 text-gray-500 place-items-center text-sm ${pageNum === currentPage
                                        ? "bg-[rgb(245,76,135)] text-white"
                                        : "hover:bg-gray-200"
                                        }`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 border-0 text-gray-500"
                        >
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}
export default ListUsers
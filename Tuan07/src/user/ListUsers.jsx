import { useEffect, useMemo, useState } from "react";
import usersData from "../data/data.json"
import { useNavigate } from "react-router-dom";

const USERS_PER_PAGE = 6;

function ListUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(usersData);
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); 

    const handleEditClick = (user) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const handleSaveEdit = () => {
        const updated = users.map((u) =>
            u.id === editingUser.id ? editingUser : u
        );
        setUsers(updated);
        setIsModalOpen(false);
    };

    const selectedUsers = useMemo(() => {
        const startIndex = (currentPage - 1) * USERS_PER_PAGE;
        return users.slice(startIndex, startIndex + USERS_PER_PAGE);
    }, [users, currentPage]);
    const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

    useEffect(() => {
        const pageUserIds = selectedUsers.map((user) => user.id);
        const checkedPageIds = selectedRows.filter(id => pageUserIds.includes(id));
        setIsAllSelected(checkedPageIds.length === pageUserIds.length && pageUserIds.length > 0);
    }, [selectedRows, selectedUsers]);

    const handleSelectAll = () => {
        const pageUserIds = selectedUsers.map((user) => user.id);

        if (isAllSelected) {
            setSelectedRows(selectedRows.filter((id) => !pageUserIds.includes(id)));
        } else {
            const newSelected = [...new Set([...selectedRows, ...pageUserIds])];
            setSelectedRows(newSelected);
        }

        setIsAllSelected(!isAllSelected);
    };

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
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
                            <th className="text-left px-6 py-3"><input type="checkbox" name="" id="" checked={isAllSelected} onChange={handleSelectAll} /></th>
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
                            <tr key={user.id} className="border border-gray-100 h-14 text-sm py-2" onClick={() => navigate(`/user/${user.id}`)}> 
                                <td className="px-6 py-2"><input type="checkbox" name="" id="" checked={selectedRows.includes(user.id)} onChange={() => handleSelectRow(user.id)} /></td>
                                <td className="px-6 flex items-center gap-3 font-bold mt-3"><img src={user.avatar} alt="" className="h-8 w-8" />{user.name}</td>
                                <td className="px-6">{user.company}</td>
                                <td className="px-6">{user.ordervalue}</td>
                                <td className="px-6">{user.orderdate}</td>
                                <td className="text-center">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold
                                                ${user.status === "New" && "bg-blue-100 text-blue-500"}
                                                ${user.status === "In-progress" && "bg-yellow-100 text-yellow-600"}
                                                ${user.status === "Completed" && "bg-green-100 text-green-600"}
                                                `}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6"><img src="/img/create.png" alt="" onClick={() => handleEditClick(user)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex mt-4 gap-4 w-full place-items-center justify-between">
                    <div>
                        <p>{users.length} results</p>
                    </div>
                    <div className="flex place-items-center justify-end">
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
                {isModalOpen && editingUser && (
                    <div className="fixed inset-0 bg-black/20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl shadow-xl w-[400px]">
                            <h2 className="text-xl font-bold mb-4">Edit User</h2>
                            <div className="flex flex-col gap-3">
                                <input
                                    className="border rounded p-2"
                                    value={editingUser.name}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, name: e.target.value })
                                    }
                                    placeholder="Name..."
                                />
                                <input
                                    className="border rounded p-2"
                                    value={editingUser.company}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, company: e.target.value })
                                    }
                                    placeholder="Company..."
                                />
                                <input
                                    className="border rounded p-2"
                                    value={editingUser.ordervalue}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, ordervalue: e.target.value })
                                    }
                                    placeholder="Order Value..."
                                />

                                <div className="flex justify-end gap-2 mt-4">
                                    <button
                                        className="px-4 py-2 bg-gray-300 rounded"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                        onClick={() => handleSaveEdit()}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    );
}
export default ListUsers
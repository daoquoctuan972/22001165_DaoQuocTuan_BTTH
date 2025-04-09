import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";

export default function AddUserModal({ isOpen, onClose, onAdd }) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        ordervalue: "",
        orderdate: "",
        status: "New",
        avatar: "/img/Avatar 313.png",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/users", formData);
            onAdd(res.data);
            onClose();
        } catch (error) {
            console.error("Lỗi khi thêm user:", error);
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-bold text-gray-900 mb-4">
                                    Thêm người dùng mới
                                </Dialog.Title>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
                                    <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
                                    <input name="ordervalue" type="number" placeholder="Order Value" value={formData.ordervalue} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
                                    <input name="orderdate" type="text" placeholder="Order Date" value={formData.orderdate} onChange={handleChange} className="w-full border rounded px-3 py-2" required />

                                    <select name="status" value={formData.status} onChange={handleChange} className="w-full border rounded px-3 py-2">
                                        <option value="New">New</option>
                                        <option value="In-progress">In-progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>

                                    <div className="flex justify-end gap-3 pt-4">
                                        <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Hủy</button>
                                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Thêm</button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

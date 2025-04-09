import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function EditUserModal({ isOpen, onClose, user, onSave }) {
    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
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
                    <div className="fixed inset-0 bg-black/30 bg-opacity-25" />
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
                                    Edit user's profile
                                </Dialog.Title>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block mb-1 font-semibold">Customer Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-semibold">Company</label>
                                        <input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-semibold">Order Value</label>
                                        <input
                                            name="orderValue"
                                            type="number"
                                            step="0.01"
                                            value={formData.orderValue}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-semibold">Order Date</label>
                                        <input
                                            name="orderDate"
                                            type="date"
                                            value={formData.orderDate}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-semibold">Status</label>
                                        <select
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        >
                                            <option value="New">New</option>
                                            <option value="In-progress">In-progress</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </div>

                                    <div className="flex justify-end gap-3 pt-4">
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-gray-300 rounded"
                                            onClick={onClose}
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-pink-500 text-white rounded"
                                        >
                                            Lưu
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

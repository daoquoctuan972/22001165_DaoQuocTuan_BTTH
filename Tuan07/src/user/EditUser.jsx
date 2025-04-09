
function EditUserModal({ user, onClose, onSave }) {
    const [editedUser, setEditedUser] = useState(user);

    const handleChange = (field, value) => {
        setEditedUser(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        onSave(editedUser);
    };

    useEffect(() => {
        setEditedUser(user);
    }, [user]);

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[400px]">
                <h2 className="text-xl font-bold mb-4">Edit User</h2>
                <div className="flex flex-col gap-3">
                    <input className="border rounded p-2" value={editedUser.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Name..." />
                    <input className="border rounded p-2" value={editedUser.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Company..." />
                    <input className="border rounded p-2" value={editedUser.ordervalue} onChange={(e) => handleChange("ordervalue", e.target.value)} placeholder="Order Value..." />
                    <select className="border rounded p-2" value={editedUser.status} onChange={(e) => handleChange("status", e.target.value)}>
                        <option value="New">New</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <div className="flex justify-end gap-2 mt-4">
                        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUserModal;

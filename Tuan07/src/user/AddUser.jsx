import React, { useState } from "react";

const AddUser = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    ordervalue: "",
    orderdate: "",
    avatar: null,
    status: "New",
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        avatar: file,
      }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.company || !formData.ordervalue || !formData.orderdate) {
      alert("Vui lòng điền đầy đủ các thông tin bắt buộc.");
      return;
    }
    onSave(formData); 
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[450px]">
        <h2 className="text-xl font-bold mb-4">Thêm người dùng</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            className="border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Công ty"
            className="border p-2 rounded"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="number"
            name="ordervalue"
            placeholder="Giá trị đơn hàng"
            className="border p-2 rounded"
            value={formData.ordervalue}
            onChange={handleChange}
          />
          <input
            type="date"
            name="orderdate"
            className="border p-2 rounded"
            value={formData.orderdate}
            onChange={handleChange}
          />

          <input
            type="file"
            accept="image/*"
            className="border p-2 rounded"
            onChange={handleAvatarChange}
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Avatar preview"
              className="w-20 h-20 object-cover rounded-full"
            />
          )}

          <select
            name="status"
            className="border p-2 rounded"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>

          <div className="flex justify-end gap-2 mt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-pink-500 text-white rounded"
              onClick={handleSave}
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

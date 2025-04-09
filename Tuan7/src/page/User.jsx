import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
NavLink

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://mocki.io/v1/7fc0f947-fbef-4837-875e-205b5146668b")
      .then((res) => {
        const foundUser = res.data.find((u) => String(u.id) === id);
        setUser(foundUser || {});
      });
  }, [id]);
  console.log({user})
  
  if (!user) {
    return <div className="text-center mt-10 text-xl">User not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-200 mt-4 rounded-xl shadow-lg space-y-4">
      <div className="flex items-center space-x-4">
        <img src={user.avatar} alt="Avatar" className="h-15 w-15 rounded-full object-cover" />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-1 mb-1">Company: <b>{user.company}</b></p>
        <h2 className="text-xl font-semibold">Order history</h2>
        <p className="mt-1 mb-1">Order Value: <b>${user.ordervalue}</b></p>
        <p className="mt-1 mb-2">Order Date: <b>{user.orderdate}</b></p>
        <div className="flex w-full justify-between">
          <span
            className={`px-2 py-1 rounded-full text-sm font-semibold w-25 h-7 text-center
              ${user.status === "New" && "bg-blue-100 text-blue-500"}
              ${user.status === "In-progress" && "bg-yellow-100 text-yellow-600"}
              ${user.status === "Completed" && "bg-green-100 text-green-600"}
              `}
          >
            {user.status}
          </span>
          <NavLink to={"/home"}>
            <button className="bg-red-400 w-30 h-7 rounded-lg justify-end text-white">Back to home</button>
          </NavLink>
        </div>


      </div>
    </div>
  );
}

export default UserDetail;

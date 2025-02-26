import { Search } from "lucide-react";
import { Button } from "../components/ui/button.jsx";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex items-center text-pink-500 font-bold text-xl">
          <span className="mr-2">👩‍🍳</span> Chefify
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
        </div>
      </div>

      <nav className="hidden md:flex gap-6 text-gray-600">
        <a href="#" className="hover:text-pink-500">What to cook</a>
        <a href="#" className="hover:text-pink-500">Recipes</a>
        <a href="#" className="hover:text-pink-500">Ingredients</a>
        <a href="#" className="hover:text-pink-500">Occasions</a>
        <a href="#" className="hover:text-pink-500">About Us</a>
      </nav>

      <div className="flex items-center gap-4">
        <Button className="bg-pink-100 text-pink-500 rounded-full px-4 py-2 hover:bg-pink-200">
          Your Recipe Box
        </Button>

        <img
          src="/avatar.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-pink-500"
        />
      </div>
    </header>
  );
}

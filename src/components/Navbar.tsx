import { useState } from 'react';
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";

const Navbar = ({ setShowCart}: any) => {

  const [searchItem, setSearchItem] = useState('');

  const cartCount = useAppSelector((state) => state.cartReducer.length);

  const handleSearchProduct = (e: any) => {
    e.preventDefault();
    console.log(searchItem);
  }

  return ( 
    <div className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <GiHamburgerMenu className="sm:hidden text-[26px]" />
        <Link href="/" className="text-4xl font-semibold hover:text-accent">
          Logo
        </Link>

        <form 
          className="w-1/2 mx-auto"
          onSubmit={handleSearchProduct}
        >
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </form>

        <div className="flex gap-6 text-[26px]">
          <div 
            className="relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >

            <AiOutlineShoppingCart />

            <div className="absolute top-[-15px] right-[-10px] bg-red-600
              w-[25px] h-[25px] rounded-full text-white text-[14px] grid
              place-items-center"
            >
              {cartCount}
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;
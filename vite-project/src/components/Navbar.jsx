import LoginFlex from "../utils/LoginFlex";
import ButtonCustom from "./ButtonCustom";

/* eslint-disable react/prop-types */
export default function Navbar() {

  return (

      <nav className="flex h-10 items-center justify-between">
        <ul className="flex items-center mr-4">
          <li className="px-2"><a className="text-xl text-white font-semibold" href="#">Home</a></li>
          <li className="px-2"><a className="text-xl text-white font-semibold" href="#">Store</a></li>
          <li className="px-2"><a className="text-xl text-white font-semibold" href="#">Business</a></li>
        </ul>
        <ButtonCustom onClick={LoginFlex} className="bg-[#20bf6b] hover:bg-[#26de81] text-white px-1 rounded-lg">account</ButtonCustom>
        </nav>
      
    )
}
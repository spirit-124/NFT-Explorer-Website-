import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavbarItem = ({ tittle, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{tittle}</li>;
};
const Navbar = () => {
  return (
    <nav className="flex w-full md:justify-center justify-between items-center p-4 ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="Logo Image" className=" w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-inittial ">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} tittle={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

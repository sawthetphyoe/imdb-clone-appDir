import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-3 py-4 max-w-7xl sm:mx-auto px-4 sm:px-8">
      <div className="flex ">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-7">
        <DarkModeSwitch />
        <Link href="/">
          <h2>
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-md hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

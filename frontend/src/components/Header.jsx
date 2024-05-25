import Logo from "./Logo";
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { BsCartDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="h-16 shadow-lg bg-white">
            <div className="h-full container mx-auto flex items-center justify-between px-4 ">
                <div className="">
                   <Link to={"/"}>
                     <Logo/>
                   </Link>
                </div>

                <div className="hidden lg:flex items-center w-full justify-around max-w-sm border rounded-full focus-within:shadow-md pl-4">
                    <input type="text" placeholder="search product..." className="w-full outline-none"/>
                    <div className="text-lg min-w-[50px] h-8 bg-red-600 text-white flex items-center justify-center rounded-r-full">
                        <CiSearch/>
                    </div>
                </div>

                <div className="flex gap-6 items-center justify-center">
                    <div className="text-2xl cursor-pointer">
                        <FaCircleUser/>
                    </div>
                    <div className="text-2xl relative">
                        <span><BsCartDashFill/></span>
                        <div className="bg-red-600 text-white w-5 h-5 p-1 rounded-full flex items-center justify-center absolute  -top-2 -right-3">
                            <p className="text-sm">0</p>
                        </div>
                    </div>

                    <div>
                        <Link to={"login"} className="ml-4 px-3 py-1 bg-red-500 rounded-full text-white hover:bg-red-700">Login</Link>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;
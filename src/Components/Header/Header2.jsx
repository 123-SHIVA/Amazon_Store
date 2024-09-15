import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import eStoreLogo from "../../images/esStoreLogo.webp"

function Header2() {
    return (
        <div className="flex justify-between items-center py-5 px-5 md:px-14 xl:px-44 shadow-md sticky top-0 bg-white z-50">
            <div className="w-60 mr-16">
                <Link to="/">
                    <img
                        src={eStoreLogo}
                        alt="Logo"
                        />
                </Link>
            </div>
            <div className="flex items-center">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex gap-3">
                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex text-sm font-semibold text-stone-700 items-center">
                            {renderNavItems()}
                        </ul>

                        <Link to="/register" className="bg-red-600 py-2 px-4 text-sm text-white font-semibold hidden sm:block  hover:animate-bounce">
                            Apply Now

                        </Link>

                        {/* Hamburger Menu Button */}
                        <label htmlFor="my-drawer" className="text-3xl text-black drawer-button lg:hidden">
                            <GiHamburgerMenu />
                        </label>

                    </div>

                    {/* Drawer Navigation */}
                    <div className="drawer-side">
                        <ul className="menu w-[100vw] bg-white text-black lg:bg-transparent py-10 gap-3 text-sm  font-semibold min-h-full ">
                            <label htmlFor="my-drawer" className="drawer-overlay border flex justify-end px-5 text-2xl"><IoClose /></label>
                            {renderNavItems()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function renderNavItems() {
    return (
        <>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/"} className={({ isActive }) => (`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Home</NavLink></li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/about"} className={({ isActive }) => (`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >About Us</NavLink></li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/opportunity"} className={({ isActive }) => (`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Opportunity</NavLink></li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/contact-us"} className={({ isActive }) => (`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Contact Us</NavLink></li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/service"} className={({ isActive }) => (`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Service</NavLink></li>
            
            <div className="dropdown dropdown-hover mr-5 ">
                
                <li tabIndex={0} role="button" className="px-3  "><NavLink to={"/register"} target="_blank" className={({ isActive }) => (`${isActive && "text-red-600 font-bold "} hover:text-red-600 flex gap-3 items-center`)}>Store <IoIosArrowDown/></NavLink></li>
                <ul tabIndex={0} className="dropdown-content menu z-[1] w-52 p-2 shadow ">
                    <div className="p-2 border-t-2 my-2 border-red-600 bg-white relative">
                        <div className="w-3 h-3 border-t-2 border-l-2 bg-white border-red-500 rotate-45 absolute -top-2 left-3"></div>
                        <Link to="/login" >Login</Link>

                    </div>
                    
                </ul>
            </div>
        </>
    );
}

export default Header2;

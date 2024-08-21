import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function Header2() {
    return (
        <div className="flex justify-between items-center py-5 px-5 md:px-14 xl:px-44 shadow-md sticky top-0 bg-white z-50">
            <div className="w-60 mr-16">
                <img
                    src="https://logisticsamazone.in/wp-content/uploads/2023/07/amazon-removebg-preview-removebg-preview-1-removebg-preview-1.png"
                    alt="Logo"
                />
            </div>
            <div className="flex items-center">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex gap-3">
                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex text-sm font-semibold text-stone-700 items-center">
                            {renderNavItems()}
                        </ul>

                        <button className="bg-red-600 py-2 px-4 text-white font-bold  hover:animate-bounce">
                            Apply Now
                        </button>

                        {/* Hamburger Menu Button */}
                        <label htmlFor="my-drawer" className="text-3xl text-black drawer-button lg:hidden">
                            <GiHamburgerMenu />
                        </label>

                    </div>

                    {/* Drawer Navigation */}
                    <div className="drawer-side">
                        <ul className="menu w-[100vw] bg-white text-black lg:bg-transparent py-10 gap-3 text-sm  font-semibold min-h-full ">
                        <label htmlFor="my-drawer" className="drawer-overlay border flex justify-end px-5 text-2xl"><IoClose/></label>
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
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/"} className={({isActive})=>(`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Home</NavLink></li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/about"} className={({isActive})=>(`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >About Us</NavLink></li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/opportunity"} className={({isActive})=>(`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Opportunity</NavLink></li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/contact-us"} className={({isActive})=>(`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Contact Us</NavLink></li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted "><NavLink to={"/service"} className={({isActive})=>(`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Service</NavLink></li>
            <li className="px-3  "><NavLink to={"/store"} className={({isActive})=>(`${isActive && "text-red-600 font-bold "} hover:text-red-600 `)}  >Store</NavLink></li>
           
        </>
    );
}

export default Header2;

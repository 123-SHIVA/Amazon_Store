import { GiHamburgerMenu } from "react-icons/gi";

function Header2() {
    return (
        <div className="flex justify-between items-center py-5 px-5 md:px-14 xl:px-48 shadow-md" >
            <div className="w-60 mr-16"><img src="https://logisticsamazone.in/wp-content/uploads/2023/07/amazon-removebg-preview-removebg-preview-1-removebg-preview-1.png" /></div>
            <div className="flex items-center drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="">
                   
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>

                <ul className="hidden lg:flex text-sm font-semibold text-stone-700 items-center">
                    <li className="px-4 border-r-2 border-r-black border-dotted ">Home</li>
                    <li className="px-4 border-r-2 border-r-black border-dotted ">About US</li>
                    <li className="px-4 border-r-2 border-r-black border-dotted ">Opportunity</li>
                    <li className="px-4 border-r-2 border-r-black border-dotted ">Contact US</li>
                    <li className="px-4 border-r-2 border-r-black border-dotted ">Service</li>
                    <li className="px-4">Store</li>
                </ul>
                <div className="px-4 text-sm hidden sm:inline-block"><button className="bg-red-600 py-2 px-4 text-white font-bold">Apply Now</button></div>
                


                <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className=" lg:hidden text-3xl text-black drawer-button"><GiHamburgerMenu /></label>
                    </div>


            </div>
        </div>
    )
}

export default Header2;
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#171635] w-full">


            <div className="py-28 px-20 flex gap-28 justify-between w-[80%] m-auto ">

                <div className=" w-[40%] flex gap-10">
                <div className=" flex justify-center">
                    <div className="w-52">
                        <img src="https://logisticsamazone.in/wp-content/uploads/2023/07/tj-removebg-preview-removebg-preview-removebg-preview__1_-removebg-preview-1__1_-removebg-preview-290x300.png" alt="Logo" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <aside className="widget widget_nav_menu">
                        <h3 className="text-white font-bold text-xl first-letter:text-red-600 mb-5">Menu</h3>
                        <ul className="text-xs font-semibold gap-4 text-white flex flex-col" >
                            {renderNavItems()}
                        </ul>
                    </aside>
                </div>
                </div>
               

                <div className=" w-[60%] grid grid-cols-2 gap-10  ">
                    <div className="bg-white text-black p-3 text-xs md:h-44">
                        <h3 className="font-bold my-2 text-sm">HEAD OFFICE</h3>
                        <p>10th Floor, Raheja Mind Space, Building No:9, Opposite, The Westin Hotel Rd, Phase 2, HITEC City, Hyderabad, Telangana 500081.</p>
                    </div>

                    <div className=" flex flex-col  ">
                        <aside>
                            <img src="https://logisticsamazone.in/wp-content/uploads/2024/06/amazon-logistics-logo.webp" alt="Amazon Logistics Logo" />
                        </aside>
                        <p className="text-white mt-4 text-center text-xs">
                            It's been Four years since Four mentors have started with the initiative to contribute towards rural area employment & development. Providing rural populations the opportunity to have experience of digital shopping.
                        </p>
                    </div>
                </div>
                
            </div>


            <div className=" w-full text-center py-4 text-sm text-white border-t  border-t-gray-600 border-b-4 border-b-red-600"> Amazon Store | Powered By [Amazon]</div>
        </footer>
    )
}

function renderNavItems() {
    return (
        <>
            <Link to="/" className=" px-4 border-l-4 hover:text-red-600 hover:border-red-600 ">Home</Link>
            <Link to="/about" className=" px-4 border-l-4  hover:text-red-600 hover:border-red-600 ">About Us</Link>
            <Link to="/opportunity" className="px-4 border-l-4  hover:text-red-600 hover:border-red-600 ">Opportunity</Link>
            <Link to="/contact-us" className="px-4 border-l-4  hover:text-red-600 hover:border-red-600 ">Contact Us</Link>
            <Link to="/service" className="px-4 border-l-4  hover:text-red-600 hover:border-red-600 ">Service</Link>
            <Link to="/store" className="px-4 border-l-4  hover:text-red-600 hover:border-red-600 ">Store</Link>

        </>
    );
}

export default Footer;
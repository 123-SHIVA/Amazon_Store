function Footer()
{
    return(
        <footer className="bg-[#201E43] w-full">


<div className="p-20 w-full flex flex-row flex-wrap justify-between items-start m-auto ">
    <div className="w-[20%] flex justify-center">
        <div className="w-52">
            <img src="https://logisticsamazone.in/wp-content/uploads/2023/07/tj-removebg-preview-removebg-preview-removebg-preview__1_-removebg-preview-1__1_-removebg-preview-290x300.png" alt="Logo"/>
        </div>
    </div>

    <div className="w-[20%] flex justify-center">
        <aside className="widget widget_nav_menu">
            <h5 className="text-white">Menu</h5>
            <ul className="text-sm font-semibold gap-10 text-white items-center">
                {renderNavItems()}
            </ul>
        </aside>
    </div>

    <div className="w-[30%] flex justify-center bg-white text-black p-6">
        <table>
            <tbody>
                <tr>
                    <td >
                        <strong>HEAD OFFICE</strong>
                        <hr className="border-t-2 mx-2 my-2"></hr>
                    </td>

                    
                </tr>
                <tr>
                    <td className="font-semibold">
                        10th Floor, Raheja Mind Space, Building No:9, Opposite, The Westin Hotel Rd, Phase 2, HITEC City, Hyderabad, Telangana 500081.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="w-[30%] flex flex-col justify-center items-center p-6 ">
        <aside>
            <img src="https://logisticsamazone.in/wp-content/uploads/2024/06/amazon-logistics-logo.webp" alt="Amazon Logistics Logo"/>
        </aside>
        <p className="text-white mt-4 text-center">
            It's been Four years since Four mentors have started with the initiative to contribute towards rural area employment & development. Providing rural populations the opportunity to have experience of digital shopping.
        </p>
    </div>
</div>


        <div className=" w-full text-center py-4 text-sm text-white border-t  border-t-gray-600 border-b-4 border-b-red-600"> Amazon Store | Powered By [Amazon]</div>
        </footer>
    )
}

          function renderNavItems() {
    return (
        <>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted ">Home</li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted ">About Us</li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted ">Opportunity</li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted ">Contact Us</li>
            <li className="px-3  lg:border-r-2  border-r-black border-dotted ">Service</li>
            <li className="px-3">Store</li>
           
        </>
    );
}

export default Footer;
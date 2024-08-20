import { FaAmazon , FaPhone} from "react-icons/fa";
import { MdMail , MdOutlineEmail} from "react-icons/md";
import { FaLocationDot , FaRegClock} from "react-icons/fa6";



function Header(){
    return(
        <div className="hidden lg:flex bg-[#201E43]  p-5 text-white justify-between items-center md:px-20 xl:px-48">
            <div className="flex gap-3">
                <div className="bg-red-600 p-1 rounded-full"><FaAmazon/></div>
                <div className="bg-red-600 p-1 rounded-full"><FaLocationDot/></div>
                <div className="bg-red-600 p-1 rounded-full"><MdMail/></div>                
            </div>
            <div className="flex gap-8 text-sm" >
                <div className="flex items-center gap-2">
                    <div className="text-xl font-bold text-red-600 "><FaRegClock/></div>
                    <div className="leading-4">
                        <h3 className="font-semibold">10:00 - 18:00</h3>
                        <p>Mon to Sat</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-red-600 "><MdOutlineEmail/></div>
                    <div className="leading-4">
                        <h3 className="font-semibold">Email Us</h3>
                        <p>info@logisticsamazon.in</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="text-xl font-bold text-red-600 "><FaPhone/></div>
                    <div className="leading-4">
                        <h3 className="font-semibold">Toll Us</h3>
                        <p>1800 2020 014</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Header;
import { FaAmazon , FaPhone} from "react-icons/fa";
import { MdMail , MdOutlineEmail} from "react-icons/md";
import { FaLocationDot , FaRegClock} from "react-icons/fa6";



function Header(){
    return(
        <div className="hidden lg:flex bg-[#201E43]  p-5 text-white justify-between items-center md:px-20 xl:px-48 ">
            <div className="flex gap-3">
                <div className="bg-red-600 p-1 rounded-full hover:bg-transparent hover:text-red-600 transition-all duration-200"><FaAmazon/></div>
                <div className="bg-red-600 p-1 rounded-full hover:bg-transparent hover:text-red-600 transition-all duration-200"><FaLocationDot/></div>
                <div className="bg-red-600 p-1 rounded-full hover:bg-transparent hover:text-red-600 transition-all duration-200"><MdMail/></div>                
            </div>
            <div className="flex gap-8 text-sm" >
                <div className="flex items-center gap-2">
                    <div className="text-xl font-bold text-red-600 hover:animate-bounce"><FaRegClock/></div>
                    <div className="leading-4">
                        <h3 className="font-semibold">10:00 - 18:00</h3>
                        <p>Mon to Sat</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-red-600  hover:animate-bounce "><MdOutlineEmail/></div>
                    <a href="mailto:example@example.com"  className="leading-4">
                        <h3 className="font-semibold">Email Us</h3>
                        <p>example@example.com</p>
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <div className="text-xl font-bold text-red-600  hover:animate-bounce"><FaPhone/></div>
                    <a  href="tel:+1234567890" className="leading-4">
                        <h3 className="font-semibold">Toll Us</h3>
                        <p>123 456 7890</p>
                    </a>
                </div>
               
            </div>
        </div>
    )
}

export default Header;
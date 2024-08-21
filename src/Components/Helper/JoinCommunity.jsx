
import { FaArrowRight } from "react-icons/fa6";

function JoinCommunity()
{
    return(
        <>
         <section className='text-center text-[#54595F] font-bold flex flex-col gap-3'>
                <h4 className=' text-lg text-orange-400'>Join the Community that Caters to Rest of the Billion</h4>
                <h1 className='text-4xl'>We Help You And India Grow</h1>
                <h2 className='text-2xl'>Partner With Us</h2>
                <h4 className='text-lg tracking-[4px]'>Join the largest community​</h4>
                
                <a className='rounded-full bg-orange-400 text-white text-sm py-3  px-6 my-4 w-44 m-auto  flex items-center justify-between '>Register Now <FaArrowRight/></a>
               

            </section>
        
        </>
    )
}

export default JoinCommunity;
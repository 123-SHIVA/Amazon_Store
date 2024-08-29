import logisticLogo from '../../images/esStoreLogo.webp';
import Footer2 from '../Footer/Footer2';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

function Login() {
    const [isApproved, setIsApproved] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        setIsApproved(true);

    }
    return (
        <section className=" h-[100vh] p-5 text-[#757a7f] ">
            <div>
                <img src={logisticLogo} alt='logistic logo' className='w-64 m-auto' />
                <div className='lg:w-[30%] md:w-[60%] max-w-[90%] m-auto  mt-8'>
                    <h1 className='text-3xl text-center text-black font-semibold'>Sign-In</h1>
                    <form onSubmit={handleSubmit} className='text-sm font-semibold'>
                        
                        {/* -----------------error box---------- */}
                        <div className={` transition-all duration-300  my-4 bg-red-600/90 text-white flex justify-between p-2 items-center ${isApproved ? "opacity-100" : "opacity-0"}  `} >Your account has not been approved yet. <RxCross2 onClick={() => setIsApproved(false)} className='text-lg' /></div>

                        <div className='my-5'>
                            <label>Username or Email</label><br />
                            <input type='text' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Password</label><br />
                            <input type='Password' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className=' flex items-center gap-4'>
                            <input type='checkbox' className='checkbox w-5 h-5  border-[2.5px] rounded-sm border-[#90969d] focus:border-blue-500' id='keepMeSignIn' />
                            <label htmlFor='keepMeSignIn' >Keep Me Signed In</label>
                        </div>
                        <div className='text-center my-3'>
                            <input type='submit' value={"Login"} className='p-3  w-[60%] m-auto text-sm text-white rounded-sm hover:bg-sky-400 bg-sky-500' />
                        </div>
                    </form>
                </div>

                <Footer2 />
            </div>
        </section>
    )
}

export default Login;
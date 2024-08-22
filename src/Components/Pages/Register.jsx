import { Link } from 'react-router-dom';
import eStoreLogo from '../../images/esStoreLogo.webp';

function Register()
{
    return (
        <section className=" p-5 text-[#7e858f] flex flex-col items-center">
            <img src={eStoreLogo} alt='e Store Logo' className='w-64' />
            <div className='my-7 lg:w-[30%] md:w-[50%] w-[80%] '>
                <h1 className='text-black text-3xl font-semibold'>Create Account</h1>
                <div className=' text-xs text-black font-semibold '>
                    {/* --------------error box---------------- */}
                        <div></div>

                        <div className='my-5'>
                            <label>First Name</label><br/>
                            <input type='text' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Last Name</label><br/>
                            <input type='text' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>E-mail Address</label><br/>
                            <input type='email' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Mobile Number</label><br/>
                            <input type='text' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>City</label><br/>
                            <input type='text' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Pin code</label><br/>
                            <input type='text' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Country</label><br/>
                            <input type='text' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Password</label><br/>
                            <input type='password' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Confirm Password</label><br/>
                            <input type='password' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='flex gap-3'>
                            <button className='p-3 text-sm text-white w-full rounded-lg hover:bg-sky-400 bg-sky-500'>Register</button>
                            <Link to="/login" className='p-3 text-center text-sm  w-full rounded-lg hover:bg-sky-200 bg-gray-200'>Login</Link>

                        </div>
                       
                    </div>
            </div>

            <div className='text-center font-semibold mt-10 '>
                <h5 className='text-black text-xs'> By continuing, you agree to Amazon’s <Link to="/service" className="text-blue-500"> Conditions of Use</Link>  and <Link to="/service" className="text-blue-500">Privacy Notice.</Link></h5>
                <p className='text-sm mt-3 '>© 1996-2022, Amazon Logistics Estore, Inc. or its affiliates</p>
            </div>
        </section>
    )
}

export default Register
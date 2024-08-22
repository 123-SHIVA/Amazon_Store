import { Link } from 'react-router-dom';
import logisticLogo from '../../images/esStoreLogo.webp';

function Login() {
    return (
        <section className=" h-[100vh] p-5 text-[#757a7f] ">
            <div>
                <img src={logisticLogo} alt='logistic logo' className='w-64 m-auto' />
                <div className='w-[30%] m-auto  mt-8'>
                    <h1 className='text-3xl text-center text-black font-semibold'>Sign-In</h1>
                    <div className='text-sm font-semibold'>
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
                            <button className='p-3  w-[60%] m-auto text-sm text-white rounded-sm hover:bg-sky-400 bg-sky-500'>Login</button>
                        </div>
                    </div>
                </div>

                <div className='text-center font-semibold mt-10 '>
                    <h5 className='text-black text-xs'> By continuing, you agree to Amazon’s <Link to="/service" className="text-blue-500"> Conditions of Use</Link>  and <Link to="/service" className="text-blue-500">Privacy Notice.</Link></h5>
                    <p className='text-sm mt-3 '>© 1996-2022, Amazon Logistics Estore, Inc. or its affiliates</p>
                </div>
            </div>
        </section>
    )
}

export default Login;
import { Link,  useNavigate } from 'react-router-dom';
import eStoreLogo from '../../images/esStoreLogo.webp';
import Footer2 from '../Footer/Footer2';
import { useEffect, useState } from 'react';

function Register()
{
   
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false);

  
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("handle submit");
        if(e.target.password.value!==e.target.confirmPassword.value)
        {
            setIsError(true)
            return;
        }

        let url = 'https://docs.google.com/forms/d/e/1FAIpQLSeW2Mwpir23awjq9GzcqCrdQxJMB6TmfeP_69gP4FMhGkEqGQ/formResponse?'
        
        let formData = new FormData();
        console.log(e.target.firstName.value)
        formData.append("entry.954201680",e.target.firstName.value);
        formData.append('entry.1886365113',e.target.lastName.value)
        formData.append('entry.335443761',e.target.email.value)
        formData.append('entry.1356113406',e.target.mobileNumber.value)

        formData.append('entry.947283670',e.target.city.value)
        formData.append('entry.818372992',e.target.pinCode.value)
        formData.append('entry.1183901722',e.target.country.value)
        formData.append('entry.134860747',e.target.investment.value)
        formData.append('entry.321598628',e.target.password.value)
        formData.append('entry.219340779',e.target.confirmPassword.value)
    
        fetch(url, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(() => {
            navigate('/register-successfully')
           
        })
        .catch(error => {
            console.error("Something went wrong:", error);
                     
        });
    }
    return (
        <section className=" p-5 text-[#7e858f] flex flex-col items-center">
            <img src={eStoreLogo} alt='e Store Logo' className='w-64' />
            <div className='my-7 lg:w-[30%] md:w-[50%] w-[80%] '>
                <h1 className='text-black text-3xl font-semibold'>Create Account</h1>
                <form onSubmit={handleSubmit} className=' text-xs text-black font-semibold '>
                    {/* --------------error box---------------- */}
                    <div className={` transition-all duration-300  my-4 bg-red-600/90 text-white flex justify-between p-2 items-center ${isError ? "opacity-100" : "opacity-0"}  `} >Password is not matched</div>


                        <div className='my-5'>
                            <label>First Name</label><br/>
                            <input type='text' name='firstName' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Last Name</label><br/>
                            <input type='text' name='lastName' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>E-mail Address</label><br/>
                            <input type='email' name='email' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Mobile Number</label><br/>
                            <input type='text' name='mobileNumber' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>City</label><br/>
                            <input type='text' name='city' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Pin code</label><br/>
                            <input type='text' name='pinCode' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Country</label><br/>
                            <input type='text' name='country' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>
                        <div className='my-3'>
                            <label>Investment Amount </label><br/>
                            <input type='text' name='investment' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Password</label><br/>
                            <input type='password' name='password' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Confirm Password</label><br/>
                            <input type='password' name='confirmPassword' required className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='flex gap-3'>
                            <input type='submit' value="Register" className='p-3 text-sm text-white w-full rounded-lg hover:bg-sky-400 bg-sky-500'/>
                            <Link to="/login" className='p-3 text-center text-sm  w-full rounded-lg hover:bg-sky-200 bg-gray-200'>Login</Link>

                        </div>
                       
                    </form>
            </div>

            <Footer2/>

        
        </section>
    )
}

export default Register
import { Link,  useNavigate } from 'react-router-dom';
import eStoreLogo from '../../images/esStoreLogo.webp';
import Footer2 from '../Footer/Footer2';


// https://docs.google.com/forms/d/e/1FAIpQLSdD9tnkNQ-_Qz59RmbglgZiq9gsxHRn97EHr8HejPPCERxJ4A/viewform?usp=pp_url&entry.1951104673=Neha&entry.1927189954=Baghel&entry.1526282246=nehabaghelcs190302@gmail.com&entry.2039390232=9399528945&entry.107078074=Bhopal&entry.1262906429=462003&entry.1651997529=India&entry.1411017782=1000&entry.321598628=Neha@123&entry.1728960141=Neha@123



function Register()
{
   
    const navigate = useNavigate()
    async function handleSubmit(e)
    {
        e.preventDefault();
        console.log("handle submit");

        let url = 'https://docs.google.com/forms/d/e/1FAIpQLSdD9tnkNQ-_Qz59RmbglgZiq9gsxHRn97EHr8HejPPCERxJ4A/formResponse?'
        
        let formData = new FormData();
        console.log(e.target.firstName.value)
        formData.append("entry.1951104673",e.target.firstName.value);
        formData.append('entry.1927189954',e.target.lastName.value)
        formData.append('entry.1526282246',e.target.email.value)
        formData.append('entry.2039390232',e.target.mobileNumber.value)
        formData.append('entry.107078074',e.target.city.value)
        formData.append('entry.1262906429',e.target.pinCode.value)
        formData.append('entry.1651997529',e.target.country.value)
        formData.append('entry.1411017782',e.target.investment.value)
        formData.append('entry.321598628',e.target.password.value)
        formData.append('entry.1728960141',e.target.confirmPassword.value)
    
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
                        <div></div>

                        <div className='my-5'>
                            <label>First Name</label><br/>
                            <input type='text' name='firstName' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Last Name</label><br/>
                            <input type='text' name='lastName' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>E-mail Address</label><br/>
                            <input type='email' name='email' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Mobile Number</label><br/>
                            <input type='text' name='mobileNumber' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>City</label><br/>
                            <input type='text' name='city' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-5'>
                            <label>Pin code</label><br/>
                            <input type='text' name='pinCode' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Country</label><br/>
                            <input type='text' name='country' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>
                        <div className='my-3'>
                            <label>Investment Amount </label><br/>
                            <input type='text' name='investment' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Password</label><br/>
                            <input type='password' name='password' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
                        </div>

                        <div className='my-3'>
                            <label>Confirm Password</label><br/>
                            <input type='password' name='confirmPassword' className='outline-none border border-base-100/50 bg-transparent w-full p-2 my-1 focus:border-b-2 focus:border-b-red-600 transition-all duration-100' />
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
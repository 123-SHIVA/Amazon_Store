import eStoreLogo from '../../images/esStoreLogo.webp';
import Footer2 from '../Footer/Footer2';

function Submission()

{
    return(
        <section className=" p-5 h-[100vh] text-[#7e858f] flex flex-col items-center">
            <img src={eStoreLogo} alt='e Store Logo' className='w-64' />
            <div className=' w-[30%]'>
                <h2 className='text-center text-3xl my-4 text-black'>Create Account</h2>
                <p className='text-sm font-semibold'>Thank you for applying for Amazon Logistics Store We will review your details and send you an email or call letting you know whether your application has been successful or not.</p>
            </div>
            <Footer2/>
        </section>
    )
}

export default Submission;
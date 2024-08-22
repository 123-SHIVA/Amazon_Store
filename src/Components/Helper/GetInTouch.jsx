import getInTouchImg from "../../images/getInTouchImg.jpg"
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



function GetInTouch()
{
    const [isSend, setIsSend] = useState(false);
    const form = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            setIsSend(false);
        },3000)
    })

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(process.env.your_public_id)
  
      emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_ID
      )
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSend(true);
            form.current.reset();
            
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  

    return(
        <>
        <section className='w-[75%] text-[#54595F] m-auto my-12'>
                <h1 className='font-bold text-3xl text-orange-400 text-center'>GET IN TOUCH WITH AMAZON</h1>
                <div className='flex items-center justify-around'>
                    <form ref={form} onSubmit={sendEmail} className='w-[40%] text-xs text-black font-semibold '>
                    {/* --------------error box---------------- */}
                        
                        <div className={ `p-3 my-4 border-l-2 border-blue-500 rounded-sm bg-blue-100 transition-all duration-300 ${isSend ? " opacity-100": "opacity-0"}`}>Thank you for contacting us, we will be in touch shortly.</div>
                        

                        <div className='my-5'>
                            <label>Name</label><br/>
                            <input type='text' name="name" className='outline-none border border-red-400 bg-transparent w-full p-3 my-1 focus:border-blue-600' />
                        </div>

                        <div className='my-5'>
                            <label>Email</label><br/>
                            <input type='email' name="email" className='outline-none border border-red-400 bg-transparent w-full p-3 my-1 focus:border-blue-600' />
                        </div>

                        <div className='my-5'>
                            <label>phone</label><br/>
                            <input type='text' name="phone" className='outline-none border border-red-400 bg-transparent w-full p-3 my-1 focus:border-blue-600' />
                        </div>

                        <div className='my-3'>
                            <label>Comment or Message</label><br/>
                            <textarea  rows={7} name="comment" className=' outline-none border border-red-400 bg-transparent w-full p-3 my-1 focus:border-blue-600' />
                        </div>

                        <input type="submit" value="Send Message" className='p-2 text-sm text-white bg-sky-500'/>
                       
                    </form>
                    <div className='w-[30%]'>
                        <img src={getInTouchImg} alt='get in touch'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetInTouch;
import getInTouchImg from "../../images/getInTouchImg.jpg"

function GetInTouch()
{
    return(
        <>
        <section className='w-[75%] text-[#54595F] m-auto my-12'>
                <h1 className='font-bold text-3xl text-orange-400 text-center'>GET IN TOUCH WITH AMAZON</h1>
                <div className='flex items-center justify-around'>
                    <div className='w-[40%] text-xs text-black font-semibold '>
                    {/* --------------error box---------------- */}
                        <div></div>

                        <div className='my-5'>
                            <label>Name</label><br/>
                            <input type='text' className='outline-none border border-red-400 bg-transparent w-full p-3 my-1 focus:border-blue-600' />
                        </div>

                        <div className='my-5'>
                            <label>Email</label><br/>
                            <input type='email' className='outline-none border border-red-400 bg-transparent w-full p-3 my-1 focus:border-blue-600' />
                        </div>

                        <div className='my-5'>
                            <label>phone</label><br/>
                            <input type='text' className='outline-none border border-red-400 bg-transparent w-full p-3 my-1 focus:border-blue-600' />
                        </div>

                        <div className='my-3'>
                            <label>Comment or Message</label><br/>
                            <textarea  rows={7} className=' outline-none border border-red-400 bg-transparent w-full p-3 my-1 focus:border-blue-600' />
                        </div>

                        <button className='p-2 text-sm text-white bg-sky-500'>Send Message</button>
                       
                    </div>
                    <div className='w-[30%]'>
                        <img src={getInTouchImg} alt='get in touch'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetInTouch;
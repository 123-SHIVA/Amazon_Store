import Layout from '../Layout';
import img1 from "../../images/img1.webp";
import img2 from "../../images/img2.jpg";
import img4 from "../../images/img4.jpg"
import img3 from "../../images/img3.PNG"
import estoreImg from "../../images/estoreImg.jpeg"
import logisticLogo from "../../images/logisticsLogo.png"
import benefitsImg from "../../images/benefitsImg.png"


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';


import { FaRegCheckCircle } from "react-icons/fa";
import './Home.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import JoinCommunity from '../Helper/JoinCommunity';
import GetInTouch from '../Helper/GetInTouch';
;

const benefitsModelData=[
    {
        heading:"1-No Need To Stock Up Inventory",
        Para:"The store owner need not stock up inventory just as a traditional retail store piled up their inventory. The orders will be taken from customers by placing them on the online portal & then delivered to customers at their doorstep."
    },
    {
        heading:"2-Making It Side Or Full-Time Income",
        Para:"The model allows an individual to make their income either full time or partially. Moving further we allow you to start your store even while running your existing business at the same store."
    },
    {
        heading:"3-Standardised Training Procedure",
        Para:"The franchise store owner gets trained assistance on how to continue with the procedure of assisting walk-in customers at their physical stores. The standardized procedure to get the workflow in the store & time to time assistance on up-gradation on services to be taken place."
    },
    {
        heading:"4-Marketing Support",
        Para:"Every store owner does not have the required skills to promote their store & plan marketing activities from time to time to earn more recognition in the market. Easysell provides store owners a marketing tool kit that will give them branding for their activities."
    },
    {
        heading:"5-Schemes/ Offers Availed",
        Para:"The schemes & offers are specially crafted for the store owner so that they can earn a handsome amount of profit. From time to time providing them, the offers will motivate them to earn more commission for themselves and have an increase in walk-ins of more customers."
    }
]

function Home() {
    return (
        <Layout >
            <section className='my-10'>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}


                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt='home page swiper' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt='home page swiper' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt='home page swiper' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt='home page swiper' />
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className='w-[80%] m-auto my-10 flex items-center text-[#54595F] '  >
                <div className='w-[20%] ml-32'>
                    <img src={logisticLogo} alt='logistic logo' className='w-full rounded-full border-4 border-orange-400' />
                </div>

                <div className='w-[70%] text-center'>
                    <h3 className='font-bold text-2xl'>Amazon Services</h3>
                    <h1 className='text-4xl font-bold my-3'>Amazon Logistics Estore</h1>
                    <p className='text-sm mt-5 mx-10 tracking-tighter '>Amazon Logistics store is an India First initiative which enables entrepreneurs to offer online shopping assistance to new-to-ecommerce audiences. Shopping assistance provided by store owners establishes a sense of trust and helps lakhs of customers take their first steps into e-commerce.</p>
                </div>
            </section>

            <section className='text-[#54595F] flex items-center justify-center w-[75%] m-auto my-20 text-center'>
                <div className='w-[50%]'>
                    <h3 className='font-bold text-2xl'>Amazon Estore</h3>
                    <h1 className='text-4xl font-bold my-3'>Looking to set up an Amazon Logistics Estore?</h1>
                    <h5 className='text-xl font-bold mt-5 text-[#777d85] '>Key banefits </h5>
                    <ul className='text-sm leading-6 mt-3 list-disc'>
                        <li><eiv className='flex justify-center items-center gap-1 '><FaRegCheckCircle /><p>Earn on every order</p></eiv></li>
                        <li><div className='flex justify-center items-center gap-1 '><FaRegCheckCircle /><p>Low Merchandise management</p></div></li>
                        <li><div className='flex justify-center items-center gap-1 '><FaRegCheckCircle /><p>High earning potential with Incentives</p></div></li>
                        <li><div className='flex justify-center items-center gap-1 '><FaRegCheckCircle /><p>Standardized Branding & Premium look and feel</p></div></li>
                    </ul>

                </div>
                <div className='w-[35%]'>
                    <img src={estoreImg} alt='estore' />
                </div>
            </section >

            <section className='text-[#54595F] flex items-center justify-center w-[75%] m-auto my-5 text-center'>
                <div className='w-[35%]'>
                    <img src={benefitsImg} alt='benefits' />
                </div>

                <div className='w-[50%] ml-10'>
                    <h3 className='font-bold text-2xl'>Our Benefits</h3>
                    <h1 className='text-4xl font-bold my-3'>Benefits of partnering with Amazon logistics Estore?</h1>
                    <ul className='text-sm leading-6 mt-3 list-disc'>
                        <li><eiv className='flex justify-center items-center gap-1 '><FaRegCheckCircle /><p>Enable your network of stores with Assisted shopping Services</p></eiv></li>
                        <li><div className='flex justify-center items-center gap-1 '><FaRegCheckCircle /><p>Earn Commissions on Each order</p></div></li>
                        <li><div className='flex justify-center items-center gap-1 '><FaRegCheckCircle /><p>Earn better with every Walk-in</p></div></li>
                        <li><div className='flex justify-center items-center gap-1 '><FaRegCheckCircle /><p>High earning potential with Incentives</p></div></li>
                    </ul>

                </div>
            </section>

            <section className='text-[#54595F] w-[75%] m-auto my-5 text-center'>
                <h1 className='text-3xl font-bold my-3'>Benefits Of Franchise Digital Model</h1>
                <div className='flex flex-wrap justify-center gap-6 mt-10 text-sm'>
                    {
                        benefitsModelData.map((item, index)=>{
                            return(
                                <BenefitsModelCard item={item} key={index} />
                            )
                        })
                    }
                </div>
            </section>

            <GetInTouch/>
           <JoinCommunity/>

        </Layout>
    )
}

function BenefitsModelCard({item}){
    return(
        
        <div className='w-[30%]' >
            <h3 className="font-bold text-xl  mb-3">{item.heading}</h3>
            <p>{item.Para}</p>
        </div>
    
    )
}

export default Home;
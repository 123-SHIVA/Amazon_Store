import JoinCommunity from "../Helper/JoinCommunity";
import Layout from "../Layout";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LiaGgCircle, LiaChalkboardTeacherSolid } from "react-icons/lia";
import { TbHierarchy } from "react-icons/tb";
import { ImProfile } from "react-icons/im";



const benefitsModelData=[
    {
        icon:<FaHandHoldingUsd/> ,
        heading:"Low Investment",
        Para:"Having your store set up is difficult at the initial stages because of inconsistency in cash flow. Easysell makes sure that minimum investment is required and there is no extra money spent by retailers on it."
    },
    {
        icon:  <LiaGgCircle/>,
        heading:"No stock",
        Para:"The requirement of stocking up the inventory & keeping it In -house so that delivery is made to the customer on the spot is not required. The delivery will be done either at the physical store or their residential address"
    },
    {
        icon: <TbHierarchy/>,
        heading:"Numerous brands under One Site",
        Para:"The selection of brands differs when customers are given the option to purchase products. It will be giving them the variety as well as at the same time meeting their needs."
    },
    {
        icon: <LiaChalkboardTeacherSolid/>,
        heading:"Proper Training",
        Para:"The training of store owners for running their store smoothly without any hindrance & complexity for their customers is the aim of every retailer."
    },
    {
        icon: <ImProfile/>,
        heading:"Active Response to Complaints",
        Para:"Responding timely to the complaints set is the ultimate motive of every business. Easysell has assisted trained staff that can provide the store owner with the required skill set needed by them."
    }
]

function Service(){
    return(
        <Layout>

    

            <section className='text-[#54595F] w-[75%] m-auto my-10 '>
                <div>
                    <h1 className='text-3xl font-bold my-3 text-center'>Franchise Store</h1>
                    <h3 className="text-lg font-semibold my-3">With Just Simple Procedure Get Franchise Store Partnered With Amazon Logistics Estore</h3>
                    <p className="text-sm leading-5">The opportunity to earn with minimum investment & low inventory needed. Every store owner in a rural area can get the benefit of receiving proper marketing assistance & branding material for their store. Also receiving timely incentives so that they can earn more profit. Having the opportunity to earn income along with other sources of income.</p>
                </div>
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

            <section className='text-[#54595F] w-[70%] m-auto my-16 text-sm '>
                <h1 className='text-3xl font-bold my-5 text-center'>Terms Of Service</h1>
                <div>
                    <h3 className="underline text-lg">Terms and Conditions –Enrollment as Amazon Logistics store</h3>
                    <p>
                    Enroll as Amazon Logistics Estore (each a “Store)<br/>
                    -A Store (which includes a store owner(s) / operator(s) and/or its associate(s)) will be enrolled under the Amazon store program by/ with a marketing partner registered with Amazon (each a “Marketing Partner”), subject to fulfillment of certain criteria(s) and qualifications communicated to the Store.
                    <br/><br/>-The enrollment as an Amazon store by/ with the Marketing Partner is available on first-come first-serve basis.
                    <br/><br/>-A Store will be able to participate in Amazon store program only after successful enrollment with a Marketing Partner and completion of the pre-conditions of enrollment.
                    <br/><br/>-Pre-conditions of enrollment: o A Store will have to incur a one-time expenses of INR 3 lakh (approx.), at its sole costs, as a pre-condition for enrolling with the Marketing Partner under the Amazon store program. There are no fees or charges required from Amazon to set up an Amazon store.
                    <br/><br/>-This aforesaid amount  INR of INR 3 lakh (approx.) will be spent in the following manner –  2,60,000 will have to be directly submitted to the Marketing Partner. After deduction of operational, enrollment and other costs by the Marketing Partner (which would amount to INR 20,000 approx.), the remaining amount will be utilized for setting up the Store as per Amazon standards and by Amazon’s authorized vendors. The above amount, once  The paid to the relevant Marketing Partner, is non-refundable.  remaining amount, i.e., INR 40,000 (approx.), will be utilized in Store’s civil works. All of the Store’s civil work will have to be carried out independently by the Store’s owner(s) / operator(s) based on the specifications communicated by the Marketing Partner. o The above terms are in addition to other terms and conditions which may apply and will be communicated to the Store by the Marketing Partner.
                    Consideration: In consideration of the activities undertaken by a Store under the Amazon store program, the Store will be paid certain pre-agreed fees by the Marketing Partner.
                    <br/><br/>-The percentage of fees may be subject to change, from time to time, and upon prior notice by the Marketing Partner.
                    <br/><br/>** Earnings with Last mile delivery service – Such earnings will be received pursuant to successful registration under a separate program, subject to store’s eligibility for such enrollment and the term and conditions of such program.
                    Marketing Support:
                    <br/><br/>-The Marketing Partner may provide support to Stores for undertaking certain marketing activities, from time to time, subject to fulfillment of eligibility criteria, if any, associated with such marketing activity.
                    <br/><br/>-The details will be communicated to the Stores by the Marketing Partner from time to time.
                    Acknowledgement and Disclaimer:
                    <br/><br/>-A Store will be enrolled under the Amazon store program by and with the Marketing Partner (an entity independent of Amazon) and in accordance with the terms and conditions agreed inter-se between such Store and Marketing Partner. Accordingly, all payments pursuant to the program will be made to and received from the Marketing Partner and Amazon will not be involved in any transaction with a Store. The responsibility and liability to pay any fees will be solely of that of the Marketing Partner.
                    <br/><br/>-Amazon shall neither be liable nor responsible for any actions or inactions of any Marketing Partner nor any breach of conditions, representations or warranties by the Marketing Partner made to the Store under an agreement or otherwise, and hereby expressly disclaim any and all responsibility and liability in that regard.
                    <br/><br/>-Further, Amazon shall not mediate or resolve any dispute or disagreement between the Store and the Marketing Partner. The Store acknowledge and undertake he/she/it will apply for enrollment under Amazon store program and transact with a Marketing Partner at his/her/its own risk and the Store will use his/her/its best and prudent judgment before enrolling and entering into any transactions with a Marketing Partner.
                    <br/><br/>-Neither Amazon nor the Marketing Partner makes any promises or representations whatsoever as to the amount of business a Store can expect at any time pursuant to enrolling under the Amazon store program. The total fee earned by a Store would depend upon a number of factors which are not controlled by Amazon or the Marketing Partner.

                    </p>
                </div>
            </section>

            <JoinCommunity/>
        </Layout>
    )
}


function BenefitsModelCard({item}){
    return(
        
        <div className='w-[30%]' >
            <div className="text-8xl text-red-700 flex justify-center">{item.icon}</div>
            <h3 className="font-bold text-xl text-center  mb-3">{item.heading}</h3>
            <p>{item.Para}</p>
        </div>
    
    )
}

export default Service;
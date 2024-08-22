import Layout from "../Layout";
import opportunityImg from '../../images/opportunityImg.webp';
import ownerExpectImg from '../../images/ownerExpectImg.webp';
import teamLeaderImg from '../../images/teamLeaderImg.webp';
import thisOpportunityForYou from '../../images/thisOpportunityIsForYou.webp';
import venImg from '../../images/venImg.jpeg';

function Opportunity(){
    return(
        <Layout>
            <section className=" text-gray-700">

                <div className="w-full">
                    <img src={opportunityImg} alt="Opportunity Img" className="bg-contain w-[97%] h-[70vh] m-auto"/>
                    <img src={ownerExpectImg} alt="Opportunity Img" className="bg-contain w-[97%]  h-[70vh] m-auto"/>
                    <img src={teamLeaderImg} alt="Opportunity Img" className="bg-contain w-[97%]  h-[70vh] m-auto"/>
                    <img src={thisOpportunityForYou} alt="Opportunity Img" className="bg-contain  h-[70vh] w-[97%] m-auto"/>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-2 items-center  w-[70%] m-auto md:my-16 my-20 ">
                    <img src={venImg} alt="ven img" />
                    <div className="text-center font-bold ">
                        <h2>Your success story starts here.</h2>
                        <button className="bg-orange-400 my-5 py-2 px-4 text-white  hover:animate-bounce">
                            Apply Now
                        </button>
                        <p className="text-sm font-semibold">Still have questions ? Check out our FAQs.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Opportunity;
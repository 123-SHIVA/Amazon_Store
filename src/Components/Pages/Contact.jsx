import GetInTouch from "../Helper/GetInTouch";
import Layout from "../Layout";
import telephone from "../../images/telephone.webp"
import mail from "../../images/mail.webp"
import location from "../../images/location.webp"
import office from "../../images/office.webp"


function Contact(){
    return(
        <Layout>

            <section className="w-[80%] m-auto my-20">
                <div className="grid grid-cols-3 gap-3 text-gray-700  text-center font-bold">
                    <div className="flex flex-col gap-3 items-center ">
                        <img src={telephone} alt="telephone" className="w-64 h-52"/>
                        <h3 className="text-black text-sm">TOLL FREE</h3>
                        <h1 className="text-2xl">1800 2020 014</h1>
                        <p>+91 9876543210</p>
                        <p>(Registered Customer)</p>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <img src={mail} alt="mail" className="w-64 h-52"/>
                        <h5 className="text-black text-sm">Mail</h5>
                        <h4>support@logisticsamazone.in</h4>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <img src={location} alt="location" className="w-64 h-52"/>
                        <h5 className="text-black text-sm">Branch Office Delhi</h5>
                        <h4>INDIA HABITAT CENTRE, Institutional Area, Lodi Colony, New Delhi, Delhi 110003</h4>
                    </div>


                </div>

                <div className="flex flex-col gap-3 items-center w-[50%] m-auto text-center  text-gray-700 font-bold">
                    <img src={office} alt="office" className="w-64 h-52"/>
                    <h5 className="text-black ">Head Office Hyderabad</h5>
                    <h4>10 th Floor, Raheja Mind Space, Building No:9, Opposite, The Westin Hotel Rd, Phase 2, HITEC City, Hyderabad, Telangana 500081</h4>
                </div>

            </section>


            <GetInTouch/>
        </Layout>

    )
}

export default Contact;
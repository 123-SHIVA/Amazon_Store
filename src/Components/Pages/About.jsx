import GetInTouch from "../Helper/GetInTouch";
import Layout from "../Layout";


const ourMissionData = [
  {
    heading: "To approach our audience with a new and better way of communication - serving with a smile.",
    pera: "Create the best possibilities for businesspeople, unforgettable trips for travelers and change the world of the market through BPO and Digital Marketing service while making budget-friendly interiors."
  },
  {
    heading: "The long process was for the 90s, we believe in recreation- showing is better than telling.",
    pera: "Establish Amazon Store as the best service provider for the fastest, easiest and innovative service assistance in the world while maintaining the ethics and principles of the business."
  },
  {
    heading: "Shape and create the expectation of the market through service.",
    pera: "Raising the standard of business and other sectors while making innovative growth through experimental changes."
  },
  {
    heading: "What's better than being independent and yet earn, create your business, travel around, get designed your happiness and grow in market.",
    pera: ""
  },
]
function About() {
  return (
    <Layout className="bg-white">
      <div className=" my-20 mx-10 lg:m-auto lg:w-[70%] text-gray-700">
        <h1 className="mb-4 p-2 font-bold text-lg">ABOUT US</h1>
        <p className="mb-6 p-2 text-sm">
          Amazon Logistics Estore Ltd is the most trusted brand that works in multiple verticals of the Government sector, BPO, Digital Marketing, Holiday Planning, and Interior Designing. We provide elite services that no one else can offer. We assist in the development of businesses with a backend support team for our clients, offering rich knowledge and high analytical skills. <br /><br />
          We design spaces according to our client’s requirements and also create packages for travelers so they can fulfill their dream projects of exploration. <br /><br />
          We are proud to announce that we have over 15,000 franchises nationwide that are successfully helping to transform business ideas into developed businesses. We are the only authorized Mudra Yojna application provider across India with 1.4 million happy and satisfied customers. <br /><br />
          What separates us from others is our simple yet fast-working module. We have the simplest procedures and creative solutions for every service we offer. It's no exaggeration to say that we are the fastest-growing network in the service sector due to our technical team and communication experts, who carry the responsibility of support and guidance to every exciting and new client.
        </p>
        <div>
          <h1 className="my-8  text-lg font-semibold">OUR MISSION</h1>
          <div className="text-center">
            {
                ourMissionData.map((item,index)=>{
                  return(
                    <OurMissionCard item={item} key={index}/>
                  )
                })
            }
          </div>
        </div>
      </div>

      <GetInTouch/>
    </Layout>
  );
}

function OurMissionCard({item}) {
  return (
    <section className="flex items-center justify-center my-7 px-12 py-8 text-lg text-center text-gray-800 border-l-4 border-r-4 border-black bg-red-50">
      <div className="max-w-3xl">
        <h2 className="mb-8 font-bold  "> {item.heading} </h2>
        <p className="">{item.pera}</p>
      </div>
    </section>
  )
}

export default About;

import { Link } from "react-router-dom";

function Footer2()
{
    return(
        <div className='text-center font-semibold mt-10 '>
                <h5 className='text-black text-xs'> By continuing, you agree to Amazon’s <Link to="/service" className="text-blue-500"> Conditions of Use</Link>  and <Link to="/service" className="text-blue-500">Privacy Notice.</Link></h5>
                <p className='text-sm mt-3 '>© 1996-2022, Amazon Logistics Estore, Inc. or its affiliates</p>
            </div>
    )
}

export default Footer2;
import logo from "./logo.png";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

function EmailTemplate () {
    return(
        <>
            <div className="flex my-7 flex-col  w-[430px] h-[auto] mx-auto shadow-sm colo 
                font-general text-[14px] leading-[20px] font-normal text-[#777777] ">
                <div className="bg-[#FF8500] w-[430px] h-[41px]"></div>
                <img src={logo} alt="Logo" className="w-[150px] h-auto" />                
                <div className="px-5 ">
                    <h2 className="text-[#474747] font-medium">Payment Received- ResQ-X service Order #12345 </h2>
                    <p className="mt-2">
                        Hi John,
                    </p>   
                    <p> 
                        We’ve received your payment via bank transfer for the service 
                        you requested through Resq-X. Here's a breakdown of your transaction:
                    </p> <hr className="my-5"/>
                </div>

                <div className="px-5 ">
                    <h2 className="text-[#474747] font-medium mx-auto text-center mb-5">
                        PAYMENT DETAILS
                    </h2>

                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <p>Order ID</p>
                        <p className="text-right ">#123456</p>

                        <p>Payment Amount</p>
                        <p className="text-right text-[#474747]">₦22,500</p>

                        <p>Payment Date</p>
                        <p className="text-right text-[#474747]">Jul 12, 2025</p>

                        <p>Payment Time</p>
                        <p className="text-right text-[#474747]">09:45 AM</p>

                        <p>Payment Method</p>
                        <p className="text-right text-[#474747]">Bank Transfer</p>
                    </div>

                </div> <hr className="my-5"/>

                <div className="px-5 ">
                    <h2 className="text-[#474747] font-medium mx-auto text-center mb-5">
                        SERVICE DETAILS
                    </h2>

                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <p>Service Type</p>
                        <p className="text-right text-[#474747]">Out of Fuel</p>

                        <p>Vehicle Type</p>
                        <p className="text-right text-[#474747]">Lexus RX 350</p>

                        <p>Location</p>
                        <p className="text-right text-[#474747]">Agungi, Lekki</p>

                        <p>Assigned Provider</p>
                        <p className="text-right text-[#474747]">Daniel John</p>

                        <p>Payment Method</p>
                        <p className="text-right text-[#474747]">Bank Transfer</p>
                    </div>

                </div> <hr className="my-5"/>

                <div className="text-[12px] mb-6 px-5" >
                    <p>Need Help?</p>
                    <p>We're here 24/7. Reply to this email or contact us via</p>
                    <p className="mt-4 text-[#777777]">
                        <PhoneIcon className="w-4 h-4 text-gray-700 inline-block mr-1" />
                        02013306062 |

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-gray-700 inline-block mr-1 ml-2"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                        >
                            <path d="M380.9 97.1C339-3.2 243.6-32.2 160.5 19.4 77.3 71 44 167.2 85.9 257.6l-23 84.1c-3.1 11.4 6.8 22.3 18.2 19.2l84.1-23C266.7 379.2 362.9 345.9 414.5 262.7c51.6-83.1 22.6-178.5-33.6-220.4zM256 320c-64.2 0-116.3-52.1-116.3-116.3S191.8 87.4 256 87.4s116.3 52.1 116.3 116.3S320.2 320 256 320z"/>
                        </svg>
                        08111173779 |

                        <EnvelopeIcon className="w-4 h-4 text-gray-700 inline-block mr-1 ml-2" />
                        <a href="mailto:hello@resqx.ng" className="hover:underline">
                            hello@resqx.ng
                        </a> 

                        
                    </p>


                    <p>
                        Thank you for trusting ResQ-X. We'll get you moving again, fast and safe. 🚗⚡</p>
                </div>

                <div className="bg-[#FF8500] w-[430px] h-[41px]"></div>
            </div>
        </>
    );
}

export default EmailTemplate
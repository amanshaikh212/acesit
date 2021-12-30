
import {BiNetworkChart} from "react-icons/bi";
import {FaLaptopCode, FaUser, FaUsers} from "react-icons/fa";
import {MdManageAccounts} from "react-icons/md";
const HomeDisplay = () => {
    return (
        <div className="bg-[#2179b9] flex">
            
            <div className="w-1/2 flex justify-center items-center">
                <p className="text-7xl m-10 font-semibold text-white animate-pulse">
                <div className=" flex flex-col">

                    Clubs <br/> and <br/> organizations <br/> 
                </div>
                
                
                are a big part of college life!</p>
                
            </div>
            <div className="w-1/2  flex flex-col justify-center items-center overflow-hidden">
                <h2 className="text-5xl p-6 text-white font-semibold ">Why should you join ACES?</h2>
                <div className="border-4 w-28 border-green-800 rounded-xl"></div>
                <p className="m-8 text-lg font-semibold text-white">ACES provides Many opportunities for students <br/> to develop friendship and social relationships <br/> while working towards career goals.</p>
                <div className="flex w-full justify-center space-x-10 ml-6 ">
                    <div className="flex flex-col items-center">
                        <BiNetworkChart size={28}/>
                        <p className="text-xs mt-2 font-semibold">Networking Opportunities</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaUsers size={28}/>
                        <p className="text-xs mt-2 font-semibold">Social Opportunities</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaLaptopCode size={28}/>
                        <p className="text-xs mt-2 font-semibold">Professional Experience</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaUser size={28}/>
                        <p className="text-xs mt-2 font-semibold">Leadership Skills</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdManageAccounts size={28}/>
                        <p className="text-xs mt-2 font-semibold">Organization <br/> and <br/> Management Skills</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDisplay

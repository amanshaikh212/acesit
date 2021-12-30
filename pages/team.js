import Header from "../components/Header";

import Image from "next/image";
import DirImage from "../assets/images/directorImage.jpg";
import FacAd1 from "../assets/images/fa1.jpg";
import FacAd2 from "../assets/images/fa2.jpg";

import Bm1 from "../assets/images/bm1.jpg";
import Bm2 from "../assets/images/mb2.jpg";
import Bm3 from "../assets/images/bm3.jpeg";
import Bm4 from "../assets/images/bm4.jpg";
import Bm5 from "../assets/images/bm5.jpg";
import Bm6 from "../assets/images/bm6.jpg";
import Bm7 from "../assets/images/bm7.jpg";
import Bm8 from "../assets/images/bm8.jpeg";
import Bm9 from "../assets/images/bm9.jpg";
import Bm10 from "../assets/images/bm10.png";
import Bm11 from "../assets/images/bm11.jpg";
import Bm12 from "../assets/images/bm12.jpg";
import Bm13 from "../assets/images/bm13.jpg";
import Bm14 from "../assets/images/bm14.jpg";
import Bm15 from "../assets/images/bm15.jpg";
import Bm16 from "../assets/images/bm16.png";


import {FiMail} from "react-icons/fi";
import Footer from "../components/Footer";
const Team = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-500 h-full">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-blue-800 shadow-2xl">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl m-4 text-white font-bold animate-pulse ">Team</h1>
        <div className="border-4 w-28 border-green-400 rounded-xl mb-4"></div>
        <div className="w-1/4 rounded-lg shadow-xl bg-white rounded-lg p-4 bg-white p-10">
          <Image
            src={DirImage}
            alt=""
            className="rounded-full  mx-auto"
          />

          <header className=" text-2xl font-extrabold py-4 px-4 text-center">
            Rajesh Patel
          </header>
          <div>
            <ul className="text-gray-500 text-center font-semibold">
              <li>Director,</li>
              <li>Institute of Technology, Nirma University</li>
              
            </ul>
              <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">director.it@nirmauni.ac.in</p>
              </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between m-10 ">
        <div className="w-1/4 rounded-lg shadow-xl bg-white rounded-lg p-4 bg-white p-10">
          <Image
            src={FacAd1}
            alt=""
            className="rounded-full  mx-auto"
          />

          <header className=" text-2xl font-extrabold py-4 px-4 text-center">
            Pooja shah
          </header>
          <div>
            <ul className="text-gray-500 text-center font-semibold">
              <li>Faculty Advisor,</li>
              <li>Institute of Technology, Nirma University</li>
              
            </ul>

            <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">pooja.shah@nirmauni.ac.in</p>
              </div>
          </div>
        </div>
        <div className="w-1/4 rounded-lg shadow-xl bg-white rounded-lg p-4 bg-white p-10">
          <Image
            src={FacAd2}
            alt=""
            className="rounded-full  mx-auto"
          />

          <header className=" text-2xl font-extrabold py-4 px-4 text-center">
            Sapan Mankad
          </header>
          <div>
            <ul className="text-gray-500 text-center font-semibold">
              <li>Faculty Advisor,</li>
              <li>Institute of Technology, Nirma University</li>
              
            </ul>

            <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">sapanmankad@nirmauni.ac.in</p>
              </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl m-4 text-white font-bold animate-pulse ">ACES Board | 2021-22</h1>
      
        <div className="border-4 w-28 border-green-400 rounded-xl mb-4 ml-4"></div>

      <div className="grid grid-cols-4 gap-16 m-6 h-full p-4">
        <div className="flex flex-col items-center justify-center shadow-xl bg-white rounded-lg p-4 ">

        <Image src={Bm1} className="rounded-full mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Kanisha shah,</li>
              <li>President, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE253@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col items-center justify-center shadow-xl bg-white rounded-lg p-4 ">

        <Image src={Bm2} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Meet Vora,</li>
              <li>Vice President, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE299@nirmauni.ac.in	</p>
              </div>
        </div>

        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 items-center justify-center">

        <Image src={Bm3} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Kunj Thakkar,</li>
              <li>General Secretary, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE277@nirmauni.ac.in	</p>
              </div>
        </div>

        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 items-center justify-center">

        <Image src={Bm4} className="rounded-full  mx-auto" width={200} height={200} />
        <ul className="text-gray-500 text-center font-semibold">
              <li>Manan Patel,</li>
              <li>Joint Secretary, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE112@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 items-center justify-center">

        <Image src={Bm5} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Akshat shah,</li>
              <li>Organizing Secretary, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE246@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 items-center justify-center">

        <Image src={Bm6} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Naman Thakkar,</li>
              <li>Managing director, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">20BCE529@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 items-center justify-center">

        <Image src={Bm7} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Mrunal Shah,</li>
              <li>Director General, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE135@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 items-center justify-center">

        <Image src={Bm8} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Kalp Mepani,</li>
              <li>Treasurer, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center" >

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE127@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 justify-center items-center">

        <Image src={Bm9} className="rounded-full  mx-auto" width={200} height={200} />
        <ul className="text-gray-500 text-center font-semibold">
              <li>Shivam Panchal,</li>
              <li>Technical Head, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE150@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 justify-center items-center">

        <Image src={Bm10} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Yagnik Thummar,</li>
              <li>Technical Head, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE282@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 justify-center items-center">

        <Image src={Bm11} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Ansh Ray,</li>
              <li>Public Relations Officer, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE226@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 justify-center items-center">

        <Image src={Bm12} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Yash Savani,</li>
              <li>Editor, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE243@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 justify-center items-center">

        <Image src={Bm13} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Gaurav Sakariya,</li>
              <li>Creative Head, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE233@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 justify-center items-center">

        <Image src={Bm14} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Sachi Chaudhary,</li>
              <li>Marketing Director, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE230@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col shadow-xl bg-white rounded-lg p-4 justify-center items-center">

        <Image src={Bm15} className="rounded-full  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Aayush Shah,</li>
              <li>Graphic Designer, ACES</li>
              
        </ul>
        <div className="flex justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE245@nirmauni.ac.in	</p>
              </div>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl bg-white rounded-lg p-4">

        <Image src={Bm16} className="rounded-full p-4  mx-auto" width={200} height={200}/>
        <ul className="text-gray-500 text-center font-semibold">
              <li>Savan Vaghani,</li>
              <li>Membership Chair, ACES</li>
              
        </ul>
        <div className="flex  justify-center items-center">

              <FiMail className="mr-3 text-gray-500"/>
              <p className="text-gray-500">19BCE288@nirmauni.ac.in	</p>
              </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Team;

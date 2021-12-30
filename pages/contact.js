import Image from "next/image";
import Header from "../components/Header";
import AcesLogo from "../assets/images/Logo_Tranparent.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import Link from "next/link";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-blue-800 shadow-2xl">
        <Header />
      </div>

      <div className=" bg-red-100 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-800">
        <Image src={AcesLogo} height={500} width={500} />
        <h1 className="text-5xl font-semibold mt-3 text-white animate-pulse">
          Association of Computer Engineering Students
        </h1>
        <h2 className="text-4xl font-bold mt-5">Contact</h2>
        <div className="border-4 w-28 border-green-800 rounded-xl mt-4"></div>
        <div className="m-10 flex flex-col items-center justify-center">
          <AiFillMail size={70} />
          <p className="text-xl text-white">aces.it@nirmauni.ac.in</p>
        </div>
        <div className="flex items-center justify-center space-x-20 m-10">
          <Link href="https://www.instagram.com/aces_it_nu/" passHref>
            <div className="flex flex-col items-center justify-center hover:cursor-pointer">
              <AiFillInstagram size={70} color="" />
              <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-full duration-300 font-semibold mt-2">
                Connect with us on Instagram!
              </button>
            </div>
          </Link>

          <Link href="https://www.facebook.com/aces.itnu/" passHref>
            <div className="flex flex-col items-center justify-center">
              <AiFillFacebook size={70} />
              <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-full duration-300 font-semibold mt-2">
                Connect with us on Facebook!
              </button>
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/company/association-of-computer-engineering-students/mycompany/"
            passHref
          >
            <div className="flex flex-col items-center justify-center">
              <AiFillLinkedin size={70} />
              <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-full duration-300 font-semibold mt-2">
                Connect with us on Linkedin!
              </button>
            </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

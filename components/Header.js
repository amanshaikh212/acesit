import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/Logo_Tranparent.png";
import nirmalogo from "../assets/images/Logo_NirmaUniversity_Transparent.png"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10 items-center">
      <div className="relative animate-bounce flex items-center h-10 cursor-pointer my-auto">
        <Image src={logo} layout="fill"
          objectFit="contain"
          objectPosition="left" alt="image"/>
      </div>
      <div className="flex justify-between text-white">
        <Link href="/" className="" passHref><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-full duration-300 ">Home</button></Link>
        <Link href="/about" passHref><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-full duration-300 ">About</button></Link>
        <Link href="/events" passHref><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-full duration-300 ">Events</button></Link>
        <Link href="/team" passHref><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-full duration-300 ">Team</button></Link>
        <Link href="/contact" passHref><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-full duration-300 ">Contact</button></Link>
      </div>
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src={nirmalogo} layout="fill"
          objectFit="contain"
          objectPosition="right" alt="image"/>
      </div>
    </header>
  );
};

export default Header;

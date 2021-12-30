import Image from "next/image";
import Header from "../components/Header";
import NirmaLogo from "../assets/images/Logo_NirmaUniversity_Transparent.png";
import AcesLogo from "../assets/images/Logo_Tranparent.png";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-blue-800 shadow-2xl">
        <Header />
      </div>
      <div className="h-[1500px] text-white">
          <div className="h-[500px] flex bg-gradient-to-r from-blue-800 to-blue-500">
              <div className="w-1/2 flex items-center justify-center">
                  <Image src={NirmaLogo} alt="Nirma Logo"/>
              </div>
              <div className="w-1/2  flex flex-col items-center justify-center p-4">
                  <h1 className="text-4xl font-serif mb-5">Nirma University</h1>
                  <div className="border-4 w-28 border-green-800 rounded-xl"></div>
                  <h3 className="font-mono mt-2">तमसो मा ज्योतिर्गमय (Tamso Ma Jyotirgamaya)</h3>
                  <h3 className="font-mono mb-5"> “From ignorance, lead us to knowledge”</h3>
                  <div className="border-4 w-28 border-green-800 rounded-xl"></div>
                  <p className="font-mono m-10">Established in the year 2003, the Nirma University, Ahmedabad is a research-oriented, student-centric, multidisciplinary, not-for-profit state private university. Within a short period of its existence, it has emerged as a nationally renowned higher education institution. The University and its constituent institutes are highly ranked by different ranking agencies.</p>
              </div>
          </div>
          <div className="h-[500px] flex bg-gradient-to-r from-blue-800 to-blue-500">
              <div className="w-1/2  flex flex-col items-center justify-center p-4">
                  
                  <h1 className="text-4xl font-serif mb-5">ACES</h1>
                  <div className="border-4 w-28 border-green-800 rounded-xl"></div>
                  <h3 className="font-mono mt-2">Association of Computer Engineering Students</h3>
                  <h3 className="font-mono mb-5"> “From Ideas to Innovation”</h3>
                  <div className="border-4 w-28 border-green-800 rounded-xl"></div>
                  <p className="font-mono m-10">Association of Computer Engineering Students (ACES), was established in 2001 by the Department of Computer Science and Engineering. All the students of the Department are members of ACES. ACES aims to make students technically stronger by organising various workshops and seminars on the latest technologies. The organisation also contributes to the betterment of society by organising socially relevant technical activities.</p>
              </div>
              <div className="w-1/2  flex flex-col items-center justify-center">
                  
                  <Image src={AcesLogo} width={300} height={300}/>
              </div>
          </div>
          <div className="h-[500px]  flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-blue-500">
              <h1 className="m-8 text-4xl font-semibold font-serif">Our Mission</h1>
              <div className="border-4 w-28 border-green-800 rounded-xl"></div>
              <p className="m-4 font-mono text-lg">ACES aims to make students technically stronger by organising various workshops and seminars on the latest technologies.</p>
              <h1 className="m-8 text-4xl font-semibold font-serif">Our Vision</h1>
              <div className="border-4 w-28 border-green-800 rounded-xl"></div>
              <p className="m-4 font-mono text-lg">ACES contributes to the betterment of society by organising socially relevant technical activities.</p>
              <p></p>
          </div>
      </div>

      <Footer/>

    </div>
  );
};

export default About;

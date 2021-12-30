import { Carousel } from "react-responsive-carousel";
import Header from "../components/Header";
import Image1 from "../assets/images/i1.jpg";
import Image2 from "../assets/images/i2.jpg";
import Image3 from "../assets/images/i3.jpg";
import Image4 from "../assets/images/i4.jpg";
import Image5 from "../assets/images/i5.jpg";
import Image6 from "../assets/images/i6.jpg";
import Image7 from "../assets/images/i7.jpg";
import Image8 from "../assets/images/i8.jpg";
import Image9 from "../assets/images/i9.jpg";
import Image10 from "../assets/images/i10.jpg";
import Image11 from "../assets/images/i11.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white ">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-blue-800 shadow-2xl">
        <Header />
      </div>
      <div className="h-[600px] flex bg-gradient-to-r from-blue-500 to-blue-800 ">
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-blue-800  ">
          <div className="flex flex-col items-center justify-center">
            <Carousel
              autoPlay={true}
              interval={3000}
              dynamicHeight={true}
              autoFocus={true}
              infiniteLoop={true}
              transitionTime={1000}
            >
              <div className="relative h-full">
                <Image src={Image1} alt="image" layout="fill" />
              </div>
              <div className="relative h-full">
                <Image src={Image2} alt="image" width={500} height={500} />
              </div>
              <div className="relative h-full">
                <Image src={Image3} alt="image" width={500} height={500} />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold animate-pulse mb-6">Check glimpse of <br/> 25th foundation day event!</h1>
          <div className="border-4 w-28 border-green-800 rounded-xl"></div>
        </div>
      </div>

      <div className="h-[600px] flex bg-gradient-to-r from-blue-500 to-blue-800 ">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold animate-pulse mb-6" >Check technical event images <br/> organized by ACES!</h1>
          <div className="border-4 w-28 border-green-800 rounded-xl"></div>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-blue-800">
          <div className="flex  items-center justify-center">
            <Carousel
              autoPlay={true}
              interval={3000}
              dynamicHeight={true}
              autoFocus={true}
              infiniteLoop={true}
              transitionTime={1000}
            >
              <div className="relative h-full">
                <Image src={Image4} alt="image" width={500} height={500} />
              </div>
              <div className="relative h-full">
                <Image src={Image5} alt="image" width={500} height={500} />
              </div>
              <div className="relative h-full">
                <Image src={Image6} alt="image" width={500} height={500} />
              </div>
              <div className="relative h-full">
                <Image src={Image7} alt="image" width={500} height={500} />
              </div>
              <div className="relative h-full">
                <Image src={Image8} alt="image" width={500} height={500} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="h-[600px] flex bg-gradient-to-r from-blue-500 to-blue-800 ">
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-blue-800">
          <div className="flex  items-center justify-center">
            <Carousel
              autoPlay={true}
              interval={3000}
              dynamicHeight={true}
              autoFocus={true}
              infiniteLoop={true}
              transitionTime={1000}
            >
              <div className="relative h-full">
                <Image src={Image9} alt="image" width={500} height={500} />
              </div>
              <div className="relative h-full">
                <Image src={Image10} alt="image" width={500} height={500} />
              </div>
              <div className="relative h-full">
                <Image src={Image11} alt="image" width={500} height={500} />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold animate-pulse mb-6">Check some more images!</h1>
          <div className="border-4 w-28 border-green-800 rounded-xl"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;

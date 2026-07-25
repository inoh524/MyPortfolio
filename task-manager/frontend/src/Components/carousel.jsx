import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

import image from "../assets/arcon_dashboard.png";
import image1 from "../assets/arcon_bestdeals.png";
import image2 from "../assets/arcon_products.png";
import image3 from "../assets/arcon_services.png";
import image4 from "../assets/arcon_services1.png";
import image5 from "../assets/arcon_faqs.png";
import image6 from "../assets/arcon_footer.png";
import image7 from "../assets/flutter.jpg";
import image8 from "../assets/flutter1.jpg";
import image9 from "../assets/ojt.jpeg";
import image10 from "../assets/ojt1.png";
import image11 from "../assets/ojt2.png";
import image12 from "../assets/ojt3.png";

const images = [
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

const images1= [
  image7,
  image8
];

const intern= [
  image9,
  image10,
  image11,
  image12
];

export function CarouselDemo() {
  const [zoomIndex, setZoomIndex] = useState(null);

  const nextImage = () => {
    setZoomIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setZoomIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Carousel className="group w-full max-w-[600px]">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  onClick={() => setZoomIndex(index)}
                  className="w-full h-full aspect-square object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-[#00fffb] font-bold" />
        <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-[#00fffb] font-bold" />
      </Carousel>


      {/* Zoom Modal */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5">

          {/* Close Button */}
          <button
            onClick={() => setZoomIndex(null)}
            className="absolute top-5 right-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <X size={40} />
          </button>


          {/* Previous Image */}
          <button
            onClick={previousImage}
            className="absolute left-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <ChevronLeft size={50} />
          </button>


          {/* Image */}
          <img
            src={images[zoomIndex]}
            alt="Zoomed preview"
            className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain"
          />


          {/* Next Image */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <ChevronRight size={50} />
          </button>

        </div>
      )}
    </>
  );
}


export function CarouselDemo2() {
  const [zoomIndex, setZoomIndex] = useState(null);

  const nextImage = () => {
    setZoomIndex((prev) => (prev + 1) % images1.length);
  };

  const previousImage = () => {
    setZoomIndex((prev) =>
      prev === 0 ? images1.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Carousel className="group w-full max-w-[600px]">
        <CarouselContent>
          {images1.map((img, index) => (
            <CarouselItem key={index}>
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  onClick={() => setZoomIndex(index)}
                  className="w-full h-full aspect-square object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-[#00fffb] font-bold" />
        <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-[#00fffb] font-bold" />
      </Carousel>


      {/* Zoom Modal */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5">

          {/* Close Button */}
          <button
            onClick={() => setZoomIndex(null)}
            className="absolute top-5 right-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <X size={40} />
          </button>


          {/* Previous Image */}
          <button
            onClick={previousImage}
            className="absolute left-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <ChevronLeft size={50} />
          </button>


          {/* Image */}
          <img
            src={images1[zoomIndex]}
            alt="Zoomed preview"
            className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain"
          />


          {/* Next Image */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <ChevronRight size={50} />
          </button>

        </div>
      )}
    </>
  );
}


export function Intern() {
  const [zoomIndex, setZoomIndex] = useState(null);

  const nextImage = () => {
    setZoomIndex((prev) => (prev + 1) % intern.length);
  };

  const previousImage = () => {
    setZoomIndex((prev) =>
      prev === 0 ? intern.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Carousel className="group w-full max-w-[600px]">
        <CarouselContent>
          {intern.map((img, index) => (
            <CarouselItem key={index}>
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  onClick={() => setZoomIndex(index)}
                  className="w-full h-full aspect-square object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-[#00fffb] font-bold" />
        <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-[#00fffb] font-bold" />
      </Carousel>


      {/* Zoom Modal */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5">

          {/* Close Button */}
          <button
            onClick={() => setZoomIndex(null)}
            className="absolute top-5 right-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <X size={40} />
          </button>


          {/* Previous Image */}
          <button
            onClick={previousImage}
            className="absolute left-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <ChevronLeft size={50} />
          </button>


          {/* Image */}
          <img
            src={intern[zoomIndex]}
            alt="Zoomed preview"
            className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain"
          />


          {/* Next Image */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white hover:text-[#00fffb] cursor-pointer"
          >
            <ChevronRight size={50} />
          </button>

        </div>
      )}
    </>
  );
}
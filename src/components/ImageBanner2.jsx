import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ImageBanner2({ title, description,description1 ,route, image }) {
  return (
    <Link href={route} passHref>
      <div className="relative w-full max-w-[750px] m-4 h-[220px] overflow-hidden cursor-pointer">
        <div className="absolute inset-0">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
       
        <div className="absolute inset-0 flex items-end justify-start p-5">
          <div className="text-white">
            <div className="flex items-center mb-3">
              
            </div>
            <h2 className="font-bold text-2xl">{title}</h2>
              <div className="flex flex-col items-start">
                <p className="mr-2">{description}</p>
                
                <p className="mr-2">{description1}</p>
               </div>

               

          </div>
          
        </div>
      </div>
    </Link>
  );
}

export default ImageBanner2;

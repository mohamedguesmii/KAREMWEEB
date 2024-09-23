import React from "react";
import Image from "next/image";

import Mecca from "../../../public/images/makka4.png";
import BannerElement from "@/components/BannerElement";
import { AiOutlineSearch } from "react-icons/ai";
import IconComponent from "@/components/IconComponent";
import IkamaImg from "../../../public/images/ikama.png";
import PlaneImg from "../../../public/images/avion.png";
import BayanatImg from "../../../public/images/bayanat.png";
import ImageBanner from "@/components/ImageBanner";
import ImageBanner2 from "@/components/ImageBanner2";
import TextBanner from "@/components/TextBanner";
import TextBannerr from "@/components/TextBannerr";
import image9 from "../../../public/images/Image9.png";
import image10 from "../../../public/images/Image10.png";
import image8 from "../../../public/images/Image8.png";
import image12 from "../../../public/images/Image12.png";
import image11 from "../../../public/images/Image11.png";
import image7 from "../../../public/images/Image7.png";
import { faKaaba, faMosque } from "@fortawesome/free-solid-svg-icons";
import ImageBanner3 from "@/components/ImagerBanner3";
import Logo from "../../../public/images/karemTourism4.png";
import karemTourism42 from "../../../public/images/karemTourism42.png";
import wizara from "../../../public/images/wizara.png";
import markez from "../../../public/images/markez.png";
import tijara from "../../../public/images/tijara.png";
import { IoLogoTwitter, IoLogoInstagram,  IoLogoSnapchat } from 'react-icons/io';

import pay from "../../../public/images/pay.png";
import stcpay from "../../../public/images/stcpay.png";
import master from "../../../public/images/master.png";
import visa from "../../../public/images/visa.png";
import mada from "../../../public/images/mada.png";









const HomePage = () => {
  const SocialIcon = ({ iconName }) => {
    switch (iconName) {
      case 'twitter':
        return <IoLogoTwitter />;
      
      case 'instagram':
        return <IoLogoInstagram />;
      case 'youtube':
        return <IoLogoSnapchat />;
      default:
        return null;
    }
  };

  const MediaIcon = ({ iconName, url }) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center">
          <SocialIcon iconName={iconName} />
        </div>
      </a>
    );
  };

  return (
    <div className="w-full h-screen ">
      <div className="w-full h-[75%]  ">
        <Image
          className="z-[-10]"
          src={Mecca}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full   flex absolute top-[50px] z-[-10] justify-center">
        <div className="w-full h-[450px] flex flex-col justify-center items-center">
        <h3 className="text-[4rem] font-bold font-avenir" style={{ color: '#d2b48c' }}>
  كارم السياحية
</h3>

          <h2 className=" m-5 font-bold text-white text-[1rem] font-avenir ">
            بوابتك إلى تجربة مميزة في البقاع المقدسة
          </h2>

          <div className=" w-[1000px] p-2 bg-white rounded-3xl flex flex-row justify-around items-center">
            <BannerElement
              option={
                <select>
                  <option value="egypt">مصر </option>
                  <option value="saudi_arabia">
                    المملكة العربية السعودية{" "}
                  </option>
                  <option value="iraq">العراق</option>
                  <option value="morocco">المغرب </option>
                  <option value="uae">الإمارات العربية المتحدة</option>
                  <option value="jordan">الأردن</option>
                  <option value="algeria">الجزائر</option>
                  <option value="tunisia">تونس </option>
                  <option value="lebanon">لبنان </option>
                  <option value="qatar">قطر</option>
                </select>
              }
              title={"الوجهة"}
            />
            <BannerElement
              option={
                <select>
                  <option value="" disabled>
                    تاريخ الوصول
                  </option>

                  <option value="2023-12-02">2023-12-02</option>
                  <option value="2023-12-03">2023-12-03</option>
                  <option value="2023-12-04">2023-12-04</option>
                  <option value="2023-12-05">2023-12-05</option>
                  <option value="2023-12-06">2023-12-06</option>
                  <option value="2023-12-07">2023-12-07</option>
                  <option value="2023-12-08">2023-12-08</option>
                  <option value="2023-12-09">2023-12-09</option>
                  <option value="2023-12-10">2023-12-10</option>
                  <option value="2023-12-11">2023-12-11</option>
                </select>
              }
              title={"تاريخ الوصول"}
            />
            <BannerElement
              option={
                <select>
                  <option value="" disabled>
                    تاريخ المغادرة
                  </option>

                  <option value="2023-12-02">2023-12-02</option>
                  <option value="2023-12-03">2023-12-03</option>
                  <option value="2023-12-04">2023-12-04</option>
                  <option value="2023-12-05">2023-12-05</option>
                  <option value="2023-12-06">2023-12-06</option>
                  <option value="2023-12-07">2023-12-07</option>
                  <option value="2023-12-08">2023-12-08</option>
                  <option value="2023-12-09">2023-12-09</option>
                  <option value="2023-12-10">2023-12-10</option>
                  <option value="2023-12-11">2023-12-11</option>
                </select>
              }
              title={"تاريخ المغادرة"}
            />
            <BannerElement
              option={<input className="border-2 w-[90px]" type="text" />}
              title={"البروموكود"}
            />

            <div className="w-11 h-11 bg-purple-950 rounded-lg flex justify-center items-center cursor-pointer">
              <AiOutlineSearch size={24} color="white" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] bg-white flex flex-col items-center ">
        <h3 className="text-black m-5 text-[2rem] font-bold">
          حجزكم <span className="text-purple-800">سهل و سريع</span>
        </h3>
        <div className="w-full flex flex-row justify-evenly m-10">
          <IconComponent
            img={BayanatImg}
            title={"أدخل بياناتك"}
            description={"إملأ التفاصيل لإتمام الاجراءت"}
          />


          <IconComponent
            img={IkamaImg}
            title={"إختر إقامتك"}
            description={"إختر فندقك لإقامة  مثالية"}
          />


          <IconComponent
            img={PlaneImg}
            title={"إختر الوجهة"}
            description={"إستكشف خياراتك للسفر"}
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex-1 w-[1000px]">
            <TextBanner className="self-center" />
          </div>
          <div className="flex-1 min-w-[1000px] max-w-[750px]">
            <ImageBanner
              title="مكة المكرمة"
              description="إكتشف أفضل العروض"
              route="/Hotels"
              image={image9}
              icon={faKaaba}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <div className="flex-1 min-w-[700px] max-w-[750px]">
            <ImageBanner
              title=" المدينة المنورة"
              description="إكتشف أفضل العروض"
              route="/Hotels"
              image={image10}
              icon={faMosque}
            />
          </div>
          <div className="flex-1 min-w-[300px] max-w-[100px]">
            <ImageBanner
              title=" جدة"
              description="إكتشف أفضل العروض"
              route="/Hotels"
              image={image8}
              icon={faKaaba}
            />
          </div>


          <div className="flex-1 min-w-[300px] max-w-[100px] ">
         
            <ImageBanner2
              description="  مكة كلوك رويال تاور فيرمونت فندق"
              route="/fondok"
              image={image11}
              
            />
          </div>

          <div className="flex-1 min-w-[300px] max-w-[100px]">
            <ImageBanner2
              description=" دار توحيد انتركونتينونتال مكة "
              route="/Hotels"
              image={image12}
            />
          </div>
          <div className="flex-10 w-[600px]">
            <TextBannerr className="self-center" />
          </div>

              <div className="flex-1 min-w-[1500px] max-w-[1000px]">
              


            <ImageBanner3 
          
              description="    إكتشف الإقامة المثالية في وجهاتنا الفريدة "
              description1="  فنادقنا ترحب بك في قلب المدينة وروح التاريخ "
              route="/Hotels"
              image={image7}       
              
            />


        
          </div>
          
          
          <h3 className="text-black text-[1.25rem] font-bold font-avenir ml-100">
            إشترك بالنيوزلاتر وتلقى أخر اخبارنا
          </h3>




          <div className="flex justify-between items-center m-5">
  <h3 className="text-black text-[0.75rem] font-bold">
    <span className="text-purple-800">شركة سعودية مرخصة ومعتمدة</span>
  </h3>

  <h3 className="text-black text-[1rem] font-bold">
    <span className="text-purple-800">تواصل معنا</span>
  </h3>
</div>

          <div className="w-full flex items-center justify-between mt-4">

            
            
  {/* Conteneur des images */}
  <div className="w-full flex justify-center">
    
  <Image src={karemTourism42} className="w-[150px] h-[150px]" alt="karemTourism42" />
  </div>


  <div className="flex flex-row space-x-4">

    
    
    <Image src={wizara} className="w-[100px] h-[100px]" alt="wizara" />
    <Image src={markez} className="w-[100px] h-[100px]" alt="markez" />
    <Image src={tijara} className="w-[100px] h-[100px]" alt="tijara" />


    <MediaIcon iconName="instagram" url="https://www.instagram.com/" />
    <MediaIcon iconName="twitter" url="https://x.com/" />
    <MediaIcon iconName="youtube" url="https://www.youtube.com/" />
  </div>

  
</div>
<div className="text-center m-5">
  <h3 className="text-black text-[0.5rem] font-bold flex justify-center items-center m-5">
    <span className="text-gray-500">الرقم الضريبي: 311889896400003</span>
  </h3>

  <div className="flex justify-center space-x-4 mt-3 text-[0.75rem] whitespace-nowrap">
  <span className="text-black cursor-pointer flex items-center space-x-1">
    <span  className="text-black after:content-['|'] after:mx-2" >عربية</span>
  </span> 
  <span className="text-black after:content-['|'] after:mx-2"> الخصوصية</span>
  <span className="text-black after:content-['|'] after:mx-2">الشروط والأحكام</span>
  <span className="text-black after:content-['|'] after:mx-2">تقييم </span>
  <span className="text-black after:content-['|'] after:mx-2">الفنادق</span>
  <span className="text-black after:content-['|'] after:mx-2"> حجوزاتي</span>
  <span>الصفحة الرئيسية</span>




  <div className="relative inline-block text-left">
  <div className="relative inline-block text-left">
  

 
</div>

</div>
</div>

<div className="flex flex-row space-x-4">

    
    
    <Image src={stcpay} className="w-[50px] h-[50px]" alt="stcpay" />
    <Image src={mada} className="w-[50px] h-[50px]" alt="mada" />
    <Image src={master} className="w-[50px] h-[50px]" alt="master" />
    <Image src={visa} className="w-[50px] h-[50px]" alt="visa" />
    <Image src={pay} className="w-[50px] h-[50px]" alt="pay" />



    
  </div>

  <h3 className="text-black text-[0.5rem] font-bold">
    <span className="text-gray-400">   Copyright © 2024 KAREM TOURISM</span>
  </h3>



</div>








          </div>
          

          

          




          <div className="w-full flex flex-wrap gap-4 justify-center mt-10">
          
        </div>



        </div>





      </div>



  );
};

export default HomePage;

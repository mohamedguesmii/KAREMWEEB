import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/images/karemTourism4.png";

const NavBar = ({ color }) => {
  const links = [
    {
      id: 1,
      title: "الصفحة الرئيسية",
      url: "/",
    },
    {
      id: 2,
      title: "حجوزاتي",
      url: "/Reservations",
    },
    {
      id: 3,
      title: "اتصل بنا",
      url: "/Callus",
    },
    {
      id: 4,
      title: "الفنادق",
      url: "/Hotels",
    },
    {
      id: 5,
      title: "حولنا",
      url: "/Aroundus",
    },
  ];

  return (
    <div className="w-screen h-full p-10 items-center" style={{ color: color }}>
      <div className="w-full flex flex-row items-center justify-evenly">
        <Image src={Logo} className="w-[200px] h-[200px]" alt="Logo" />
        <ul>
          <div className="flex gap-[100px] flex-row text-center">
            {links.map((link) => (
              <Link key={link.id} href={link.url} className="font-bold">
                {link.title}
              </Link>
            ))}
            <div>
              <Link href="/" className="font-bold">
                عربي
              </Link>
            </div>
            <Link href="/">
            <div className="flex items-center w-[160px] h-10 text-center rounded-3xl mr-20" style={{ backgroundColor: '#d2b48c' }}>
               <p className="mx-auto">تسجيل الدخول</p>
          </div>

            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
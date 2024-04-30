import { useState, useEffect } from "react";

import { PiPlantFill } from "react-icons/pi";
import { FaWeightHanging } from "react-icons/fa";
import { CiLineHeight } from "react-icons/ci";
import { TbWeight } from "react-icons/tb";
import { MdOutlineHealthAndSafety, MdTabUnselected } from "react-icons/md";
import heroImg1 from "../assets/Metallic-Coloured-Plant-Pots-removebg-preview.png";
import heroImg2 from "../assets/live-monstera-6-in-white-ceramic-pot-removebg-preview.png";
import heroImg3 from "../assets/istockphoto-1372896722-612x612-removebg-preview.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const tabs = [
    {
      title: "Moss",
      img: heroImg1,
      weight: "12 cm",
      height: "4 kg",
      diameter: "8 cm",
    },
    {
      title: "Apple",
      img: heroImg2,
      weight: "12 cm",
      height: "4 kg",
      diameter: "8 cm",
    },
    {
      title: "Bambo",
      img: heroImg3,
      weight: "12 cm",
      height: "4 kg",
      diameter: "8 cm",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const [isClicked, setIsClicked] = useState(false);

  /*  const handleClick = () => {
    setIsClicked(!isClicked);
  }; */
  useEffect(() => {
    setIsClicked(true);
  }, [selectedTab]);
  console.log(isClicked);

  return (
    <>
      <div className="text-black flex-col   w-[100vw]  px-[10rem] mt-[70px] flex lg:flex-row items-center justify-between">
        <div className="w-[100vw]  lg:w-[50%] px-[2rem]">
          <motion.h1
            className=" text-[4rem] leading-[80px] lg:text-[6rem] lg:leading-[100px] font-[Inter] "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: -10, opacity: 1, transition: { duration: 0.6 } }}>
            Green <span className="text-green-600 shadow-2xl rounded-lg ">plants</span> for green
            planet
          </motion.h1>

          <h4 className="mt-[50px] font-[Inter] text-[20px]">
            We are delighted to show you our finest collection of terrariums made only for you. As
            part of our goal to spread the culture of agriculture and its role in different aspects
            of our life.
          </h4>
          <div className="mt-5 flex gap-6 items-center">
            <button className="bg-teal-900 rounded-lg text-white px-4 py-3 hover:bg-teal-800 flex items-center gap-3 shadow-xl">
              Order Now <FaArrowAltCircleRight className="text-[20px]" />
            </button>
            <p className="flex items-center gap-1 text-green-900 cursor-pointer">
              <IoMdArrowDroprightCircle className="text-[25px] text-green-900" />
              See how it works
            </p>
          </div>
        </div>
        <div className="relative ">
          <div className="filter drop-shadow-lg w-[500px] ">
            <motion.img
              initial={{ y: 0, opacity: 1 }}
              whileInView={{ y: -10, opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={selectedTab && selectedTab.img}
              width="600px"
              height="auto"
            />
          </div>
          <div className="absolute top-[50%] right-[65%]  filter drop-shadow-lg  p-2 ">
            <p className="font-bold mb-3 text-green-900">{selectedTab.title}</p>
            <p className="flex items-center gap-2 text-green-700">
              <TbWeight />
              Weight
            </p>
            <p className="ml-10 mb-3 font-semibold text-green-700"> {selectedTab.weight}</p>
            <p className="flex items-center gap-2 text-green-700">
              <CiLineHeight />
              Height
            </p>
            <p className="ml-10 mb-3 font-semibold text-green-700"> {selectedTab.height}</p>
            <p className="flex items-center gap-2 text-green-700">
              <MdOutlineHealthAndSafety />
              Diameter
            </p>
            <p className="ml-10 font-semibold text-green-700"> {selectedTab.diameter}</p>
          </div>
          {/*  <div className="absolute top-[150px] right-0  flex flex-col gap-y-3 filter drop-shadow-lg opacity-80">
            <a
              onClick={() => setSelectedTab(samples[1])}
              className={`border-[1px] border-teal-700 cursor-pointer rounded-t-[40px] `}>
              <img src={heroImg2} width="100px" height="auto" />
            </a>
            <a
              onClick={() => setSelectedTab(samples[0])}
              className={`border-[1px] border-teal-700 cursor-pointer rounded-t-[40px]`}>
              <img src={heroImg1} width="100px" height="auto" />
            </a>
            <a
              onClick={() => setSelectedTab(samples[2])}
              className={`border-[1px] border-teal-700 cursor-pointer rounded-t-[40px]`}>
              <img src={heroImg3} width="100px" height="auto" />
            </a>
          </div> */}
          <ul className="w-[80px] absolute top-[150px] right-6 lg:right-0  flex flex-col gap-y-3 filter drop-shadow-lg ">
            {tabs.map((item) => (
              <li
                onClick={() => {
                  setSelectedTab(item);
                  setIsClicked(false);
                }}
                className="border-[1px] border-teal-700 cursor-pointer rounded-t-[40px]">
                {item.title === selectedTab.title ? (
                  <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    src={item.img}
                    width="100px"
                    height="auto"
                    className="opacity-50"
                  />
                ) : (
                  <img src={item.img} width="100px" height="auto opacity-100" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

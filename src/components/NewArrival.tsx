"use client"

import Data from "@/utils/productData";
import { Whisper } from "next/font/google"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/utils/interface";
import { shuffleArrayTwo, tabsData } from "@/utils/utilities";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const NewArrival = () => {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    setData(shuffleArrayTwo(Data).slice(0, 15));
  }, []);

  const handleTab = (index: number) => {
    const category = tabsData[index].toLowerCase();
    setSelectedTab(index);

    if (category === "all") {
      setData(shuffleArrayTwo(Data).slice(0, 15));
      return;
    }

    const filteredData = Data.filter((item) =>
      item.category.includes(category)
    );
    setData(shuffleArrayTwo(filteredData));
  }

  return (
    <div className="container pt-32">
      <div className="text-center">
        <h3 className={`${whisper.className} text-[40px] text-gray-500`}>
          For your beauty
        </h3>
        <h2 className="font-semibold text-5xl">New Arrival</h2>
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center 
          pt-8 uppercase font-medium text-xl"
        >
          {tabsData.map((text, index) => (
            <li
              key={text}
              className={`${selectedTab === index && "text-accent"} cursor-pointer hover:text-accent pb-20`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.map((item: IProduct, index: number) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
             />
          ))}
        </div>

      </div>
    </div>
  )
}

export default NewArrival
import { Whisper } from "next/font/google";
import CategoryCard from "./CategoryCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const data = [
  {
    img: "/images/product__3.jpg",
    type: "Makeup",
    quantity: "(4 Items)",
  },
  {
    img: "/images/product__15.webp",
    type: "Nail & Wax",
    quantity: "(8 Items)",
  },
  {
    img: "/images/product__19.webp",
    type: "Skincare",
    quantity: "(6 Items)",
  },
];

const Category = () => {
  return (
    <div className="bg-[url(/images/cate__bg.png)] bg-no-repeat py-16 mt-32">
      <div className="container text-center text-white">
        <h3 className={`${whisper.className} text-[40px]`}>
          Favorite category
        </h3>
        <h2 className="text-[40px] font-medium">Top Category</h2>

        <div className="flex justify-center gap-4 md:gap-16 pt-8">
          {data.map((item) => (
            <CategoryCard
              key={item.type}
              img={item.img}
              type={item.type}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
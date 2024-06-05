import React, { useState } from "react";

import expandOptionsRed from "../../images/expandOptionsRed.png";
import hairCare from "../../images/hairCare.png";
import bodyCare from "../../images/bodyCare.png";
import Card from "../Helpers/Card";
import FooterProductList from "./FooterProductList";
import { globalContext } from "../../ContextCopy";
import Star from "../../images/1star.png";
import MultiThumbSlider from "./MultiThumbSlider";

import "./ProductList.css";
const Product_list = () => {
  const { PrebookMealData } = globalContext();
  const {
    PrebookMealSample1,
    PrebookMealSample2,
    PrebookMealSample3,
    PrebookMealSample4,
    PrebookMealSample5,
  } = PrebookMealData;

  const preBookMeal = [
    PrebookMealSample1,
    PrebookMealSample2,
    PrebookMealSample3,
    PrebookMealSample4,
    PrebookMealSample5,
  ];

  const [brandList, setBrandList] = useState([
    "IL PLUS+",
    "Alpha Skincare",
    "BaByliss",
    "Bare For Bare",
    "Baylis & Harding",
    "Beard.On",
    "Beaver Profession...",
    "Body Breakfast",
    "Cerave",
    "Claire Oraganics",
    "Dove",
    "Eucerin",
    "Garnier",
    "Gillette",
    "Head & Shoulders",
    "Herbal Essences",
    "L'Oreal",
    "Neutrogena",
    "Nivea",
    "Old Spice",
    "Olay",
    "Pantene",
    "Pureology",
    "Schwarzkopf",
    "TRESemmé",
  ]);

  const [checkedBrandList, setCheckedBrandList] = useState("");
  const handleOnCheckBrand = (event) => {
    const brandName = event.target.value;
    const isChecked = event.target.checked;

    // If the brand is checked, add it to the list
    if (isChecked) {
      setCheckedBrandList([...checkedBrandList, brandName]);
    } else {
      // If the brand is unchecked, remove it from the list
      setCheckedBrandList(
        checkedBrandList.filter((brand) => brand !== brandName)
      );
    }
  };
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(true);

  const handleOnClickExpandSidebar = () => {
    return setIsSideBarExpanded(!isSideBarExpanded);
  };
  return (
    <div className="bg-productList min-h-screen w-screen relative pt-5">
      <div className="pl-28 pt-5"> Home &gt; Hair & Body </div>
      {/* Main div*/}
      <div className="mt-5 space-x-5 flex flex-row pl-28 pr-10">
        {/* The Sidebar*/}
        <div className="bg-white flex flex-col min-w-[350px] h-[1082px] rounded-[16px] space-y-10 text-[20px]">
          <span className="font-bold text-red-500 pl-5"> Khoảng giá</span>
          <div className="flex flex-col pl-5 font-bold">
            <MultiThumbSlider />
          </div>

          <div
            className={`border  border-l-0 border-r-0 ${
              isSideBarExpanded ? "border-b-gray-300" : "border-b-0"
            } pt-5 border-t-gray-300 pl-5 space-y-5`}
          >
            <div className="flex items-center relative">
              <span className="font-bold text-red-500"> Brands </span>
              <img
                src={expandOptionsRed}
                className="w-3 h-3 absolute right-3 cursor-pointer"
                onClick={() => handleOnClickExpandSidebar()}
              />
            </div>
            {isSideBarExpanded && (
              <div className="scroll-container h-[30rem] overflow-y-scroll bg-white scrollbar-thin">
                <div className="">
                  <ul className="space-y-5 ">
                    {brandList.map((brand, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 pl-2"
                      >
                        <input
                          id="brand"
                          name="brand"
                          type="checkbox"
                          style={{
                            transform: "scale(1.7)",
                            WebkitTransform: "scale(1.7)" /* For Safari */,
                            MozTransform: "scale(1.7)" /* For Firefox */,
                          }}
                          value={brand}
                          onChange={(event) => handleOnCheckBrand(event)}
                        />
                        <label
                          htmlFor="brand"
                          className={`${
                            checkedBrandList.includes(brand) ? "font-bold" : ""
                          }`}
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div>
            <span className="font-bold text-red-500 pl-5"> Đánh giá </span>
            <div className="flex flex-wrap p-2 ">
              <div className="rounded-[23px] mr-1 border border-gray-200  w-[5rem] h-[2rem] flex justify-center items-center">
                <img src={Star} className="w-5 h-5" />
                <span> 1 </span>
              </div>

              <div className="rounded-[23px] mr-1 border border-gray-200 w-[5rem] h-[2rem] flex justify-center items-center">
                <img src={Star} className="w-5 h-5" />
                <span> 2 </span>
              </div>

              <div className="rounded-[23px] mr-1 border border-gray-200 w-[5rem] h-[2rem] flex justify-center items-center">
                <img src={Star} className="w-5 h-5" />
                <span> 3 </span>
              </div>

              <div className="rounded-[23px] border border-gray-200 w-[5rem] h-[2rem] flex justify-center items-center">
                <img src={Star} className="w-5 h-5" />
                <span> 4 </span>
              </div>

              <div className="rounded-[23px]  mt-2 border border-gray-200 w-[5rem] h-[2rem] flex justify-center items-center">
                <img src={Star} className="w-5 h-5" />
                <span> 5 </span>
              </div>
            </div>
          </div>
        </div>

        {/* The list of products*/}
        <div className="space-y-5">
          <div className="flex space-x-[23rem]">
            <span className="text-[30px] font-bold">Làm đẹp & Sức khỏe </span>
            <div className="flex justify-center items-center space-x-3">
              <span> Sort by:</span>
              <div className="flex relative">
                <select className="appearance-none bg-productList border-[2px] w-[190px] h-[35px] flex relative  pl-2 rounded-[32px] border-solid border-">
                  <option value="SmallestToLargest">Giá từ Thấp - Cao</option>
                  <option value="LargestToSmallest">Giá từ Cao - Thấp</option>
                </select>
                <img
                  src={expandOptionsRed}
                  className="w-3 h-2 absolute right-2 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <span className="text-[12px] text-gray-500">
            13 items found for "Hair & Body"
          </span>

          <div className="flex">
            <img src={hairCare} className="w-28" />
            <img src={bodyCare} className="w-28" />
          </div>

          {/* Items range by 4x3*/}
          <div className="grid grid-cols-4 gap-y-5 gap-x-3 ">
            <Card sample={PrebookMealSample1} />
            <Card sample={PrebookMealSample2} />
            <Card sample={PrebookMealSample3} />
            <Card sample={PrebookMealSample4} />
            <Card sample={PrebookMealSample5} />
            <Card sample={PrebookMealSample1} />
            <Card sample={PrebookMealSample2} />
            <Card sample={PrebookMealSample3} />
            <Card sample={PrebookMealSample4} />
            <Card sample={PrebookMealSample5} />
            <Card sample={PrebookMealSample4} />
            <Card sample={PrebookMealSample5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_list;

// Card.jsx

import React from "react";
import starLogo from "../../images/1star.png";
import dutyFreeLogo from "../../images/dutyFreeLogo.png";
import bestSale from "../../images/bestSale.png";
import { NavLink } from "react-router-dom";
const Card = ({ data }) => {
  
  
  return (
    <NavLink
      to={`/ProductDetail`}
      state={{ data: data }}
      className="max-w-[230px] px-2 py-4  z-30 flex flex-shrink-0 flex-col rounded-[8px] bg-white items-center relative"
    >
      {/* Just don't put h- here, it will automatically increase height to fix*/}
      {data.isBestSale && (
        <img
          src={bestSale}
          className="w-20 h-10 absolute left-[-0.5rem] top-[0.5rem]"
        /> /* For the "Best Sale" label, we use absolute here so that its position don't be affected by the other divs*/
      )}
      <img src={data.image} className="w-screen h-[180px] rounded-[3px]" />
      <div className="flex flex-col">
        {data.isDutyFree && (
          <div className="flex flex-row items-center space-x-1">
            <img src={dutyFreeLogo} className="w-5 h-5 mb-1" />
            <span className="text-[11px] text-dutyFree"> Duty Free</span>
          </div>
        )}
        <span className="text-[12px] mt-1 text-brand"> {data.brand}</span>
        <span className="text-[13px] mt-1 font-bold"> {data.name}</span>
        <span className="text-brand mt-1 text-[12px]"> {data.origin}</span>
        <div className="flex flex-row mt-4 relative">
          <div className="flex flex-col">
            <span className="text-salePrice font-bold">
              {data.salePrice.toLocaleString(undefined, {})}đ
            </span>
            <span className="line-through text-[12px] text-brand">
              {data.originalPrice} đ
            </span>
          </div>
          <div className="w-[4.5rem] h-7 absolute right-2 top-1/2 transform -translate-y-1/2 text-[13px] rounded-[5px] bg-gradient-to-br from-salePercentFrom via-salePercentVia to-salePercentTo text-salePercent flex items-center justify-center">
            <span>{data.salePercent} off</span>
          </div>
        </div>
        <div className="flex mt-5  flex-row text-[12px] text-brand">
          <div className="flex space-x-1 items-center relative">
            <div className="flex space-x-1 pb-[0.1rem]  min-w-fit">
              <img
                src={starLogo}
                className="w-3 h-3"
                style={{ backgroundSize: "25%" }}
              />
              <img
                src={starLogo}
                className="w-3 h-3"
                style={{ backgroundSize: "25%" }}
              />
              <img
                src={starLogo}
                className="w-3 h-3"
                style={{ backgroundSize: "25%" }}
              />
              <img
                src={starLogo}
                className="w-3 h-3"
                style={{ backgroundSize: "25%" }}
              />
              <img
                src={starLogo}
                className="w-3 h-3"
                style={{ backgroundSize: "25%" }}
              />
            </div>
            <span className=""> ({data.reviewCount})</span>
          </div>
          <span className="ml-5"> Đã bán {data.soldUnits} </span>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;

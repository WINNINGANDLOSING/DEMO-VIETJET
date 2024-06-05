import React from "react";
import phoneCallLogo from "../images/phoneCallLogo.png";
import thongBaoLogo from "../images/thongBaoLogo.png";
import trungTamTroGiupLogo from "../images/trungTamTroGiupLogo.png";
import globeLogo from "../images/globeLogo.png";
import personLogo from "../images/personLogo.png";
import vietJetAirLogo from "../images/vietJetAirLogo.png";
import deliveryMethodLogo1 from "../images/deliveryMethodLogo1.png";
import deliveryMethodLogo2 from "../images/deliveryMethodLogo2.png";
import searchLogo from "../images/searchLogo.png";
import cartLogo from "../images/cartLogo.png";
import { useNavigate } from "react-router-dom";
import searchByCategories from "../images/sortByCategories.png";
import muaVeLogo from "../images/muaVeLogo.png";
import skyShopLogo from "../images/skyShopLogo.png";
import khachSanLogo from "../images/khachSanLogo.png";
import skyHolidayLogo from "../images/skyHolidayLogo.png";
import thueXeLogo from "../images/thueXeLogo.png";
import baoHiemLogo from "../images/baoHiemLogo.png";

// min-w-fit: Makes the child element just wide enough to fit its content inside its parent container. It won't be wider than needed.

// min-w-max: Makes the child element as wide as its parent container allows. It can be as wide as the parent container, but not wider.

// min-w-min: Sets a minimum width for the child element. It ensures the child won't become narrower than this minimum width, even if its content is smaller.

// min-w-full: Makes the child element fill the entire width of its parent container. It stretches to be as wide as its parent.
const Header = () => {
  let navigate = useNavigate();
  return (
    
    <header className="w-screen overflow-x-hidden overflow-y-hidde">
      {/* Top Bar */}
      {/* The first row of the header*/}
      <div className="bg-red-700 text-white py-2 flex justify-between items-center px-28">
        <div className="flex items-center">
          <img src={phoneCallLogo} className="" />
          <span className="ml-5">19001886</span>
        </div>
        {/* 
          
            The last four; space-x-4 applies margin-right: 1rem; to all child elements except the last one.
            the 4 is '1rem' or '16px'
           */}
        <div className="flex space-x-10">
          <span className="flex items-center">
            <img src={thongBaoLogo} className="mr-1 h-5 w-5" />
            <p>Thông báo</p>
          </span>
          <span className="flex items-center">
            <img src={trungTamTroGiupLogo} className="mr-1 h-5 w-5" />
            <p>Trung tâm trợ giúp</p>
          </span>
          <span className="flex items-center">
            <img src={globeLogo} className="mr-1 h-5 w-5" />
            <p>Tiếng Việt</p>
          </span>
          <span className="flex items-center">
            <img src={personLogo} className="h-5 w-5" />
            <p>Đăng ký / Đăng nhập</p>
          </span>
        </div>
      </div>
      {/* The second row of the header */}
      {/* use px-20 because the red background must be from start to finish, content is 5rem from left*/}
      <div className="bg-red-600 text-white flex items-center px-28 py-5">
        <img src={vietJetAirLogo} className="h-8 cursor-pointer appearance-none outline-none" onClick={() => {navigate(``)}} />
        {/* Delivery Method container*/}
        <div className="flex items-center ml-8 pl-3 bg-red-700 min-w-80 min-h-10 rounded-lg">
          <img src={deliveryMethodLogo1} className="w-5 h-5" />
          <select className="text-white pl-2 outline-none appearance-none  bg-red-700 h-6">
            <option value="" disabled selected>
              Delivery Method
            </option>
            <option value="inflightPickup">Inflight Pickup</option>
            <option value="homeDelivery">Home Delivery</option>
            <option value="airport">Airport / In-store pick-up</option>
            <option></option>
          </select>
          <img src={deliveryMethodLogo2} className="ml-14 w-6 h-6" />
        </div>
        {/* Search container*/}
        <div className="flex bg-white items-center ml-8 pl-3 min-w-160 min-h-10 rounded-lg">
          <input
            placeholder="Tìm kiếm theo tên sản phẩm, hãng, cửa hàng"
            type="text"
            className="w-96 appearance-none text-black outline-none flex-grow"
          ></input>
          <img src={searchLogo} className="w-10 h-8 mr-2" />
        </div>
        {/* cart logo*/}
        <img src={cartLogo} className="w-10 h-10 ml-8 cursor-pointer" onClick={() => {navigate(`/CartStage1`);}}/>
      </div>
      {/* The third row (the biggest one)*/}
      <div className="flex ml-28 bg-white">
        <img
          src={searchByCategories}
          className="w-15  h-12"
          alt="Search By Categories"
        />
        {/* Linh Tinh*/}
        <div className="flex ml-5 space-x-8 text-[14px]">
          {/* Adjust margin here */}
          <span className="flex items-center">
            <img src={muaVeLogo} className="h-5 w-5 mr-2" />
            <p>Mua vé</p>
          </span>
          <span className="flex items-center">
            <img src={skyShopLogo} className="h-5 w-5 mr-2" />
            <p className="text-red-500"> Skyshop</p>
          </span>
          <span className="flex items-center">
            <img src={khachSanLogo} className="h-5 mr-2" />
            <p>Khách sạn</p>
          </span>
          <span className="flex items-center">
            <img src={skyHolidayLogo} className="h-5 w-5 mr-2" />
            <p>Sky holiday (Chuyến bay + Khách sạn)</p>
          </span>
          <span className="flex items-center">
            <img src={thueXeLogo} className="h-5 w-5 mr-2" />
            <p>Thuê xe/Phương tiện đi lại</p>
          </span>
          <span className="flex items-center">
            <img src={baoHiemLogo} className="h-5 w-5 mr-2" />
            <p>Bảo hiểm</p>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

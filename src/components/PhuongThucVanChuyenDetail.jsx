import React, { useState, useRef, useEffect } from "react";
import yellowWarning from "../images/yellowWarning.png";
import expandOptions from "../images/expandOptions.png";
import calendar from "../images/calendar.png";
import { NavLink, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import yourAddress from "../images/yourAddress.png";
import "react-datepicker/dist/react-datepicker.css";

const PickupDetail = () => {
  let location = useLocation();
  const pickupType = location.state.pickupType;
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const dateInputRef = useRef(null);

  const handleOnChangeDate = (date) => {
    setSelectedDate(date);
  };

  const handleOnClickDatePicker = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
    // if(dateInputRef.current){
    //   dateInputRef.current.click();
    // }
  };

  useEffect(() => {
    if (isDatePickerVisible === true) {
    } else if (isDatePickerVisible === false) {
    }
  }, [isDatePickerVisible]);

  const handleOutsideClick = (event) => {
    if (dateInputRef.current && !dateInputRef.current.contains(event.target)) {
      setIsDatePickerVisible(false);
    }
  };

  return (
    <div
      className="bg-pickupDetail w-screen h-screen flex px-28 pt-14 justify-center"
      onClick={handleOutsideClick}
    >
      {pickupType === "homeDelivery" && (
        <div className="bg-white h-[500px] w-screen flex flex-col pt-12 space-y-5">
          <span className="font-bold text-[30px] pl-32">
            Thêm địa chỉ giao hàng
          </span>
          <div className="flex space-x-2 items-center pl-32">
            <img src={yellowWarning} className="w-5 h-5" />
            <span>
              Chúng tôi sẽ cần số đặt chỗ của bạn để nhận hàng trên chuyến bay.
              Bạn chưa có?
            </span>
            <NavLink className="text-[10px] text-blue-500 appearance-none">
              Thay đổi phương thức vận chuyển
            </NavLink>
          </div>

          <div className="flex flex-row space-x-20 justify-center">
            <div className="flex flex-col space-y-2">
              <input
                className="pl-3 flex w-[450px] h-12 rounded-[8px] placeholder-placeholder text-black bg-gray-100 outline-none "
                placeholder="Address nickname"
              />
              <div className="flex relative">
                <input
                  className="pl-3 flex w-[450px] h-12 rounded-[8px] placeholder-placeholder text-black bg-gray-100  outline-none "
                  placeholder="Your address"
                />
                <img
                  src={yourAddress}
                  className="w-6 h-6 absolute top-1/2 right-5 transform -translate-y-1/2"
                />
              </div>

              <div className="flex relative">
                <input
                  className="pl-3 flex w-[450px] h-12 rounded-[8px] text-black placeholder-placeholder bg-gray-100  outline-none "
                  placeholder="House number, unit number, block"
                />
                <img
                  src={expandOptions}
                  className="w-6 h-6 absolute top-1/2 right-5 transform -translate-y-1/2"
                />
              </div>

              <div className="flex space-x-2">
                <input
                  className="pl-3 flex w-[160px] h-12 rounded-[8px] placeholder-placeholder text-black bg-gray-100  outline-none "
                  placeholder="Postal code"
                />
                <input
                  className="pl-3 flex w-[280px] h-12 rounded-[8px] placeholder-placeholder text-black bg-gray-100  outline-none "
                  placeholder="City/state"
                />
              </div>

              <div className="flex w-32 rounded-[8px] bg-gray-100"></div>
            </div>

            <div className="flex flex-col space-y-2">
              <input
                className="pl-3 flex w-[450px] h-12 rounded-[8px] placeholder-placeholder text-black bg-gray-100 outline-none "
                placeholder="Condo, Apartment, Street address"
              />

              <input
                className="pl-3 flex w-[450px] h-12 rounded-[8px] placeholder-placeholder text-black bg-gray-100 outline-none "
                placeholder="House number, unit number, block"
              />

              <div className="flex space-x-2">
                <div className="flex relative">
                  <select className="w-[160px] outline-none pl-3 text-placeholder bg-gray-100 appearance-none ">
                    <option value="MY60"> MY (+60)</option>
                  </select>
                  <img
                    src={expandOptions}
                    className="w-6 h-6 absolute top-1/2 right-5 transform -translate-y-1/2"
                  />
                </div>
                <input
                  className="pl-3 flex w-[280px] h-12 rounded-[8px] text-black placeholder-placeholder bg-gray-100 outline-none "
                  placeholder="Mobile number"
                />
              </div>

              <div className="flex w-32 rounded-[8px] bg-gray-200"></div>
            </div>
          </div>

          {/* salePercentFrom: "#F9A51A",
        salePercentVia: "#FBB612",
        salePercentTo: "#FFDD00",*/}
          <NavLink
            className="flex items-center justify-center z-30 appearance-none self-center bg-custom-gradient w-[450px] rounded-[8px] h-[55px] text-pickupFrom font-bold transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
            to={`/PhuongThucVanChuyen/PhuongThucVanChuyenDetail/PhuocThuocVanChuyenFinal`}
          >
            Bắt đầu mua sắm
          </NavLink>
        </div>
      )}

      {pickupType === "airport" && (
        <div className="bg-white h-[450px] w-screen flex flex-col pt-12 space-y-5 items-center">
          <span className="font-bold text-[30px]">
            Airport / In-store pick-up
          </span>
          <div className="flex space-x-2">
            <img src={yellowWarning} className="w-5 h-5" />
            <span className="text-[14px]">
              Duty-free items only available for international flights.
            </span>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex flex-col bg-gray-100 w-[450px] h-[45px] items-centerr pl-2 rounded-[8px] relative">
              <span className="text-[10px] text-pickupFrom">Pick-up from</span>
              <select className="appearance-none outline-none bg-gray-100 w-full">
                <option value="">Kuala Lumpur (SZB)</option>
                <option value="HCMCITY">Ho Chi Minh City</option>
                <option value="HaNoi">Ha Noi</option>
              </select>
              <img
                src={expandOptions}
                className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <div className="flex bg-gray-100 w-[450px] h-[45px] items-center pl-2 rounded-[8px] relative">
              <select className="appearance-none bg-gray-100 outline-none w-full">
                <option value="" disabled selected>
                  Do you have a flight?
                </option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
              <img
                src={expandOptions}
                className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <div className="flex bg-gray-100 w-[450px] outline-none h-[45px] items-center pl-2 pr-10 rounded-[8px] relative">
              {!selectedDate && <span> Estimated pick-up time</span>}
              {selectedDate && (
                <span> {selectedDate.toLocaleDateString()}</span>
              )}

              <button
                onClick={handleOnClickDatePicker}
                src={calendar}
                className="w-5 h-5 absolute z-40 right-5 top-1/2 transform -translate-y-1/2"
              >
                <img src={calendar} />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => handleOnChangeDate(date)}
                  onClickOutside={handleOnClickDatePicker}
                  open={isDatePickerVisible}
                  className="w-5 h-5 opacity-0 z-40 absolute right-5 top-1/2 transform -translate-y-1/2"
                ></DatePicker>
              </button>
            </div>

            <NavLink
              className="flex items-center justify-center z-30 appearance-none self-center bg-custom-gradient w-[450px] rounded-[8px] h-[55px] text-pickupFrom font-bold transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
              to={`/PhuongThucVanChuyen/PhuongThucVanChuyenDetail/PhuocThuocVanChuyenFinal`}
            >
              Bắt đầu mua sắm
            </NavLink>

            <NavLink className="text-[10px] flex self-center text-blue-500 appearance-none">
              Thay đổi phương thức vận chuyển
            </NavLink>
          </div>
        </div>
      )}

      {pickupType === "inflightPickup" && (
        <div className="bg-white h-[450px] w-screen flex flex-col pt-12 space-y-5 items-center">
          <span className="font-bold text-[30px]">Inflight pick-up</span>
          <div className="flex space-x-2">
            <span className="text-[14px]">
              We’ll need your booking number for inflight pick-up. Don’t have
              one? Change your delivery method.
            </span>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex flex-col bg-gray-100 w-[450px] h-[45px] justify-center pl-2 rounded-[8px] relative">
              <input
                className="bg-gray-100 flex outline-none"
                placeholder="Flight booking number"
              />
            </div>
            <div className="flex bg-gray-100 w-[450px] h-[45px] items-center pl-2 rounded-[8px] relative">
              <select className="appearance-none bg-gray-100 outline-none w-full">
                <option value="" disabled selected>
                  Departure city
                </option>
                <option value="HCMCity">Ho Chi Minh City</option>
                <option value="HaNoi">Ha Noi</option>
                <option value="NgheAn">Nghe An</option>
              </select>
              <img
                src={expandOptions}
                className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <div className="flex flex-col bg-gray-100 w-[450px] h-[45px] justify-center pl-2 rounded-[8px] relative">
              <input
                placeholder="First name / sur name"
                className="bg-gray-100 flex outline-none"
              />
            </div>

            <NavLink
              className="flex items-center justify-center z-30 appearance-none self-center bg-custom-gradient w-[450px] rounded-[8px] h-[55px] text-pickupFrom font-bold transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
              to={`/PhuongThucVanChuyen/PhuongThucVanChuyenDetail/PhuocThuocVanChuyenFinal`}
            >
              Bắt đầu mua sắm
            </NavLink>

            <NavLink className="text-[10px] flex self-center text-blue-500 appearance-none">
              Thay đổi phương thức vận chuyển
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default PickupDetail;

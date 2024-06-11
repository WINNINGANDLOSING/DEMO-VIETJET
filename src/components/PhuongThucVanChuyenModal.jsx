import { useState } from "react";
import inflightPickup from "../images/inFlightPickup.png";
import homeDelivery from "../images/homeDelivery.png";
import airportInstorePickup from "../images/airportInstorePickup.png";
import bodyPrebookMealVienVang from "../images/bodyPrebookMealVienVang.png";
import exitModal from "../images/exitModal.png";
import { NavLink } from "react-router-dom";
import "./PhuongThucVanChuyenModal.css";

const PhuongThucVanChuyenModal = ({ isOpenModal, handleOnClickQuitModal }) => {
  if (!isOpenModal) {
    return null;
  }

  const [selectedOption, setSelectedOption] = useState("");
  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className="fixed inset-0 font-KoHo bg-gray-400 text-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-prebookMeal p-10 rounded-[8px] relative w-[700px] h-[500px] flex flex-col items-center">
        <button
          onClick={() => handleOnClickQuitModal()}
          className="absolute top-2 right-2 flex items-center text-center justify-center"
          style={{
            backgroundImage: `url(${exitModal})`,
            width: "32px",
            height: "32px",
            backgroundSize: "cover",
          }}
        >
        </button>

        <span className="text-[30px] font-KoHo font-bold">
          Chọn phương thức vận chuyển
        </span>
        <span className="text-[14px] mt-3">
          Chúng tôi sẽ hiển thị các sản phẩm phù hợp với phương thức giao hàng
          của bạn
        </span>

        {/* 3 phuong thuc van chuyen*/}
        <div className="flex flex-col space-y-5 mt-10">
          {/* Inflight pick-up*/}
          <div
            className="flex flex-row space-x-14 items-center"
            onClick={() => handleCheckboxChange("inflightPickup")}
          >
            <input
              type="checkbox"
              id="phuongthuc1"
              name="phuongthuc1"
              value="inflightPickUp"
              checked={selectedOption === "inflightPickup"}
              className="appearance-none w-5 h-5  rounded-full border-white border-solid border-[2px] cursor-pointer checked:bg-custom-gradient"
            />
            <label
              htmlFor="phuongthuc1"
              className="flex items-center space-x-5"
            >
              <img src={inflightPickup} className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold"> Inflight pick-up</span>
                <span> Pick up your order on your flight </span>
              </div>
            </label>
          </div>

          {/* Home Delivery*/}
          <div
            className="flex flex-row space-x-14 items-center"
            onClick={() => handleCheckboxChange("homeDelivery")}
          >
            <input
              type="checkbox"
              id="phuongthuc2"
              name="phuongthuc2"
              value="homeDelivery"
              checked={selectedOption === "homeDelivery"}
              className="appearance-none w-5 h-5  rounded-full border-white border-solid border-[2px] cursor-pointer checked:bg-custom-gradient"
            />
            <label
              htmlFor="phuongthuc2"
              className="flex items-center space-x-5"
            >
              <img src={homeDelivery} className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold"> Home delivery</span>
                <span> Get your order delivered to your place </span>
              </div>
            </label>
          </div>

          {/* Airport / In-store pick-up */}
          <div
            className="flex flex-row space-x-14 items-center"
            onClick={() => {
              handleCheckboxChange("airport");
            }}
          >
            <input
              type="checkbox"
              id="phuongthuc3"
              name="phuongthuc3"
              value="airport"
              checked={selectedOption === "airport"}
              className="appearance-none w-5 h-5  rounded-full border-white border-solid border-[2px] cursor-pointer checked:bg-custom-gradient"
            />
            <label
              htmlFor="phuongthuc3"
              className="flex items-center space-x-5"
            >
              <img src={airportInstorePickup} className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold"> Airport / In-store pick-up</span>
                <span> Pick up your order at the airport / in-store</span>
              </div>
            </label>
          </div>
        </div>

        {/* Bat dau mua sam*/}

        <NavLink
          className="flex mt-10 items-center z-30 appearance-none justify-center bg-custom-gradient  w-[450px] rounded-[8px] h-[50px] text-pickupFrom font-bold transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
          to={`/PhuongThucVanChuyen/PhuongThucVanChuyenDetail`}
          state={{ pickupType: JSON.parse(JSON.stringify(selectedOption)) }}
        >
          Bắt đầu mua sắm
        </NavLink>

        {/* Vien Vang*/}
        <img
          src={bodyPrebookMealVienVang}
          className="absolute bottom-0 z-10 right-0 w-[30rem] h-[15rem]"
        />

        <img
          src={bodyPrebookMealVienVang}
          // Use scale-x-[-1] to flip it horizontally
          className="absolute bottom-0 z-10 left-0 w-[14rem] h-[8rem] transform scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default PhuongThucVanChuyenModal;

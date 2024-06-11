import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import thanhToanThanhCong from "../../images/thanhToanThanhCong.png";
import thanhToanThanhCongText from "../../images/thanhToanThanhCongText.png";
const FinalCartStage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const finalPrice = location.state.finalPrice;
  return (
    <div className="pt-12 pl-28 pr-16 min-h-screen bg-productList">
      <div className="bg-white flex flex-col pt-20 pb-20 space-y-5 items-center">
        <img src={thanhToanThanhCong} className="w-56" />
        <img src={thanhToanThanhCongText} className="w-52" />
        <div className="flex flex-col text-gray-500 space-y-5 w-[35rem]">
          <div className="text-[15px] min-w-[30rem] border border-b-gray-200 border-l-0 border-r-0 border-t-0 pb-8 justify-between  flex ">
            <span> Mã đơn hàng </span>
            <span className="font-bold text-black"> #JET141424124214 </span>
          </div>

          <div className="text-[15px] min-w-[30rem] border border-b-gray-200 border-l-0 border-r-0 border-t-0 pb-8 justify-between  flex ">
            <span> Phương thức thanh toán </span>
            <span className="font-bold text-black"> VNPay </span>
          </div>

          <div className="text-[15px] min-w-[30rem] border border-b-gray-200 border-l-0 border-r-0 border-t-0 pb-8 justify-between  flex ">
            <span> Phương thức giao hàng </span>
            <div className="flex flex-col text-right">
              <span className="font-bold text-black"> Inflight Pick-up </span>
              <span>The Filght: VJ363 Apr 16, 2023 Eco </span>
              <span> - 18:55 - Da Lat 19:50 - Ho Chi Minh</span>
            </div>
          </div>

          <div className="flex font-bold text-black text-[25px] justify-between">
            <span> Tổng thanh toán </span>
            <span className="text-red-500"> {finalPrice.toLocaleString()} VNĐ </span>
          </div>

          <div
            className="flex rounded-[8px] py-5  text-black font-bold text-[18px] items-center justify-center bg-gradient-to-r from-yellow-500 via bg-yellow-300 to-yellow-200 cursor-pointer transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
            onClick={() => navigate(`/Home`)}
          >
            Tiếp tục mua sắm
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCartStage;

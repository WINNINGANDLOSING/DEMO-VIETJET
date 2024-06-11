import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import thanhToanNgay from "../../images/thanhToanNgay.png";
import thanhToanSau from "../../images/thanhToanSau.png";
import bayTruocTraSau from "../../images/bayTruocTraSau.png";
import visaVietjet from "../../images/visaVietjet.png";

import ThanhToanNgayTab from "./CacPhuongThucThanhToan/ThanhToanNgayTab";
import ThanhToanSauTab from "./CacPhuongThucThanhToan/ThanhToanSauTab";
import BayTruocTraSauTab from "./CacPhuongThucThanhToan/BayTruocTraSauTab";
import BayCoQua from "./CacPhuongThucThanhToan/BayCoQua";
const CartStage2 = () => {
  {
    /* padding top 5 for All*/
  }

  let location = useLocation();
  let totalPrice = location.state.totalPrice;
  let isBoughtFromDutyStore = location.state.isBoughtFromDutyStore;
  let navigate = useNavigate();



  let acceptedVoucherCodes = [
    { code: "231212K", discount: 5000000 },
    { code: "XYZ123", discount: 100000 },
    { code: "GREATSALE", discount: 2000000 },
    { code: "DISCOUNT50", discount: 500000 },
    { code: "SUMMER20", discount: 1500 },
    { code: "SAVEMORE", discount: 30000 },
    { code: "B1G1FREE", discount: 1000 },
    { code: "WELCOME10", discount: 10000 },
    { code: "SPRING25", discount: 250000 },
    { code: "HOLIDAY50", discount: 5000 },
  ];

  const [inputFieldVoucher, SetInputFieldVoucher] = useState("");
  const [isEnteredVoucher, SetIsEnteredVoucher] = useState(false);
  const [voucherHistory, setVoucherHistory] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const [finalPrice, setFinalPrice] = useState(totalPrice - discountValue);
  const handleOnChangeVoucher = (e) => {
    SetInputFieldVoucher(e.target.value);
  };

  const handleEnterVoucher = () => {
    if (inputFieldVoucher === "") {
      window.alert("Please enter your voucher code");
      return null;
    }
    if (
      acceptedVoucherCodes.some(
        (voucherCode) =>
          voucherCode.code.toString() === inputFieldVoucher.toString()
      )
    ) {
      window.alert("Voucher Applied Successfully.");
      const chosenVoucher = acceptedVoucherCodes.find(
        (voucherCode) =>
          voucherCode.code.toString() === inputFieldVoucher.toString()
      );
      setDiscountValue(chosenVoucher.discount);
      setVoucherHistory(inputFieldVoucher);
      SetIsEnteredVoucher(true);
    } else {
      window.alert("Fail to apply voucher.");
    }
    SetInputFieldVoucher("");
  };

  useEffect(() => {
    return setFinalPrice(totalPrice - discountValue);
  }, [discountValue]);

  const handleRemoveVoucher = () => {
    if (
      window.confirm(
        "Are you sure you want to revoke your voucher? This action will cancel all discounts associated with the voucher."
      )
    ) {
      window.alert("Voucher revoked successfully");
      SetIsEnteredVoucher(false);
      setVoucherHistory("");
      setDiscountValue(0);
    }
  };

  let dutyFee = isBoughtFromDutyStore ? 6000 : 0;
  const [currentTab, setCurrentTab] = useState("thanhToanNgay");
  return (
    <div className="pt-5 pl-28 pr-10 min-h-screen bg-productList">
      <span className="text-[14px]"> Home &gt; Cart &gt; Secure Checkout </span>
      <div className="mt-5 flex flex-col ">
        <span className="text-[35px] font-bold"> Secure Checkout </span>
        <span className="text-[25px]"> Airport pick-up details </span>
        <div className="flex space-x-10">
          <div className="space-y-5 mt-5" style={{ width: "70%" }}>
            <div className="bg-white flex p-5 max-w-[60rem] rounded-[8px] flex-col text-[16px]">
              <span className="font-bold"> Airport Pick-up </span>
              <span>Ronald Richards </span>
              <span> Ho Chi Minh International Airport </span>
              <span> Colection time: Wed, 19 Apr 2023 (11:00 AM) </span>
            </div>

            <div className="rounded-[8px] flex flex-col">
              <span className="text-[30px] font-bold">
                Chọn phương thức thanh toán
              </span>
            </div>

            <div className="bg-white max-w-[60rem] rounded-[8px] h-full p-5 flex flex-col space-y-10">
              {/* 4 Phuong thuc thanh toan , mac dinh la Thanh toan ngay*/}

              <div className="flex flex-wrap">
                <div
                  className={`cursor-pointer rounded-[8px] space-x-2 mr-5 font-bold w-64 justify-center border border-solid ${
                    currentTab === "thanhToanNgay"
                      ? "border-red-500 bg-red-100"
                      : "border-gray-300"
                  } h-16 px-5 flex items-center`}
                  onClick={() => setCurrentTab("thanhToanNgay")}
                >
                  <img src={thanhToanNgay} className="w-8" />
                  <span> Thanh toán ngay</span>
                </div>

                <div
                  className={`cursor-pointer rounded-[8px] space-x-2 mr-5 w-64 justify-center font-bold  border border-solid ${
                    currentTab === "thanhToanSau"
                      ? "border-red-500 bg-red-100"
                      : "border-gray-300"
                  } h-16 px-5 flex items-center`}
                  onClick={() => setCurrentTab("thanhToanSau")}
                >
                  <img src={thanhToanSau} className="w-8" />
                  <span> Thanh toán sau</span>
                </div>
                <div
                  className={`cursor-pointer rounded-[8px] space-x-2 mr-5 w-64 justify-center font-bold  border border-solid ${
                    currentTab === "bayTruocTraSau"
                      ? "border-red-500 bg-red-100"
                      : "border-gray-300"
                  } h-16 px-5 flex items-center`}
                  onClick={() => setCurrentTab("bayTruocTraSau")}
                >
                  <img src={bayTruocTraSau} className="w-8" />
                  <span> Bay trước trả sau</span>
                </div>

                <div
                  className={`cursor-pointer rounded-[8px] space-x-2 mr-5 font-bold mt-5     border border-solid ${
                    currentTab === "bayCoQua"
                      ? "border-red-500 bg-red-100"
                      : "border-gray-300"
                  } h-16 px-5 flex items-center`}
                  onClick={() => setCurrentTab("bayCoQua")}
                >
                  <img src={visaVietjet} className="w-8" />
                  <span> Bay có quà cùng thẻ tín dụng Visa Vietjet</span>
                </div>
              </div>
              {/* 8 cai div*/}
              {/* First Tab */}
              {currentTab === "thanhToanNgay" && <ThanhToanNgayTab />}
              {/* Second Tab*/}
              {currentTab === "thanhToanSau" && <ThanhToanSauTab />}
              {/* Third Tab */}
              {currentTab === "bayTruocTraSau" && <BayTruocTraSauTab />}
              {/* Fourth Tab*/}
              {currentTab === "bayCoQua" && <BayCoQua />}
              {/* Chi tiet thanh toan */}
              <div className="flex flex-col space-y-3">
                <span className="font-bold text-[20px]">
                  Chi tiết thanh toán
                </span>
                <div className="bg-gray-100 space-y-1 rounded-[8px] py-3 px-5 text-[18px] flex flex-col">
                  <div className="flex justify-between ">
                    <span> Tạm tính </span>
                    <span className="font-bold text-[25px] text-blue-400">
                      {totalPrice.toLocaleString()} VND
                    </span>
                  </div>
                  <div className="flex justify-between ">
                    <span> Mã giảm giá/phiếu quà tặng </span>
                    {discountValue > 0 && (
                      <span className="text-green-500 text-[25px] font-bold">
                        - {discountValue.toLocaleString()} VND
                      </span>
                    )}
                    {discountValue === 0 && (
                      <span className="text-gray-500 font-bold">N/A</span>
                    )}
                  </div>
                  <div className="flex justify-between ">
                    <span> Tổng thanh toán </span>
                    <span className="font-bold text-[25px] text-orange-500">
                      {finalPrice.toLocaleString()} VND
                    </span>
                  </div>
                </div>
                <span className="text-[13px] self-center">
                  Khi chọn thanh toán, Bạn đã đồng ý Điều lệ vận chuyển, Điều
                  kiện vé và Quy định vật dụng bị cấm mang lên máy bay
                </span>
                <div className="flex space-x-3 justify-center">
                  <div
                    className="flex rounded-[8px] w-56 py-5 text-white font-bold text-[18px] items-center justify-center bg-gradient-to-r from-green-600 via bg-green-200 to-green-400 cursor-pointer transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
                    onClick={() => navigate(`/Home`)}
                  >
                    Mua sắm thêm
                  </div>
                  <NavLink
                    className="flex rounded-[8px] w-56 text-black font-bold text-[18px] items-center justify-center bg-gradient-to-r from-yellow-500 via bg-yellow-300 to-yellow-200 cursor-pointer transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
                    to={`/ProductDetail/CartStage1/CartStage2/FinalCartStage`}
                    state={{ finalPrice: finalPrice }}
                  >
                    Thanh toán
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-[22rem] max-h-fit mt-5 pb-5 flex-col grow rounded-[8px] bg-white">
            {!isEnteredVoucher && (
              <div className="mx-3 py-3 border border-b-gray-200 border-l-0 border-r-0 border-t-0 flex justify-between">
                <input
                  type="text"
                  id="voucher"
                  name="voucher"
                  value={inputFieldVoucher}
                  placeholder="Nhập mã voucher"
                  className="outline-none"
                  onChange={handleOnChangeVoucher}
                />
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleEnterVoucher()}
                >
                  Apply
                </span>
              </div>
            )}

            {isEnteredVoucher && (
              <div className="mx-3 py-3 border border-b-gray-200 items-center border-l-0 border-r-0 border-t-0 flex justify-between">
                <span> Voucher applied: </span>
                <span className="text-green-400 text-lg font-bold">
                  {voucherHistory}
                </span>
                <div
                  className=" p-1 rounded-md bg-white text-sm text-red-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                  onClick={() => handleRemoveVoucher()}
                >
                  Remove
                </div>
              </div>
            )}

            <div className="mx-3 space-y-3 py-3 border border-b-gray-200 border-l-0 border-r-0 border-t-0">
              <span className="font-bold"> Price Detail (2 items)</span>
              <div className="flex justify-between">
                <span className="text-gray-400"> Subtotal </span>
                <span className="text-gray-500 font-bold">
                  {totalPrice.toLocaleString()}d
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">
                  Delivery Charges Of The Zon
                </span>
                <span className="text-gray-500 font-bold"> 0d </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">
                  Duty Fee - Vietjetair Sales
                </span>
                <span className="text-gray-500 font-bold">
                  {dutyFee.toLocaleString()}d
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400"> Counter </span>
                <span className="text-gray-500 font-bold"> 0d </span>
              </div>
            </div>

            <div className="mx-3 pt-10 flex justify-between items-center">
              <span className="font-bold"> Tổng</span>
              <span className="text-[25px] font-bold text-red-500">
                {(finalPrice + dutyFee ).toLocaleString()}
                <span> VND </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartStage2;

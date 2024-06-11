import React, { useState } from "react";

import creditCards from "../../../images/creditCards.png";
import viSkyPay from "../../../images/viSkyPay.png";
import quetMaQR from "../../../images/quetMaQR.png";
import vietQR from "../../../images/vietQR.png";
import theNoiDiaVaEBanking from "../../../images/theNoiDiaVaEbanking.png";
import napas from "../../../images/napas.png";
import viMomo from "../../../images/viMomo.png";
import zaloPay from "../../../images/zaloPay.png";
import visa from "../../../images/visa.png";
import mastercard from "../../../images/mastercard.png";
import soThe from "../../../images/soThe.png";
import soCVV from "../../../images/soCVV.png";
import hide from "../../../images/hide.png";
import expandOptions from "../../../images/expandOptions.png";

const ThanhToanNgayTab = () => {
  const [isCVVVisible, setIsCVVVisible] = useState(true);

  const toggleVisibility = () => {
    setIsCVVVisible(!isCVVVisible);
  };
  return (
    <div className="space-y-10">
      <div className="flex space-x-5">
        <div className="flex flex-col items-center text-center  w-36  relative">
          <img src={creditCards} className="h-9 w-32 absolute top-2 bg-white" />
          <span className="mt-14"> Thẻ tín dụng, thẻ ghi nợ quốc tế </span>
        </div>
        <div className="flex flex-col items-center  w-28 relative">
          <img src={viSkyPay} className=" bg-white w-8 absolute top-3" />
          <span className="mt-14"> Ví SkyPay</span>
        </div>
        <div className="flex flex-col items-center text-center  w-28  relative">
          <img src={quetMaQR} className=" bg-white w-6 absolute top-3" />
          <span className="mt-14"> Quét mã QR</span>
        </div>
        <div className="flex flex-col items-center text-center  w-32  relative">
          <img src={vietQR} className=" bg-white w-6 absolute top-3" />
          <span className="mt-14">Mobile Banking VietQR</span>
        </div>
        <div className="flex  flex-col items-center text-center  w-28  relative">
          <img
            src={theNoiDiaVaEBanking}
            className=" bg-white w-11 absolute top-2"
          />
          <span className="mt-14">Thẻ nội địa và E-banking</span>
        </div>
        <div className="flex  flex-col items-center text-center  w-28  relative">
          <img src={napas} className=" bg-white w-16 h-5 absolute top-3" />
          <span className="mt-14"> Thẻ ATM</span>
        </div>
        <div className="flex flex-col items-center text-center  w-28  relative">
          <img src={viMomo} className=" bg-white w-5 absolute top-3" />
          <span className="mt-14"> Ví Momo</span>
        </div>
        <div className="flex flex-col items-center text-center  w-28  relative">
          <img src={zaloPay} className=" bg-white w-14 absolute top-2" />
          <span className="mt-14"> Ví Zalopay</span>
        </div>
      </div>
      {/* Su dung ma ...*/}
      <div className="flex items-center space-x-5">
        <input type="checkbox" />
        <span> Sử dụng mã voucher hoặc phiếu quà tặng </span>
      </div>
      {/* Thanh toan bang the da luu */}
      <div className="flex flex-col space-y-5">
        <span className="font-bold">Thanh toán bằng thẻ đã lưu </span>
        <div className="flex space-x-5">
          <div className="bg-gray-200 flex rounded-[8px] items-center  justify-center space-x-10 w-[30rem] min-h-24 p-5">
            <input
              type="checkbox"
              style={{
                transform: "scale(2)",
                WebkitTransform: "scale(2)" /* For Safari */,
                MozTransform: "scale(2)" /* For Firefox */,
              }}
            />
            <img src={visa} className="w-16" />
            <div className="flex flex-col">
              <span> Thẻ ghi nợ quốc tế ****586 </span>
              <span className="text-gray-600 text-[12px] ">
                Số dư: 5.000.000đ
              </span>
            </div>
          </div>
          <div className="bg-gray-200 flex rounded-[8px] items-center  justify-center space-x-10 w-[30rem] min-h-24 p-5">
            <input
              type="checkbox"
              style={{
                transform: "scale(2)",
                WebkitTransform: "scale(2)" /* For Safari */,
                MozTransform: "scale(2)" /* For Firefox */,
              }}
            />
            <img src={mastercard} className="w-16" />
            <div className="flex flex-col">
              <span> Thẻ tín dụng ****586 </span>
              <span className="text-gray-600 text-[12px] ">
                Số dư: 5.000.000đ
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Thông tin thẻ */}
      <div className="flex flex-col space-y-3">
        <span className="font-bold"> Thông tin thẻ </span>
        <div className="flex border border-b-gray-300  border-t-0 border-l-0 border-r-0 py-2 relative">
          <input
            type="text"
            placeholder="Số thẻ"
            className="outline-none w-full"
          />
          <img src={soThe} className="w-5 absolute right-5" />
        </div>
        <div className="flex border border-b-gray-300 outline-none border-t-0 border-l-0 border-r-0 py-2 relative">
          <input
            type="text"
            placeholder="Tên chủ thẻ"
            className="outline-none w-full"
            required
          />
        </div>
        <div className="flex mt-3 flex-col bg-pifnk-500  relative">
          <span className="text-[12px] font-bold">Ngày hết hạn</span>
          <div className="flex space-x-5">
            <input
              type="text"
              placeholder="mm/yy"
              className="w-36  border border-b-gray-300 outline-none border-t-0 border-l-0 border-r-0"
            />
            <div className="flex relative">
              <input
                type={isCVVVisible ? "text" : "password"}
                placeholder="Số CVV"
                className="w-32 border border-b-gray-300 outline-none border-t-0 border-l-0 border-r-0"
              />
              <img src={soCVV} className="w-5 absolute right-8" />
              <img
                src={hide}
                className="w-5 absolute right-2 cursor-pointer"
                onClick={toggleVisibility}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Thông tin chủ thẻ */}
      <div className="flex flex-col space-y-3">
        <span className="font-bold"> Thông tin chủ thẻ </span>
        <div className="flex border border-b-gray-300  border-t-0 border-l-0 border-r-0 py-2 relative">
          <input
            type="text"
            placeholder="Địa chỉ"
            className="outline-none w-full"
          />
        </div>
        <div className="flex border border-b-gray-300 outline-none border-t-0 border-l-0 border-r-0 py-2 relative">
          <input
            type="text"
            placeholder="Quốc gia"
            className="outline-none w-full"
            required
          />
          <img src={expandOptions} className="w-5 absolute right-5" />
        </div>
        <div className="flex border border-b-gray-300 outline-none border-t-0 border-l-0 border-r-0 py-2 relative">
          <input
            type="text"
            placeholder="Thành phố"
            className="outline-none w-full"
            required
          />
        </div>
        <div className="flex border border-b-gray-300 outline-none border-t-0 border-l-0 border-r-0 py-2 relative">
          <input
            type="text"
            placeholder="Tỉnh/bang"
            className="outline-none w-full"
            required
          />
          <img src={expandOptions} className="w-5 absolute right-5" />
        </div>
        <div className="flex border border-b-gray-300 outline-none border-t-0 border-l-0 border-r-0 py-2 relative">
          <input
            type="text"
            placeholder="Mã bưu điện"
            className="outline-none w-full"
            required
          />
        </div>
        <div className="flex border space-x-5 border-b-gray-300 outline-none border-t-0 border-l-0 border-r-0 py-2 relative">
          <div className="flex relative w-28">
            <select className="appearance-none w-full">
              <option className="flex" value="VN">
                <span role="img" aria-label="Vietnam flag">
                  🇻🇳
                </span>
                <span>+84</span>
              </option>
              <option className="flex" value="USA">
                <span role="img" aria-label="USA flag">
                  🇺🇸
                </span>
                <span>+1</span>
              </option>
              <option className="flex" value="UK">
                <span role="img" aria-label="UK flag">
                  🇬🇧
                </span>
                <span>+44</span>
              </option>
              <option className="flex" value="FR">
                <span role="img" aria-label="France flag">
                  🇫🇷
                </span>
                <span>+33</span>
              </option>
              <option className="flex" value="DE">
                <span role="img" aria-label="Germany flag">
                  🇩🇪
                </span>
                <span>+49</span>
              </option>
              <option className="flex" value="IT">
                <span role="img" aria-label="Italy flag">
                  🇮🇹
                </span>
                <span>+39</span>
              </option>
              <option className="flex" value="JP">
                <span role="img" aria-label="Japan flag">
                  🇯🇵
                </span>
                <span>+81</span>
              </option>
              <option className="flex" value="AU">
                <span role="img" aria-label="Australia flag">
                  🇦🇺
                </span>
                <span>+61</span>
              </option>
              <option className="flex" value="CA">
                <span role="img" aria-label="Canada flag">
                  🇨🇦
                </span>
                <span>+1</span>
              </option>
              <option className="flex" value="BR">
                <span role="img" aria-label="Brazil flag">
                  🇧🇷
                </span>
                <span>+55</span>
              </option>
              <option className="flex" value="KR">
                <span role="img" aria-label="South Korea flag">
                  🇰🇷
                </span>
                <span>+82</span>
              </option>
            </select>
            <img
              src={expandOptions}
              className="w-5 absolute right-[0.1rem] top-1/2 transform -translate-y-1/2"
            />
          </div>
          <input
            type="text"
            placeholder="Số điện thoại"
            className="outline-none w-full"
            required
          />
        </div>
        <div className="flex mt-5 items-center space-x-5">
          <input type="checkbox" />
          <span>
            Bạn có muốn sử dụng địa chỉ người liên hệ cho địa chỉ thanh toán
            không?
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThanhToanNgayTab;

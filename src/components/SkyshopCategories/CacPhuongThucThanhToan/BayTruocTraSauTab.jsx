import React from "react";

const BayTruocTraSauTab = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center space-x-5">
        <input type="checkbox" />
        <span> Sử dụng mã voucher hoặc phiếu quà tặng </span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold"> Vui lòng nhập thông tin của bạn </span>
        <span>
          Vui lòng nhập các thông tin: Họ tên, Ngày sinh, CMND/CCCD và số điện
          thoại. Sau đó nhấn Xác nhận để tiếp tục.{" "}
        </span>
        <div className="grid grid-cols-2 relative gap-x-5 pb-48 h-[10rem]">
          <div className=" border border-b-gray-300 border-l-0 border-r-0 border-t-0 py-3">
            <input
              type="text"
              id="name"
              placeholder="Họ và tên "
              className="w-full outline-none"
            />
          </div>

          <div className=" border border-b-gray-300 border-l-0 border-r-0 border-t-0 py-3">
            <input
              type="text"
              id="dob"
              placeholder="Ngày sinh "
              className="w-full outline-none"
            />
          </div>

          <div className=" border border-b-gray-300 border-l-0 border-r-0 border-t-0 py-3">
            <input
              type="text"
              placeholder="CMND/CCCD"
              className="w-full outline-none"
            />
          </div>

          <div className=" border border-b-gray-300 border-l-0 border-r-0 border-t-0 py-3">
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              className="w-full outline-none"
            />
          </div>

          <div className="px-14 py-3 rounded-[8px] font-bold absolute bottom-5 right-0 flex items-center justify-center bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300 cursor-pointer transition-transform transform hover:scale-105 hover:text-orange-500  hover:drop-shadow-lg ">
            {" "}
            Xác nhận{" "}
          </div>
        </div>
        <span>
          “Bay trước, trả sau” là giải pháp tài chính hỗ trợ thanh toán vé máy
          bay cho khách hàng trên toàn quốc của Vietjet Air, giúp khách hàng dễ
          dàng tiếp cận dịch vụ vé máy bay giá rẻ và được hỗ trợ hình thức trả
          góp để khách hàng có thể linh động chi tiêu phù hợp với năng lực tài
          chính.
        </span>
      </div>
    </div>
  );
};

export default BayTruocTraSauTab;

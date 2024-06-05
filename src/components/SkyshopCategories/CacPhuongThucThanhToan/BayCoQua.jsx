import React from "react";

const BayCoQua = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center space-x-5">
        <input type="checkbox" />
        <span> Sử dụng mã voucher hoặc phiếu quà tặng </span>
      </div>
      <div className="flex flex-col space-y-3"> 
        <span>
          Quý khách thanh toán bằng Thẻ tín dụng đồng thương hiệu HDBank Vietjet
          sẽ nhận được hàng loạt ưu đãi đặc quyền:
        </span>
        <ul className="list-disc px-5 space-y-1">
          <li> Hoàn đến 6 triệu/năm khi mua vé và bay cùng Vietjet. </li>
          <li>
            {" "}
            Check-in tại quầy ưu tiên (áp dụng cho thẻ HDBank Vietjet Platinum).{" "}
          </li>
          <li>
            {" "}
            Tích điểm không giới hạn đổi voucher bay, giảm giá và quà tặng.{" "}
          </li>
        </ul>
        <span >
          Trong trường hợp chưa có Thẻ tín dụng HDBank Vietjet, Quý khách có thể
          mở thẻ phi vật lý online trong tích tắc (tại nút "Thanh toán" bên
          dưới) để hoàn tất thanh toán vé máy bay.{" "}
        </span>
      </div>
    </div>
  );
};

export default BayCoQua;

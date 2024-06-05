import React from "react";

const ThanhToanSauTab = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center space-x-5">
        <input type="checkbox" />
        <span> Sử dụng mã voucher hoặc phiếu quà tặng </span>
      </div>
      <div className="flex flex-col space-y-5">
        <span>
          Mã đặt chỗ sẽ được giữ trong vòng
          <span className="font-bold"> 06 tiếng </span>. Quá thời hạn này, nếu
          bạn không thanh toán Mã đặt chỗ sẽ tự động hủy trên hệ thống.
        </span>

        <div>
          <span className="font-bold">
            Bạn có thể thanh toán sau tại các kênh:
          </span>
          <ul className="list-disc p-5">
            <li>Thanh toán bằng thẻ tại trang Chuyến bay của tôi (tại đây)</li>
            <li>
              Thanh toán qua internet banking của các ngân hàng (Chi tiết)
            </li>
            <li> Thanh toán qua Payoo (Chi tiết)</li>
            <li> Phòng vé, đại lý Vietjet trên toàn quốc (Chi tiết) </li>
            <li> Hệ thống ngân hàng HDBank HDBank (Chi tiết) </li>
          </ul>
        </div>

        <span> Xem thêm điều khoản & điều kiện áp dụng. </span>
        <div>
          <span>
            Lưu ý: Bạn sẽ phải trả khoản phí cho các kênh thanh toán như sau, áp
            dụng:
          </span>
          <span>
            Phí thanh toán áp dụng cho mỗi hành khách trên mỗi chặng bay.
            <ul className="list-disc p-5">
              <li> 235,000 VND đối với các đường bay Úc/Kazakhstan. </li>
              <li>
                50,000 VND đối với các đường bay nội địa Việt Nam (Chưa bao gồm
                VAT) và Quốc tế khác.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThanhToanSauTab;

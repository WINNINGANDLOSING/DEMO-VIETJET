// Footer.js
import React from "react";
import VienVang from "../images/footerVienVang.png";
import VienDo1 from "../images/footerVienDo1.png";
import VienDo2 from "../images/footerVienDo2.png";
import VienXanh from "../images/footerVienXanh.png";
import vietJetAirLogo from "../images/vietJetAirLogo.png";
import footerYellowPlane from "../images/footerYellowPlane.png";
import cacPhuongThucThanhToanLogo from "../images/cacPhuongThucThanhToanLogo.png";
import FBLogo from "../images/footerFBLogo.png";
import InstaLogo from "../images/footerInstaLogo.png";
import TwitterLogo from "../images/footerTwitterLogo.png";
import ZaloLogo from "../images/footerZaloLogo.png";
import YTLogo from "../images/footerYTLogo.png";
import guiLogo from "../images/footerGuiLogo.png";
import QRLogo from "../images/footerQRLogo.png";
import googlePlayLogo from "../images/footerGooglePlayLogo.png";
import appStoreLogo from "../images/footerAppStore.png";
import daThongBaoLogo from "../images/FooterDaThongBaoLogo.png";
const Footer = () => {
  return (
    <footer className="relative mt-10 bg-cover overflow-hidden">
      {/* <div className="absolute bottom-0 bg-green-600 w-screen h-[70vh] overflow-hidden">
        <img src={VienDo2} alt="Your Image" className="min-w-full min-h-full" />
      </div> */}

      <div className="relative  h-[80vh]">
        <img src={VienXanh} alt="Your Image" className="absolute" />
        <img src={VienDo1} alt="Your Image" className="absolute bottom-0" />
      </div>

      <div className="relative font-KoHo mt-[-29rem] pb-10">
        <img src={VienDo2} alt="Your Image" className="absolute bottom-0" />
        <div className="relative inset-0 px-28  text-white z-30">
          <img src={vietJetAirLogo} className="max-w-60 h-15" />
          {/* Div containing four columns*/}
          <div className="mt-10 flex space-x-10">
            {/* First column */} {/* increase the width of the first column*/}
            <div className="flex flex-col text-sm w-72">
              <div className="text-lg flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}
                <img
                  src={footerYellowPlane}
                  className="relative left-[-0.3rem] w-6"
                />
                <span className="font-bold"> Dịch vụ và sản phẩm</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <span>Tổng đài bán vé</span>
                <span>Skyboss Business</span>
                <span>Skyboss</span>
                <span>Phòng chờ sang trọng</span>
                <span>Chuyến bay giá rẻ</span>
                <span>Giải trí trên mây</span>
                <span>Express</span>
                <span>Shop</span>
                <span>Quà tặng</span>
                <span>Freedom Flyer Programme</span>
                <span>Rewards</span>
                <span>Airasia Change</span>
                <span>Register as An Agent</span>
                <span>Agent Login</span>
                <span>Download E-catalog</span>
                <span>Hotels</span>
                <span>Jet Relax</span>
                <span>Super +</span>
                <span>Transport</span>
              </div>
            </div>
            {/* Second column */}
            <div className="flex flex-col text-sm ">
              <div className="text-lg flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}
                <img
                  src={footerYellowPlane}
                  className="relative left-[-0.3rem] w-6"
                />
                <span className="font-bold">Corporate</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <span>Đăng nhập đại lý</span>
                <span>Phòng bán vé</span>
                <span>Đại lý bán vé</span>
                <span>GDS/Interline</span>
                <span>Đăng kí khách hàng doanh nghiệp</span>
                <span>Đăng kí đại lý online</span>
              </div>

              <div className="text-lg mt-12 flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}
                <img
                  src={footerYellowPlane}
                  className="relative left-[-0.3rem] w-6"
                />
                <span className="font-bold">Về Vietjet</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <span>Nhà đầu tư</span>
                <span>Cơ hội nghề nghiệp</span>
                <span>Tin Tức</span>
                <span>Khuyến mại</span>
                <span>Cẩm nang du lịch</span>
              </div>
            </div>
            {/* Third column */}
            {/* Also increase the width of the third column*/}
            <div className="flex flex-col text-sm w-60">
              <div className="text-lg flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}
                <img
                  src={footerYellowPlane}
                  className="relative left-[-0.3rem] w-6"
                />
                <span className="font-bold">Thông tin hữu ích</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <span>Câu hỏi thường gặp</span>
                <span>Gửi yêu cầu hỗ trợ</span>
                <span>Hướng dẫn đặt vé máy bay</span>
                <span>Hướng dẫn thanh toán</span>
                <span>Phương thức vận chuyển</span>
                <span>Chính sách đổi trả</span>
                <span>
                  Hỗ trợ khách hàng: <br />
                  <p className="text-hotrovietjetcom"> hotro@vietjet.com </p>
                </span>
                <span>Điều khoản sử dụng</span>
                <span>Chính sách bảo mật thanh toán</span>
              </div>

              <div className="text-lg mt-12 flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}
                <img
                  src={footerYellowPlane}
                  className="relative left-[-0.3rem] w-6"
                />
                <span className="font-bold">Link</span>
              </div>
              <div className="mt-2 flex flex-col">
                <span>Trung tâm trợ giúp</span>
                {/* add padding top here because space-y-2 in the parent div don't work as expected */}
                <span className="pt-2">Thông tin chuyến bay</span>
                <div className="flex flex-col mt-16 space-y-2">
                  <span>Các phương thức thanh toán</span>
                  <img src={cacPhuongThucThanhToanLogo} className="w-48" />
                </div>
              </div>
            </div>
            {/* Fourth column*/}
            {/* Also adjust (actually decrease) the width of the fourth column here*/}
            {/* Updated: No longer needed */}
            {/* Updated #2: give it a width of 80*/}
            <div className="flex flex-col text-lg space-y-14 max-w-80">
              <div className="flex flex-col space-y-4 ">
                <span className="font-bold"> Kết nối với Vietjet</span>
                <div className="flex items-center space-x-5">
                  <img src={FBLogo} className="w-6 h-6" />
                  <img src={InstaLogo} className="w-6 h-6" />
                  <img src={TwitterLogo} className="w-6 h-6" />
                  <img src={ZaloLogo} className="w-8 h-4 mb-[0.1rem]" />
                  <img src={YTLogo} className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="font-bold">
                  Cập nhật những thông tin mới nhất
                </span>
                <div className="flex relative bg-white pl-3 pr-2 justify-between rounded-[8px] h-14 w-80 items-center">
                  <input
                    type="text"
                    placeholder="Email"
                    className="outline-none text-black "
                  />

                  <img
                    src={guiLogo}
                    className="h-8 cursor-pointer transition-transform hover:brightness-110 absolute right-2"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <span className="font-bold">
                  Đặt chuyến phiêu lưu của bạn với ứng dụng của Vietjetair
                </span>
                <div className="flex flex-row space-x-5">
                  <img src={QRLogo} className="w-24 h-24" />
                  <div className="flex-col space-y-1">
                    <img src={googlePlayLogo} className="w-32 h-10" />
                    <img src={appStoreLogo} className="w-32 h-10" />
                  </div>
                </div>
              </div>

              <img src={daThongBaoLogo} className="ml-[-0.5rem] w-40 h-14" />
            </div>
          </div>

          {/* The Bottom part of the footer */}
          <div className=" mt-12 pt-5 border-t-bottomPart border-t-[1px] flex flex-col  items-center ">
            <span className="font-bold text-[20px]">
              CÔNG TY CỔ PHẦN HÀNG KHÔNG VIETJET
            </span>
            <span className="text-base mt-2">
              302/3 Phố Kim Mã, Phường Ngọc Khánh, Quận Ba Đình, TP. Hà Nội,
              Việt Nam.
            </span>
            <span className="text-base">
              Giấy chứng nhận Đăng ký Kinh doanh số 030955674 do Sở Kế hoạch và
              Đầu tư Thành phố Hà Nội cấp ngày 06/11/2000
            </span>
          </div>
        </div>
      </div>

      <span></span>

      {/* <div className="absolute bottom-0 right-0  overflow-hidden">
          <img src={VienVang} alt="Your Image" className="w-[50vh] h-[20vh]" />
        </div> */}
    </footer>
  );
};

export default Footer;

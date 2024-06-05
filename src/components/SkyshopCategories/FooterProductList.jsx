// Footer.js
import React from "react";
import VienVang from "../../images/footerVienVang.png";
import VienDo1 from "../../images/footerVienDo1.png";
import VienDo2 from "../../images/footerVienDo2.png";
import VienXanh from "../../images/footerVienXanh.png";
import vietJetAirLogo from "../../images/vietJetAirLogo.png";
import footerYellowPlane from "../../images/footerYellowPlane.png";
import cacPhuongThucThanhToanLogo from "../../images/cacPhuongThucThanhToanLogo.png";
import WhiteFBLogo from "../../images/WhiteFBLogo.png";
import WhiteInstaLogo from "../../images/WhiteInstaLogo.png";
import WhiteUnknownLogo from "../../images/WhiteUnknownLogo.png";
import WhiteYoutubeLogo from "../../images/WhiteYoutubeLogo.png";
import footerQRLogo from "../../images/footerQRLogo.png";
import banHangCungAhappi from "../../images/banHangCungAhappi.png";
import footerAppStoreWhite from "../../images/footerAppStoreWhite.png";
import footerGooglePlayWhite from "../../images/footerGooglePlayWhite.png";

const FooterProductList = () => {
  return (
    <footer className="relative bg-cover bg-productList overflow-hidden">
      {/* <div className="absolute bottom-0 bg-green-600 w-screen h-[70vh] overflow-hidden">
        <img src={VienDo2} alt="Your Image" className="min-w-full min-h-full" />
      </div> */}

      <div className="relative mt-10 h-[80vh]">
        {/* mt-96 to make the footer go down a bit, the actual content of the footer goes down*/}
        <img src={VienXanh} alt="Your Image" className="absolute" />
        <img src={VienDo1} alt="Your Image" className="absolute bottom-0" />
      </div>

      <div className="relative font-KoHo mt-[-29rem] pb-10">
        <img src={VienDo2} alt="Your Image" className="absolute bottom-0" />
        <div className="relative inset-0 px-28  text-white z-30">
          {/* Div containing four columns*/}
          <div className="mt-10 flex space-x-16">
            {/* First column */} {/* increase the width of the first column*/}
            <div className="flex flex-col text-sm w-72">
              <div className="text-lg flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}

                <span className="font-bold"> Hỗ trợ khách hàng</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <span>
                  Hotline <span className="text-hotrovietjetcom">19009809</span>
                </span>
                <span>(24h kể cả thứ 7, CN)</span>
                <span>Câu hỏi thường gặp</span>
                <span>Gửi yêu cầu hỗ trợ</span>
                <span>Hướng dẫn đặt hàng</span>
                <span>Phương thức vận chuyển</span>
                <span>
                  Hỗ trợ khách hàng:
                  <span className="text-hotrovietjetcom">
                    hotro@vietjet.com
                  </span>
                </span>
              </div>
            </div>
            {/* Second column */}
            <div className="flex flex-col text-sm ">
              <div className="text-lg flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}

                <span className="font-bold">Về Vietjet</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <span>Giới thiệu Ahappi</span>
                <span>Tuyển dụng</span>
                <span>Chính sách bảo mật thanh toán</span>
                <span>Điều khoản sử dụng</span>
              </div>

              <div className="text-lg mt-12 flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}

                <span className="font-bold">Hợp tác và liên kết</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <img src={banHangCungAhappi} className="w-[20rem]" />
              </div>
            </div>
            {/* Third column */}
            {/* Also increase the width of the third column*/}
            <div className="flex flex-col text-sm w-fit">
              {/* w-fit in the parent div allows it to expand/shrink if needed*/}
              <div className="text-lg flex items-center relative ">
                {/* Use relative left-[-0.3rem] here to make the img put itself to left more*/}
                <span className="font-bold">Phương thức thanh toán</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <img
                  src={cacPhuongThucThanhToanLogo}
                  className="min-w-80 h-20"
                />
              </div>
              <div className="mt-[5.1rem] text-lg flex flex-col space-y-2">
                <span className="font-bold">Theo dõi chúng tôi</span>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <div className="flex space-x-5 items-center">
                  <img src={WhiteFBLogo} className="w-10 h-10" />
                  <img src={WhiteUnknownLogo} className="w-10 h-10" />
                  <img src={WhiteYoutubeLogo} className="w-10 h-10" />
                  <img src={WhiteInstaLogo} className="w-10 h-10" />
                </div>
              </div>
            </div>
            {/* Fourth column*/}
            <div className="flex flex-col text-sm">
              <div>
                <span className="font-bold text-lg">Tải ứng dụng để hưởng nhiều ưu đãi</span>
                <div className="flex space-x-5">
                  <img src={footerQRLogo} className="w-28 h-28" />
                  <div className="flex flex-col space-y-1 items-center justify-center">
                    <img src={footerAppStoreWhite} className="h-12 w-56"/>
                    <img src={footerGooglePlayWhite} className="h-12 w-56"/> 
                  </div>
                </div>
              </div>
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

export default FooterProductList;

import React, { useState } from "react";
import Card from "./Helpers/Card";
import { globalContext } from "../context";
import PhuongThucVanChuyenModal from "./PhuongThucVanChuyenModal";
import videoSample1 from "../images/videoSample1.png";
import videoSample2 from "../images/videoSample2.png";
import videoSample3 from "../images/videoSample3.png";
import videoSamplePlayButton from "../images/videoSamplePlayButton.png";
import bodyPrebookMealVienVang from "../images/bodyPrebookMealVienVang.png";
import SuggestionsForYou from "../images/SuggestionsForYou.png";


import categoriesLogo from "../images/categoriesLogo.png";
import ad1 from "../images/ad1.png";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import hotDealLogo from "../images/hotDealLogo.png";
import vietJetAirItalicLogo from "../images/vietJetAirItalicLogo.png";
import dienTuCongNgheLogo from "../images/dienTuCongNgheLogo.png";
import lamDepSucKhoeLogo from "../images/lamDepSucKhoeLogo.png";
import thoiTrangNamNuLogo from "../images/thoiTrangNamNuLogo.png";
import doDungGiaDinhLogo from "../images/doDungGiaDinhLogo.png";
import thucPhamNuocGiaiKhatLogo from "../images/thucPhamNuocGiaiKhatLogo.png";
import hoatDongNgoaiTroiLogo from "../images/hoatDongNgoaiTroiLogo.png";

/* Top Categories */
import IpadPro from "../images/IpadPro.png";
import MayEpCham from "../images/MayEpCham.png";
import MayTinh from "../images/MayTinh.png";
import MakeUp from "../images/MakeUp.png";
import QuaLuuNiemVietjet from "../images/QuaLuuNiemVietjet.png";
import MayPhaCaPhe from "../images/MayPheCaPhe.png";

/* Decorations at Bottoms */
import SanPham100000 from "../images/100000SanPham.png";
import SieuToc247 from "../images/SieuToc247.png";
import HangNgan from "../images/HangNgan.png";
import CungVietjetBayVaoTuongLai from "../images/CungVietjetBayVaoTuongLai.png";

/* in here, i use componentizaiton for every item */
const Body = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const handleOnClickQuitModal = () => {
    setIsOpenModal(false);
  };

  const {
    // PrebookMealData,
    // ExclusiveMerchData,
    // JetCafeData,
    // FAndBData,
    // SuperAppSuperData,
    // BeautyData,
    // suggestionsData,
    DataBase
  } = globalContext();
  /* Prebook Meal */
  console.log(DataBase);
  console.log(typeof DataBase);

  let PrebookMealData = []
  PrebookMealData = Object.values(DataBase).filter(data => ((data.id).toString().includes("PM")))  
  // PrebookMealData = PrebookMealData.concat(
  //   PrebookMealData.map((item) => ({ ...item }))
  // );

  console.log(PrebookMealData);
  PrebookMealData.map(data => {
    console.log(data.origin)
  })
  // const {
  //   PrebookMealSample1,
  //   PrebookMealSample2,
  //   PrebookMealSample3,
  //   PrebookMealSample4,
  //   PrebookMealSample5,
  // } = PrebookMealData;

  /* Exclusive Merch */
  const {
    ExclusiveMerchSample1,
    ExclusiveMerchSample2,
    ExclusiveMerchSample3,
    ExclusiveMerchSample4,
    ExclusiveMerchSample5,
  } = ExclusiveMerchData;

  /* Jet Cafe */
  const {
    JetCafeSample1,
    JetCafeSample2,
    JetCafeSample3,
    JetCafeSample4,
    JetCafeSample5,
  } = JetCafeData;

  /* F&B */
  const {
    FAndBSample1,
    FAndBSample2,
    FAndBSample3,
    FAndBSample4,
    FAndBSample5,
  } = FAndBData;

  /* Super App Super Sale */
  const {
    SuperAppSuperSaleSample1,
    SuperAppSuperSaleSample2,
    SuperAppSuperSaleSample3,
    SuperAppSuperSaleSample4,
    SuperAppSuperSaleSample5,
  } = SuperAppSuperData;

  /* Biggest Beauty*/

  const {
    BeautySample1,
    BeautySample2,
    BeautySample3,
    BeautySample4,
    BeautySample5,
  } = BeautyData;

  /* Suggestion Data */
  const {
    suggestionsSample1,
    suggestionsSample2,
    suggestionsSample3,
    suggestionsSample4,
    suggestionsSample5,
    suggestionsSample6,
    suggestionsSample7,
    suggestionsSample8,
    suggestionsSample9,
    suggestionsSample10,
    suggestionsSample11,
    suggestionsSample12,
    suggestionsSample13,
    suggestionsSample14,
    suggestionsSample15,
  } = suggestionsData;
  return (
    <div className="h-[100%] p-0 m-0">
      {/* Modal implemeted here*/}
      {isOpenModal && (
        <PhuongThucVanChuyenModal
          isOpenModal={isOpenModal}
          handleOnClickQuitModal={handleOnClickQuitModal}
        />
      )}
      {/* The third row of the header (the biggest row of the header) */}
      {/* use ml-20 because the content is 5rem from left, so is the background */}
      <div className="flex flex-col mx-28 max-w-screen overflow-hidden">
        {/* The first sub-row of this 3rd row*/}

        {/* The second sub-row of this 3rd row*/}
        <div className="flex flex-row">
          {/* Column 1 of the second sub-row */}
          <div className="flex flex-col w-[247px] text-[15px] space-y-1">
            {/* has to use padding left 3vw and padding right 2vw AND margin left 10vw in the logo here to extend the width of every item, w-{value} don't work for some reason*/}
            <div className="h-12 flex items-center justify-between pl-4 pr-2 text-headerCategoriesText bg-headerCategoriesBackground flex-shrink-0">
              <p>Healthy & Wellness</p>
              <img src={categoriesLogo} className="w-6 h-6 ml-10" />
              {/* change this value here will affect other divs below too */}
            </div>
            <div className="h-12 flex items-center justify-between pl-3 pr-2  text-headerCategoriesText bg-headerCategoriesBackground">
              <p> Skincare </p>
              <img src={categoriesLogo} className="w-6 h-6" />
            </div>
            <div className="h-12 flex items-center justify-between px-3 text-headerCategoriesText bg-headerCategoriesBackground">
              <p>Liquor</p>
              <img src={categoriesLogo} className="w-6 h-6" />
            </div>
            <div className="h-12 flex items-center justify-between px-3 text-headerCategoriesText bg-headerCategoriesBackground">
              <p>Make-up</p>
              <img src={categoriesLogo} className="w-6 h-6" />
            </div>
            <div className="h-12 flex items-center justify-between px-3  text-headerCategoriesText bg-headerCategoriesBackground">
              <p>Food</p>
              <img src={categoriesLogo} className="w-6 h-6" />
            </div>
            <div className="h-12 flex items-center justify-between px-3 text-headerCategoriesText bg-headerCategoriesBackground">
              <p>Electronic</p>
              <img src={categoriesLogo} className="w-6 h-6" />
            </div>
          </div>
          {/* Column 2 of the second sub-row*/}
          <div className="flex ml-3  bg-red-700 w-widthForAd h-heightForAd">
            {/* Sets the minimum width of the child element to 100% of its parent's
            width. It allows the child element to expand and fill the entire
            width of its parent container. */}
            <img src={ad1} alt="Ad 1" className="min-w-full min-h-full h-20" />
          </div>
          {/* Column 3 of the second sub-row*/}
          <div className="flex ml-3 flex-col h-heightForBanner">
            <img src={banner1} className="w-96 min-h-full" />
            <img src={banner2} className="w-96 mt-1 min-h-full" />
          </div>
        </div>
      </div>
      {/* The fourth row of the header*/}
      <div className="flex flex-row space-x-[90px] text-sm mt-10 ml-28 px-5 max-w-screen overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <img src={hotDealLogo} className="w-14 h-14" />
          <p> Hot Deal</p>
        </div>

        <div className="flex flex-col  items-center text-center">
          <img src={vietJetAirItalicLogo} className="w-14 h-14" />
          <p> Vietjet Air</p>
        </div>

        <div className="flex flex-col items-center text-center w-20">
          <img src={dienTuCongNgheLogo} className="w-14 h-14" />
          <p> Điện tử công nghệ </p>
        </div>

        <div className="flex flex-col items-center text-center w-20">
          <img src={lamDepSucKhoeLogo} className="w-14 h-14" />
          <p> Làm đẹp sức khoẻ</p>
        </div>

        <div className="flex flex-col items-center text-center w-20">
          <img src={thoiTrangNamNuLogo} className="w-14 h-14" />
          <p> Thời trang nam nữ</p>
        </div>

        <div className="flex flex-col items-center text-center w-20">
          <img src={doDungGiaDinhLogo} className="w-14 h-14" />
          <p> Đồ dùng gia đình</p>
        </div>

        <div className="flex flex-col items-center text-center w-20">
          <img src={thucPhamNuocGiaiKhatLogo} className="w-14 h-14" />
          <p> Thực phẩm nước giải khát</p>
        </div>

        <div className="flex flex-col items-center text-center w-20">
          <img src={hoatDongNgoaiTroiLogo} className="w-10 h-10" />
          <p> Hoạt động ngoài trời</p>
        </div>
      </div>

      <div className="flex flex-col space-y-8 pl-[110px] pr-[110px] w-screen">
        {/* Prebook Meal div*/}
        <div className="bg-prebookMeal relative rounded-[8px] px-11 pt-4 pb-10">
          <div className="flex justify-between text-white text-[24px]">
            <span className="font-bold">
              Prebook meal - Jet cafe | Sale up to 30%
            </span>
            <span className="text-sm">Xem tất cả</span>
          </div>

          <div className="flex ml-[-1rem] space-x-2 mt-5">
            <Card sample={PrebookMealSample1} />
            <Card sample={PrebookMealSample2} />
            <Card sample={PrebookMealSample3} />
            <Card sample={PrebookMealSample4} />
            <Card sample={PrebookMealSample5} />

            {PrebookMealData.map(data => (
              <Card data = {data} />
            ))}
          </div>
          <img
            src={bodyPrebookMealVienVang}
            className="absolute bottom-0 right-0 w-[50rem] h-[25rem]"
          />
        </div>

        {/* Exclusive Vietjet Air merchandise */}
        <div className="bg-white px-8 pt-5 pb-5 relative">
          <div className="flex justify-between text-[24px]">
            <span className="text-exclusiveVietjetAir font-bold">
              Exclusive Vietjet Air merchandise | Up to 30% off
            </span>
            <span className="text-sm text-exclusiveVietjetAir">Xem tất cả</span>
          </div>

          <div className="flex ml-[-1rem] space-x-2 mt-5">
            <Card sample={ExclusiveMerchSample1} />
            <Card sample={ExclusiveMerchSample2} />
            <Card sample={ExclusiveMerchSample3} />
            <Card sample={ExclusiveMerchSample4} />
            <Card sample={ExclusiveMerchSample5} />
          </div>

          <img
            src={videoSamplePlayButton}
            className="w-16 h-16 absolute z-30 top-1/2 transform -translate-y-1/2 right-[-1rem]"
          />
        </div>

        {/* Some videos to show to customers */}
        <div className="flex space-x-4">
          <div className="flex relative">
            <img src={videoSample1} className="w-96 h-44" />
            <img
              src={videoSamplePlayButton}
              className="w-14 h-14 absolute top-1/2 transform -translate-y-1/2 right-2"
            />
          </div>
          <div className="flex relative">
            <img src={videoSample2} className="w-96 h-44 rounded-[8px]" />
            <img
              src={videoSamplePlayButton}
              className="w-14 h-14  absolute top-1/2 transform -translate-y-1/2 right-2"
            />
          </div>
          <div className="flex relative">
            <img src={videoSample3} className="w-96 h-44 rounded-[8px]" />
            <img
              src={videoSamplePlayButton}
              className="w-14 h-14 absolute top-1/2 transform -translate-y-1/2 right-2"
            />
          </div>
        </div>

        {/* Jet Cafe */}
        <div className="bg-white px-8 pt-5 pb-5 relative">
          <div className="flex justify-between text-[24px]">
            <span className="text-exclusiveVietjetAir font-bold">
              Jet Cafe | Up to 30% off when pre-book
            </span>
            <span className="text-sm text-exclusiveVietjetAir">Xem tất cả</span>
          </div>

          <div className="flex ml-[-1rem] space-x-2 mt-5">
            <Card sample={JetCafeSample1} />
            <Card sample={JetCafeSample2} />
            <Card sample={JetCafeSample3} />
            <Card sample={JetCafeSample4} />
            <Card sample={JetCafeSample5} />
          </div>

          <img
            src={videoSamplePlayButton}
            className="w-16 h-16 absolute z-30 top-1/2 transform -translate-y-1/2 right-[-2rem]"
          />
        </div>

        {/* F&B */}
        <div className="bg-white px-8 pt-5 pb-5 relative">
          <div className="flex justify-between text-[24px]">
            <span className="text-exclusiveVietjetAir font-bold">
              F&B | Up to 30% off when pre-book
            </span>
            <span className="text-sm text-exclusiveVietjetAir">Xem tất cả</span>
          </div>

          <div className="flex ml-[-1rem] space-x-2 mt-5">
            <Card sample={FAndBSample1} />
            <Card sample={FAndBSample2} />
            <Card sample={FAndBSample3} />
            <Card sample={FAndBSample4} />
            <Card sample={FAndBSample5} />
          </div>
          <img
            src={videoSamplePlayButton}
            className="w-16 h-16 absolute z-30 top-1/2 transform -translate-y-1/2 right-[-2rem]"
          />
        </div>

        {/* Super app Super Sale */}
        <div className="bg-white px-8 pt-5 pb-5 relative">
          <div className="flex justify-between text-[24px]">
            <span className="text-exclusiveVietjetAir font-bold">
              Super app Super sale | Up to 30% off when pre-book
            </span>
            <span className="text-sm text-exclusiveVietjetAir">Xem tất cả</span>
          </div>

          <div className="flex ml-[-1rem] space-x-2 mt-5">
            <Card sample={SuperAppSuperSaleSample1} />
            <Card sample={SuperAppSuperSaleSample2} />
            <Card sample={SuperAppSuperSaleSample3} />
            <Card sample={SuperAppSuperSaleSample4} />
            <Card sample={SuperAppSuperSaleSample5} />
          </div>

          <img
            src={videoSamplePlayButton}
            className="w-16 h-16 absolute z-30 top-1/2 transform -translate-y-1/2 right-[-2rem]"
          />
        </div>

        {/* Biggest Beauty travel deals */}
        <div className="bg-white px-8 pt-5 pb-5 relative">
          <div className="flex justify-between text-[24px]">
            <span className="text-exclusiveVietjetAir font-bold">
              Biggest Beauty travel deals | Up to 30% off when pre-book
            </span>
            <span className="text-sm text-exclusiveVietjetAir">Xem tất cả</span>
          </div>

          <div className="flex ml-[-1rem] space-x-2 mt-5">
            <Card sample={BeautySample1} />
            <Card sample={BeautySample2} />
            <Card sample={BeautySample3} />
            <Card sample={BeautySample4} />
            <Card sample={BeautySample5} />
          </div>

          <img
            src={videoSamplePlayButton}
            className="w-16 h-16 absolute z-30 top-1/2 transform -translate-y-1/2 right-[-2rem]"
          />
        </div>

        {/* Top Categories */}
        <div className=" px-11">
          <div className="flex justify-between text-[24px]">
            <span className="text-exclusiveVietjetAir font-bold">
              Top Categories
            </span>
          </div>
          <div className="flex ml-[-1rem] text-[12px] space-x-14 mt-5">
            <div className="px-2 py-2 space-y-2 flex flex-col p  items-center relative">
              <img src={IpadPro} className="w-32 h-32 rounded-full bg-white" />
              <span> Ipad Pro </span>
            </div>

            <div className="px-2 py-2 space-y-2 flex flex-col items-center relative">
              <img
                src={MayEpCham}
                className="w-32 h-32 rounded-full bg-white"
              />
              <span> Máy ép chậm </span>
            </div>

            <div className="px-2 py-2 space-y-2  flex flex-col  items-center relative">
              <img src={MayTinh} className="w-32 h-32 rounded-full bg-white" />
              <span> Máy Tính </span>
            </div>

            <div className="px-2 py-2 space-y-2 flex flex-col  items-center relative">
              <img src={MakeUp} className="w-32 h-32 rounded-full bg-white" />
              <span> Make-up </span>
            </div>

            <div className="px-2 py-2 space-y-2  flex flex-col items-center relative">
              <img
                src={QuaLuuNiemVietjet}
                className="w-32 h-32 rounded-full bg-white"
              />
              <span> Quà Lưu Niệm Vietjet </span>
            </div>

            <div className="px-2 py-2 space-y-2  flex flex-col rounded-full bg-white items-center relative">
              <img src={MayPhaCaPhe} className="w-32 h-32 rounded-[3px]" />
              <span> Máy pha cà phê </span>
            </div>
          </div>
        </div>

        {/* Suggestions For You */}
        <img src={SuggestionsForYou} />

        <div className="flex flex-col bg-white space-y-5 px-11">
          <div className="flex ml-[-1rem] space-x-2">
            <Card sample={suggestionsSample1} />
            <Card sample={suggestionsSample2} />

            <Card sample={suggestionsSample3} />

            <Card sample={suggestionsSample4} />

            <Card sample={suggestionsSample5} />
          </div>

          <div className="flex ml-[-1rem] space-x-2">
            <Card sample={suggestionsSample6} />
            <Card sample={suggestionsSample7} />

            <Card sample={suggestionsSample8} />

            <Card sample={suggestionsSample9} />
            <Card sample={suggestionsSample10} />
          </div>

          <div className="flex ml-[-1rem] space-x-2">
            <Card sample={suggestionsSample11} />
            <Card sample={suggestionsSample12} />

            <Card sample={suggestionsSample13} />

            <Card sample={suggestionsSample14} />
            <Card sample={suggestionsSample15} />
          </div>

          <div className="self-center rounded-[5px] text-center bg-white border-red-500 border-2 w-24 h-10 flex items-center justify-center">
            <span className="text-[13px] font-bold text-red-500">Xem Thêm</span>
          </div>
        </div>
        {/* Bottom Decorations */}
        <div className="flex flex-col px-11 space-y-5">
          <div className="flex flex-row space-x-5 ">
            <img src={SanPham100000} className="h-28 w-[23rem]" />
            <img src={SieuToc247} className="h-28 w-[23rem]" />
            <img src={HangNgan} className="h-28 w-[23rem]" />
          </div>
          <img
            src={CungVietjetBayVaoTuongLai}
            className="w-80 h-40 flex self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;

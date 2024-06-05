import React, { useState } from "react";
import review1 from "../../images/reviewer1.png";
import review2 from "../../images/reviewer2.png";
import star from "../../images/1star.png";
import dutyFreeLogo from "../../images/dutyFreeLogo.png";
import HyaluronicAcidHairTreatment from "../../images/HyaluronicAcidHairTreatment.png";
import bestSale from "../../images/bestSale.png";
import chiaSe from "../../images/chiaSe.png";
import favorite from "../../images/favorite.png";
import { NavLink, useLocation } from "react-router-dom";
import { globalContext } from "../../context copy";
import Card from "../Helpers/Card";
const ProductDetail = () => {
  const [selectedPreview, SetSelectedPreview] = useState();
  const previews = [
    HyaluronicAcidHairTreatment,
    HyaluronicAcidHairTreatment,
    HyaluronicAcidHairTreatment,
  ];

  const { PrebookMealData } = globalContext();
  const {
    PrebookMealSample1,
    PrebookMealSample2,
    PrebookMealSample3,
    PrebookMealSample4,
    PrebookMealSample5,
  } = PrebookMealData;

  const otherProductsData = [
    PrebookMealSample1,
    PrebookMealSample2,
    PrebookMealSample3,
    PrebookMealSample4,
    PrebookMealSample5,
  ];

  const youMightAlsoLikeData = [
    PrebookMealSample1,
    PrebookMealSample2,
    PrebookMealSample3,
    PrebookMealSample4,
    PrebookMealSample5,
    PrebookMealSample1,
    PrebookMealSample2,
    PrebookMealSample3,
    PrebookMealSample4,
    PrebookMealSample5,
    PrebookMealSample1,
    PrebookMealSample2,
    PrebookMealSample3,
    PrebookMealSample4,
    PrebookMealSample5,
  ];

  const location = useLocation();
  const sample = location.state.sample;
  //console.log(sample);

  const { content, image } = sample;

  const {
    brand,
    id,
    isBestSale,
    isDutyFree,
    name,
    origin,
    originalPrice,
    reviewCount,
    salePercent,
    salePrice,
    soldUnits,
  } = content;

  const handleOnClickPreview = (index) => {
    SetSelectedPreview(index);
  };
  return (
    <div className="bg-productList px-28 pt-5 space-y-10 min-h-screen">
      {/* padding top 5 for All*/}
      <span>
        Home &gt; Hair & Body &gt; Haircare &gt; Hair treatment & Styling &gt;
        The Inkey List Hyaluronic Acid Hair Treatment
      </span>
      {/* Product Image and Price */}
      <div className="w-full bg-white h-fit flex-col p-10  rounded-[8px] flex">
        <div className="flex">
          {/* This should take 70%*/}
          <div
            style={{ width: "70%" }}
            className="flex items-center justify-center"
          >
            <img src={image} className="w-80" />
          </div>
          {/* This should take 30% */}
          <div className="flex grow p-5  flex-col">
            {isDutyFree && (
              <div className="flex flex-row items-center ">
                <img src={dutyFreeLogo} className="w-5 h-5 mb-1" />
                <span className="text-[11px] text-dutyFree"> Duty Free</span>
              </div>
            )}
            <span className="text-[24px] mt-1 font-bold">{name}</span>
            <span className="text-[12px] mt-3 text-brand">{origin}</span>
            <div className="flex space-x-28 mt-3 items-center text-brand text-[11px] relative">
              <div className="flex justify-between space-x-1 items-center">
                <span> ({reviewCount}) </span>
                <div className="flex space-x-1 pb-[0.1rem] items-center">
                  <img
                    src={star}
                    className="w-3 h-3"
                    style={{ backgroundSize: "25%" }}
                  />
                  <img
                    src={star}
                    className="w-3 h-3"
                    style={{ backgroundSize: "25%" }}
                  />
                  <img
                    src={star}
                    className="w-3 h-3"
                    style={{ backgroundSize: "25%" }}
                  />
                  <img
                    src={star}
                    className="w-3 h-3"
                    style={{ backgroundSize: "25%" }}
                  />
                  <img
                    src={star}
                    className="w-3 h-3"
                    style={{ backgroundSize: "25%" }}
                  />
                </div>
                <div className="">
                  |
                  <span>
                    <span className="font-bold "> 5 Đánh giá </span>
                  </span>
                </div>
                <div className="">
                  |
                  <span>
                    <span className="font-bold"> {soldUnits}</span> Đã bán
                  </span>
                </div>
              </div>

              <div className="flex space-x-2">
                <img src={chiaSe} className="w-6 h-6" />
                <img src={favorite} className="w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-row items-center mt-10 space-x-10">
              <span className="text-salePrice font-bold text-[30px]">
                {salePrice.toLocaleString(undefined, {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                })}
                đ
              </span>
              <span className="line-through text-[12px] text-brand">
                {originalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                })}
                đ
              </span>
              <div
                className="w-[4.5rem] h-[2rem] text-[13px] rounded-[5px] bg-pink-100 font-bold
                 text-salePercentDetail flex items-center justify-center"
              >
                <span>{salePercent} off</span>
              </div>
            </div>
            <div className="mt-5 text-gray-400"> Số lượng </div>
            <div className="flex space-x-5 mt-10">
              <NavLink
                className="flex items-center justify-center z-30 appearance-none self-center bg-custom-gradient w-[150px] rounded-[8px] h-[55px] text-pickupFrom font-bold transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg cursor-pointer"
                to={`/CartStage1`}
                state={{
                  sample: sample,
                  purchaseType: "muaNgay",
                }}
              >
                Mua Ngay
              </NavLink>
              <NavLink
                className="flex items-center justify-center z-30 appearance-none self-center bg-gray-300 w-[250px] rounded-[8px] h-[55px] text-pickupFrom font-bold transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
                to={`/CartStage1`}
                state={{
                  sample: sample,
                  purchaseType: "themVaoGioHang",
                }}
              >
                Thêm vào giỏ hàng
              </NavLink>
            </div>
          </div>
        </div>
        {/* Switching views between various product previews */}
        <div className="flex pl-5 mt-5 space-x-10">
          {previews.map((preview, index) => (
            <div
              key={index}
              className={`w-14 h-16 cursor-pointer flex items-center justify-center ${
                index === selectedPreview ? "border-[2px] border-red-500" : ""
              }`}
              onClick={() => handleOnClickPreview(index)}
            >
              <img src={image} className="w-10 h-14" />
            </div>
          ))}
        </div>
      </div>

      {/* Mo ta san pham */}
      <div className="bg-white  flex flex-col w-full h-[30rem] p-8 space-y-5">
        <span className="font-bold text-[25px] text-pickupFrom">
          Mô tả sản phẩm
        </span>
        <span className="text-pickupFrom">
          Kiwi Zespri New Zealand (500G): có ruột bên trong màu vàng, có vỏ
          mượt, màu đồng, ở đầu quả có đài giống như vương miện. Hương vị ngọt
          ngào vùng nhiệt đới, thơm mát đã khiến nó trở thành món tráng miệng
          mùa hè tuyệt vời. Ngoài ra kiwi tươi còn được biết đến với nhiều giá
          trị dinh dưỡng tốt cho cơ thể.
        </span>

        <span className="text-pickupFrom">
          Thông tin dinh dưỡng <br />
          Thông tin dinh dưỡng: Trong trái kiwi chứa hàm lượng cao kali, giúp
          cân bằng electron trong cơ thể nhờ vào cơ chế làm trung hòa hàm lượng
          natri. Các chất chống oxy hóa trong kiwi giúp bảo vệ AND khỏi quá
          trình oxy hóa. Bên cạnh đó, kiwi còn có khả năng ngăn chặn ung thư.
          Hàm lượng cao vitamin C cùng các hợp chất chống oxy hóa trong trái
          kiwi đã được chứng minh có khả năng tăng cường hệ miễn dịch. Kiwi là
          nguồn chất xơ tuyệt vời, có thể ngăn ngừa táo bón và tiêu chảy cũng
          như những vấn đề về ruột khác. <br />
          Hàm lượng chất xơ trong kiwi có tác dụng loại độc tố ra khỏi hệ thống
          đường ruột. Trong thành phần trái kiwi chứa chất chống đông máu, vừa
          không có bất kỳ ảnh hưởng nào mà còn tốt cho sức khỏe. Với hàm lượng
          thấp glycemic, kiwi không làm tăng lượng đường trong máu một cách đột
          ngột. Hàm lượng glycemic phù hợp trong loại trái cây này luôn an toàn
          cho bệnh nhân tiểu đường. Nguồn vitamin E trong kiwi được biết đến như
          chất chống oxy hóa, có tác dụng bảo vệ da khỏi tình trạng thoái hóa.
          Với nguồn dưỡng chất cân bằng, kiwi thật sự tốt cho cơ thể mọi người,
          mọi lứa tuổi, mọi chế độ ăn uống.
        </span>

        <span className="text-pickupFrom">
          Hướng dẫn sử dụng: <br />
          Ăn ngon hơn khi để ngăn mát, và phù hợp làm sinh tố hoặc ăn kèm yogurt
          cũng đều rất ngon và khoẻ mạnh.
        </span>
      </div>

      {/* Product reviews */}
      <div className="p-8 w-full h-fit flex flex-col bg-white text-black space-y-5">
        <span className="text-[25px] font-bold"> Product Reviews </span>
        <div className="bg-gray-100 flex space-x-10 w-full h-[10rem] p-10">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[50px]"> 4.5 / 5</span>
            <div className="flex">
              <img src={star} className="w-14 h-14" />
              <img src={star} className="w-14 h-14" />
              <img src={star} className="w-14 h-14" />
              <img src={star} className="w-14 h-14" />
              <img src={star} className="w-14 h-14" />
            </div>
          </div>

          <div className="">
            <div className="flex p-2 space-x-2">
              <div className="rounded-[8px] space-x-2 mr-1 border bg-white border-gray-200  px-3 py-1 flex justify-center items-center">
                <img src={star} className="w-5 h-5" />
                <span> 1 </span>
              </div>
              <div className="rounded-[8px] space-x-2 mr-1 border bg-white border-gray-200 px-3 py-1 flex justify-center items-center">
                <img src={star} className="w-5 h-5" />
                <span> 2 </span>
              </div>
              <div className="rounded-[8px] space-x-2 mr-1 border bg-white border-gray-200 px-3 py-1 flex justify-center items-center">
                <img src={star} className="w-5 h-5" />
                <span> 3 </span>
              </div>
              <div className="rounded-[8px] space-x-2 border mr-1 bg-white border-gray-200 px-3 py-1 flex justify-center items-center">
                <img src={star} className="w-5 h-5" />
                <span> 4 </span>
              </div>
              <div className="rounded-[8px] space-x-2 bg-white border border-gray-200 px-3 py-1 flex justify-center items-center">
                <img src={star} className="w-5 h-5" />
                <span> 5 </span>
              </div>
            </div>

            <div className="flex p-2">
              <div className="rounded-[8px] mr-1 border bg-white px-5 border-gray-200 flex justify-center items-center">
                <span> Có bình luận </span>
              </div>

              <div className="rounded-[8px] mr-1 border bg-white px-5 py-2 border-gray-200   flex justify-center items-center">
                <span> Có hình ảnh / Video (200) </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  space-x-5 border border-b-gray-200 border-t-0 border-l-0 border-r-0 pb-8">
          <img src={review1} className="w-10 h-10" />
          <div className="flex flex-col space-y-1">
            <span> Brooklyn Simmons </span>
            <div className="flex">
              <img src={star} className="w-5 h-5" />
              <img src={star} className="w-5 h-5" />
              <img src={star} className="w-5 h-5" />
              <img src={star} className="w-5 h-5" />
              <img src={star} className="w-5 h-5" />
            </div>
            <span> 2022-12-15 17:03 </span>
            <span className=" " style={{ width: "60%" }}>
              Lorem ipsum dolor sit amet consectetur. Commodo eleifend ipsum
              curabitur scelerisque sed tincidunt id. Pellentesque vitae eget
              aliquet id at fermentum duis sociis. A risus nunc mauris tortor
              maecenas sapien malesuada. Enim eu lectus blandit fringilla.
            </span>
          </div>
        </div>

        <div className="flex  space-x-5 border border-b-gray-200 border-t-0 border-l-0 border-r-0 pb-8">
          <img src={review1} className="w-10 h-10" />
          <div className="flex flex-col space-y-1">
            <span> Brooklyn Simmons </span>
            <div className="flex">
              <img src={star} className="w-5 h-5" />
              <img src={star} className="w-5 h-5" />
              <img src={star} className="w-5 h-5" />
              <img src={star} className="w-5 h-5" />
              <img src={star} className="w-5 h-5" />
            </div>
            <span> 2022-12-15 17:03 </span>
            <span className=" " style={{ width: "60%" }}>
              Lorem ipsum dolor sit amet consectetur. Commodo eleifend ipsum
              curabitur scelerisque sed tincidunt id. Pellentesque vitae eget
              aliquet id at fermentum duis sociis. A risus nunc mauris tortor
              maecenas sapien malesuada. Enim eu lectus blandit fringilla.
            </span>
          </div>
        </div>
      </div>

      {/* Other Products*/}

      <div className="  space-y-5 p-8">
        <span className="text-[25px] font-bold"> Other Products </span>
        <div className="grid grid-cols-5 gap-y-5 gap-x-3 ">
          {otherProductsData.map((cartItem) => {
            return <Card sample={cartItem} />;
          })}
        </div>
      </div>

      {/* You May Also Like*/}
      <div className=" p-8 space-y-5">
        <span className="text-[25px] font-bold"> You might also like </span>
        <div className="grid grid-cols-5 gap-y-5 gap-x-3 ">
          {youMightAlsoLikeData.map((cartItem) => {
            return <Card sample={cartItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

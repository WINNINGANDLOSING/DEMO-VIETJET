import React, { useState, useEffect } from "react";
import { NavLink, Navigate, useNavigate, useLocation } from "react-router-dom";
import pickupLocation from "../../images/pickupLocation.png";

import { globalContext } from "../../context copy";
import CartCard from "../Helpers/CartCard";
const CartStage1 = () => {
  {
    /* padding top 5 for All*/
  }

  const location = useLocation();

  const sample = location.state.sample;
  const purchaseType = location.state.purchaseType;
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

  let cartItems1 = [];
  // Function to add new items to the local storage without overwriting it
  const handleAddNewItemToLocalStorage = () => {
    if(purchaseType==="muaNgay"){
      localStorage.clear();
    }
    // If localStorage contains any item, return the list of items, else if localStorage is empty, return []
    const oldItems = JSON.parse(localStorage.getItem("Items")) || [];
    const newItem = sample;
    // If there is value in oldItems already match the newItem, this ensure only unique items get pushed in
    if (
      !Object.values(oldItems).some(
        (item) => JSON.stringify(item) === JSON.stringify(newItem)
      )
    ) {
      oldItems.push(newItem);
    }

    localStorage.setItem("Items", JSON.stringify(oldItems));
    cartItems1 = JSON.parse(localStorage.getItem("Items"));
  };

  handleAddNewItemToLocalStorage();

  
  // const cartItems1 = [
  //   PrebookMealSample1,
  //   PrebookMealSample2,
  //   PrebookMealSample3,
  //   PrebookMealSample4,
  //   PrebookMealSample5,
  // ];

  const cartItems2 = [
    PrebookMealSample1,
    PrebookMealSample2,
    PrebookMealSample3,
    PrebookMealSample4,
    PrebookMealSample5,
  ];

  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [cartTracker, setCartTracker] = useState([]); // List of all cart items
  const [confirmedCartTracker, setConfirmedCartTracker] = useState([]); // List of selected cart items

  const [totalPrice, setTotalPrice] = useState(0);
  const [isBoughtFromDutyStore, setIsBoughtFromDutyStore] = useState(false);
  let navigate = useNavigate();
  const [isConfirmed, SetIsConfirmed] = useState(false);
  const handleOnClickMoveToStage2 = () => {
    if (window.confirm("Are you sure you want to proceed to the checkout ?")) {
      SetIsConfirmed(true);
    }
  };
  const handleOnCheckSelectAll = () => {
    if (!isSelectedAll) {
      setConfirmedCartTracker(cartTracker);
    } else {
      setConfirmedCartTracker([]);
    }
    setIsSelectedAll(!isSelectedAll);
  };

  {
    /* Tracker to track all the items in the cart to calculate the final price, track the number of item*/
  }

  useEffect(() => {
    const isTrue = Object.values(confirmedCartTracker).some((cartItem) => {
      return Object.keys(cartItem).toString().includes("ZoneDuty");
    });

    setIsBoughtFromDutyStore(isTrue);

    setTotalPrice(
      Object.values(confirmedCartTracker).reduce(
        (previousTotalPrice, nestedObject) => {
          const nestedTotal = Object.values(nestedObject).reduce(
            (sum, { finalPrice }) => sum + finalPrice,
            0
          );
          return previousTotalPrice + nestedTotal;
        },
        0
      )
    );
  }, [cartTracker, confirmedCartTracker]);

  /* Calculate the total price */

  // Object.keys(cartTracker).forEach((cartItem) => {
  //   console.log(cartTracker[cartItem]);
  //   const { finalPrice } = cartTracker[cartItem];
  //   calculatePrice(finalPrice);
  // });
  // console.log(sum)

  return (
    <div className="pt-5 pl-28 pr-10 min-h-screen bg-productList">
      <span className="text-[14px]"> Home &gt; Cart </span>
      <div className="mt-5 flex flex-col space-y-">
        <span className="text-[35px] font-bold"> Giỏ hàng </span>
        <span className="text-[25px]"> Airport pick-up details </span>
        <div className="flex  space-x-10">
          <div className="space-y-5 mt-5" style={{ width: "70%" }}>
            <div className="bg-white flex p-5 rounded-[8px] flex-col text-[16px]">
              <span className="font-bold"> Ly Lê </span>
              <span>Ho Chi Minh International Airport </span>
              <span> Colection time: Wed, 19 Apr 2023 (11:00 AM) </span>
            </div>

            <div className="bg-white flex p-5 rounded-[8px] flex-col text-[14px]">
              <div className="flex items-center space-x-5">
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(2)",
                    WebkitTransform: "scale(2)" /* For Safari */,
                    MozTransform: "scale(2)" /* For Firefox */,
                  }}
                  onChange={handleOnCheckSelectAll}
                />
                <span className="font-bold text-[16px]">
                  Tất cả ({cartItems2.length} sản phẩm)
                </span>
              </div>
            </div>

            <div className="rounded-[8px] flex flex-col">
              <span className="text-[20px] font-bold">
                Eastern @Cenang 2 Duty Free Shopping - Vietjetair Sales Counter
              </span>
              <div
                style={{ background: "#F9FAFA" }}
                className="p-5 flex mt-5 flex-col space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <img src={pickupLocation} className="w-5 h-5" />
                  <span className="font-bold text-[18px]">
                    Pick-up location
                  </span>
                </div>
                <span>
                  Ho Chi Minh International Airport, 07000 Ho Chi Minh, Viet Nam
                </span>
                <NavLink className="text-blue-400 cursor-pointer">
                  View store info
                </NavLink>
              </div>
              {purchaseType === "themVaoGioHang" &&
                cartItems1.map((cartItem) => (
                  <CartCard
                    salesCounter="ZoneDuty"
                    image={cartItem.image}
                    content={cartItem.content}
                    isSelectedAll={isSelectedAll}
                    confirmedCartTracker={confirmedCartTracker}
                    setConfirmedCartTracker={setConfirmedCartTracker}
                    cartTracker={cartTracker}
                    setCartTracker={setCartTracker}
                  />
                ))}

              {purchaseType === "muaNgay" && (
                <CartCard
                  salesCounter="ZoneDuty"
                  image={image}
                  content={content}
                  isSelectedAll={isSelectedAll}
                  confirmedCartTracker={confirmedCartTracker}
                  setConfirmedCartTracker={setConfirmedCartTracker}
                  cartTracker={cartTracker}
                  setCartTracker={setCartTracker}
                /> 
              )}
            </div>

            <div className="rounded-[8px] flex flex-col">
              <span className="text-[20px] font-bold">
                The Zone Duty Free - Vietjetair Sales Counter
              </span>
              <div
                style={{ background: "#F9FAFA" }}
                className="p-5 flex mt-5 flex-col space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <img src={pickupLocation} className="w-5 h-5" />
                  <span className="font-bold text-[18px]">
                    Pick-up location
                  </span>
                </div>
                <span>
                  Ho Chi Minh International Airport, 07000 Ho Chi Minh, Viet Nam
                </span>
                <NavLink className="text-blue-400 cursor-pointer">
                  View store info
                </NavLink>
              </div>
              {cartItems2.map((cartItem) => (
                <CartCard
                  salesCounter="ZoneDuty"
                  image={cartItem.image}
                  content={cartItem.content}
                  isSelectedAll={isSelectedAll}
                  confirmedCartTracker={confirmedCartTracker}
                  setConfirmedCartTracker={setConfirmedCartTracker}
                  cartTracker={cartTracker}
                  setCartTracker={setCartTracker}
                />
              ))}
            </div>
          </div>

          <div className="flex max-w-[22rem] max-h-fit mt-5 pb-10  flex-col grow rounded-[8px] bg-white">
            <div className="py-5 border mx-5 border-b-gray-200 border-l-0 border-r-0 border-t-0">
              <span className="font-bold text-[18px]">
                Chi tiết đơn hàng ({Object.keys(confirmedCartTracker).length}{" "}
                sản phẩm)
              </span>
              <div className="flex items-center justify-between mt-5">
                <span style={{ color: "#75767A", fontSize: "14px" }}>
                  Subtotal
                </span>
                <span
                  style={{
                    color: "#75767A",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {totalPrice}
                </span>
              </div>
            </div>
            <div className="mt-5 pl-5 flex items-center space-x-20">
              <span className="font-bold"> Tổng </span>
              <span
                style={{
                  color: "#EC2029",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                {totalPrice} VND
              </span>
            </div>
            {/* use navigate instead of navlink here because i want a confirm windows before users move to the stage 2 */}
            {/* <NavLink
              className="flex mt-7 items-center justify-center z-30 appearance-none self-center bg-custom-gradient w-80 rounded-[8px] h-[55px] text-pickupFrom font-bold transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
              to={`/CartStage1/CartStage2`}
              //state={{ pickupType: JSON.parse(JSON.stringify(selectedOption)) }}
              state={{ totalPrice: JSON.parse(JSON.stringify(totalPrice)) }}
            >
              Chọn phương thức thanh toán
            </NavLink> */}

            <div
              className="flex mt-7 items-center justify-center z-30 appearance-none self-center bg-custom-gradient w-80 rounded-[8px] h-[55px] text-pickupFrom font-bold transition-transform transform hover:scale-105 hover:text-red-500 hover:shadow-lg"
              onClick={() => {
                Object.keys(confirmedCartTracker).length > 0
                  ? window.confirm(
                      "Are you sure you want to proceed to the checkout section ? "
                    )
                    ? navigate(`/CartStage1/CartStage2`, {
                        state: {
                          totalPrice: JSON.parse(JSON.stringify(totalPrice)),
                          isBoughtFromDutyStore: isBoughtFromDutyStore,
                        },
                      })
                    : null
                  : window.alert("Please select at least one item to proceed.");
              }}
            >
              Chọn phương thức thanh toán
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartStage1;

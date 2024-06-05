import React, { useState, useEffect, useRef } from "react";
import favorite from "../../images/favorite.png";
import removeItem from "../../images/removeItem.png";
import dash from "../../images/-.png";

const CartCard = ({
  salesCounter,
  image,
  content,
  confirmedCartTracker,
  setConfirmedCartTracker,
  cartTracker,
  setCartTracker,
}) => {
  const { id, name, salePrice, originalPrice, salePercent, dungTich } = content;
  const [itemCount, setItemCount] = useState(1);
  const [isRemoved, SetIsRemoved] = useState(false);

  // In the first render, add everything to cartTracker
  useEffect(() => {
    setCartTracker((prevCartTracker) => {
      const updatedCartTracker = { ...prevCartTracker };
      return {
        ...updatedCartTracker,
        [id]: {
          ...updatedCartTracker[id],
          [salesCounter]: {
            name: name,
            amount: 1,
            salePrice: salePrice,
            finalPrice: 1 * salePrice,
          },
        },
      };
    });
  }, [id, name]);

  // Any item the itemCount changes, update both ConfirmedCartTracker (to get the select all functionality working) and CartTracker
  useEffect(() => {
    setCartTracker((prevState) => {
      const updatedCartTracker = { ...prevState };
      if (updatedCartTracker[id]) {
        return {
          ...updatedCartTracker,
          [id]: {
            ...updatedCartTracker[id],
            [salesCounter]: {
              ...updatedCartTracker[id][salesCounter],
              amount: itemCount,
              finalPrice: itemCount * salePrice,
            },
            // Maybe not needed
            // : {
            //     ...updatedCartTracker[id][salesCounter],
            //   },
          },
        };
      } else {
        return {
          ...updatedCartTracker,
        };
      }
    });

    setConfirmedCartTracker((prevState) => {
      const updatedConfirmedCartTracker = { ...prevState };
      if (updatedConfirmedCartTracker[id]) {
        return {
          ...updatedConfirmedCartTracker,
          [id]: {
            ...updatedConfirmedCartTracker[id],
            [salesCounter]: {
              ...updatedConfirmedCartTracker[id][salesCounter],
              name: name,

              amount: itemCount,
              salePrice: salePrice,
              finalPrice: itemCount * salePrice,
            },
          },
        };
      } else {
        return {
          ...updatedConfirmedCartTracker,
        };
      }
    });
  }, [itemCount]);

  // Function to handle user click on item
  // if user checks, update the confirmedCartTracker's amount to the current itemCount and same with the finalPrice
  // if uncheck, delete it
  const handleOnClickItem = (event) => {
    // My code :(
    // setConfirmedCartTracker((prevItemList) => {
    //   let updatedCheckedCartTracker = { ...prevItemList };

    // if (checked) {
    //   return {
    //     ...updatedCheckedCartTracker,
    //     [id]: {
    //       ...updatedCheckedCartTracker[id],
    //       [salesCounter]: {
    //         name: name,
    //         amount: itemCount,
    //         salePrice: salePrice,
    //         finalPrice: salePrice,
    //       },
    //     },
    //   };
    // } else { // Dunno how to progress here without making a meaningless {} in the Object, need better way of handling uncheck case
    //      return {
    //       ...updatedCartTracker,
    //       [id]: {}

    //      }
    //   }
    // });
    const checked = event.target.checked;

    setConfirmedCartTracker((prevState) => {
      const updatedConfirmedCartTracker = { ...prevState };

      if (checked) {
        return {
          ...updatedConfirmedCartTracker,
          [id]: {
            ...updatedConfirmedCartTracker[id],
            [salesCounter]: {
              name: name,
              amount: itemCount,
              salePrice: salePrice,
              finalPrice: salePrice * itemCount,
            },
          },
        };
      } else {
        if (
          updatedConfirmedCartTracker[id] &&
          updatedConfirmedCartTracker[id][salesCounter]
        ) {
          delete updatedConfirmedCartTracker[id][salesCounter];
          // There no sub-objects left in this object with the id, delete the entire object with this id
          if (Object.keys(updatedConfirmedCartTracker[id]).length === 0) {
            delete updatedConfirmedCartTracker[id];
          }
        }
        return updatedConfirmedCartTracker;
      }
    });
  };

  const handleOnClickRemoveItem = () => {
    SetIsRemoved(true);
    const removeHelper = () => {
      setCartTracker((prevState) => {
        const updatedCartTracker = { ...prevState };
        if (updatedCartTracker[id] && updatedCartTracker[id][salesCounter]) {
          delete updatedCartTracker[id][salesCounter];
          // There no sub-objects left in this object with the id, delete the entire object with this id
          if (Object.keys(updatedCartTracker[id]).length === 0) {
            delete updatedCartTracker[id];
          }
        }
        return updatedCartTracker;
      });

      setConfirmedCartTracker((prevState) => {
        const updatedConfirmedCartTracker = { ...prevState };
        if (
          updatedConfirmedCartTracker[id] &&
          updatedConfirmedCartTracker[id][salesCounter]
        ) {
          delete updatedConfirmedCartTracker[id][salesCounter];
          // There no sub-objects left in this object with the id, delete the entire object with this id
          if (Object.keys(updatedConfirmedCartTracker[id]).length === 0) {
            delete updatedConfirmedCartTracker[id];
          }
        }
        return updatedConfirmedCartTracker;
      });
    };
    removeHelper();
  };

  const handleItemCountChange = (type) => {
    setItemCount((itemCount) => {
      return type === "increment"
        ? itemCount + 1
        : itemCount - 1 > 0
        ? itemCount - 1
        : itemCount;
    });

    // If the button to increase or decrease the number of item is triggered, first add the base structure to updatedConfirmedCartTracker so it looks something like: {PM00001: {Eastern@Cenang: {}}}
    // Then the second useEffect() hook will be triggered because itemCount now has changed
    // Cannot add this function to the hook because it will lead to all items will be automatically selected in the first render
    setConfirmedCartTracker((prevState) => {
      console.log("noway");
      const updatedConfirmedCartTracker = { ...prevState };
      if (!updatedConfirmedCartTracker[id]) {
        updatedConfirmedCartTracker[id] = {};
      }
      updatedConfirmedCartTracker[id][salesCounter] = {
        // name: name,
        // amount: 999,
        // salePrice: salePrice,
        // finalPrice: salePrice,
      };
      return updatedConfirmedCartTracker;
    });
  };

  return (
    <div>
      {!isRemoved && (
        <div className="bg-white border space-x-5 border-t-gray-200 border-l-0 border-r-0 border-b-0 items-center flex p-5 relative">
          <input
            type="checkbox"
            id="item"
            name="item"
            value={content}
            style={{
              transform: "scale(2)",
              WebkitTransform: "scale(2)" /* For Safari */,
              MozTransform: "scale(2)" /* For Firefox */,
            }}
            checked={
              confirmedCartTracker[id] && confirmedCartTracker[id][salesCounter]
                ? true
                : false
            }
            onClick={handleOnClickItem}
          />
          <div className="flex space-x-10 w-full">
            <div>
              <img className="w-32 h-32 rounded-[8px]" src={image} />
            </div>
            <div className="flex flex-col grow">
              <div className="flex justify-between">
                <span className="font-bold text-[20px]">{name} </span>
                <div className="flex space-x-2">
                  <img src={favorite} className="w-6 h-6 cursor-pointer" />
                  <img
                    src={removeItem}
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleOnClickRemoveItem}
                  />
                </div>
              </div>
              {dungTich && (
                <span style={{ color: "#333333" }}>Dung tích: {dungTich}</span>
              )}
              <div className=" flex h-fit space-x-5 py-1 items-center border-[1px] mt-10  w-fit border-gray-200  rounded-[8px] ">
                <div
                  className="rounded-[8px] cursor-pointer w-9 h-9 flex justify-center  items-center bg-gray-200"
                  onClick={() => handleItemCountChange("decrement")}
                >
                  <img className="w-3 " src={dash} />
                </div>
                <span> {itemCount} </span>
                <div
                  className="rounded-[8px] cursor-pointer w-9 h-9 flex justify-center text-[20px] text-white items-center bg-gradient-to-r from-green-600 via-green-500 to-green-400"
                  onClick={() => handleItemCountChange("increment")}
                >
                  +
                </div>
              </div>
              <div className="absolute right-2 top-1/2">
                <span className="line-through text-gray-400">
                  {originalPrice} đ
                </span>
                <span className="text-red-400 ml-2">{salePercent} off </span>
                <br />
                <span
                  style={{
                    color: "#EC2029",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  {salePrice} VND
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;

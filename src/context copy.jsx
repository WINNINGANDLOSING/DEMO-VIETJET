import React from "react";
import { useContext, useState, useEffect } from "react";

/* Prebook Meal */
import BagMintGreen from "./images/jovianXVietjet.png";
import EDP35ml from "./images/EDP35ml.png";
import MizunaraOakCask from "./images/MizunaraOakCask.png";
import BeDelicious from "./images/BeDelicious.png";
import MarhenRickBlack from "./images/MarhenRickBlack.png";

/* Exclusive Vietjet Air merchandise */
import VietjetA320 from "./images/VietjetA320.png";
import VietjetKidsFunBag from "./images/VietjetKidsFunBag.png";
import VietjetPullbackPlane from "./images/VietjetPullbackPlane.png";
import VietjetNeoKeychain from "./images/VietJetNeoKeychain.png";
import VietjetSignatureCottonshirt from "./images/VietjetSignatureCottonShirt.png";

/* JetCafe */
import BanhChungChaBong from "./images/BanhChungChaBong.png";
import ComGaKho from "./images/ComGaKho.png";
import BunXaoTom from "./images/BunXaoTom.png";
import MyY from "./images/MyY.png";

/* F&B */
import Sprite from "./images/Sprite.png";
import KeoDeo from "./images/KeoDeo.png";
import DuaTuoi from "./images/DuaTuoi.png";
import CocaColaZero from "./images/CocaColaZero.png";
import CaPheSuaDa from "./images/CaPheSuaDa.png";

/* Super App Super Sale */
import MakeUp1 from "./images/MakeUp1.png";
import MakeUp2 from "./images/MakeUp2.png";
import StrawberryWine from "./images/StrawberryWine.png";
import UnknownDrink from "./images/UnknownDrink.png";
import Watch from "./images/Watch.png";

/* Biggest Beauty */
import Beauty1 from "./images/Beauty1.png";
import Beauty2 from "./images/Beauty2.png";
import Beauty3 from "./images/Beauty3.png";
import Beauty4 from "./images/Beauty4.png";
import Beauty5 from "./images/Beauty5.png";

/* Top Categories */
/* Declared in Body.jsx */

/* Suggestions for you */
import DepLe from "./images/DepLe.png";
import TuiXach from "./images/TuiXach.png";
import DayChuyen from "./images/DayChuyen.png";
import BaLo from "./images/BaLo.png";
import Ao from "./images/Ao.png";
import VongCoTay from "./images/VongCoTay.png";
import TuiXachHeadphone from "./images/TuiXachHeadphone.png";
import BopVi from "./images/BopVi.png";
import ThreeVongCoTay from "./images/3VongCoTay.png";
import BopVi2 from "./images/BopVi2.png";
import Headphone from "./images/Headphone.png";
import Wine from "./images/Wine.png";
import Connors from "./images/4CanConnors.png";
import Gin from "./images/Gin.png";
import MonkeyShoulder from "./images/MonekeyShoulder.png";

/* Data for Prebook Meal */
/* Data for Prebook Meal */
/* Data for Prebook Meal */

let image = BagMintGreen;
let content = {
  id: "PM00001",
  brand: "Jovian",
  name: "Jovian x Vietjet Multifunction Bag Mint Green",
  origin: "Vietjetair Mechandise",
  salePrice: 10,
  originalPrice: 534000,
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
  isBestSale: true,
};
const PrebookMealSample1 = {
  image,
  content,
};

image = EDP35ml;
content = {
  brand: "Jovian",
  id: "PM00002",

  name: "Jovian x Vietjet Classic 101 EDP 35ml",
  origin: "Vietjetair Mechandise",
  salePrice: 10,
  originalPrice: "2534000",
  salePercent: "5%",
  soldUnits: "859",
  reviewCount: 136,
  isDutyFree: true,
};
const PrebookMealSample2 = {
  image,
  content,
};

image = MizunaraOakCask;
content = {
  id: "PM00003",

  brand: "Dewar's",

  name: "Dewar’s 8 Year Old Japanese Mizunara Oak Cask (750ML)...",
  origin: "Kanpai Malaysia",
  salePrice: 10,
  originalPrice: "9934000",
  salePercent: "19%",
  soldUnits: "3.3k",
  reviewCount: 20,
};

const PrebookMealSample3 = {
  image,
  content,
};

image = BeDelicious;
content = {
  id: "PM00004",

  brand: "DKNY",
  name: "Be Delicious EDP 100ml",
  origin: "Vietjetair Mechandise",
  salePrice: 10,
  originalPrice: "900000",
  salePercent: "19%",
  soldUnits: "45",
  reviewCount: 20,
  isDutyFree: true,
  isBestSale: true,
};

const PrebookMealSample4 = {
  image,
  content,
};

image = MarhenRickBlack;
content = {
  id: "PM00005",

  brand: "MARHEN.J",
  name: "MARHEN.J Ricky - Black",
  origin: "A.Global Concept",
  salePrice: 10,
  originalPrice: "900000",
  salePercent: "40%",
  soldUnits: "45",
  reviewCount: 20,
  isDutyFree: true,
};

const PrebookMealSample5 = {
  image,
  content,
};

const PrebookMealData = {
  PrebookMealSample1,
  PrebookMealSample2,
  PrebookMealSample3,
  PrebookMealSample4,
  PrebookMealSample5,
};

/* End of Data for Prebook Meal */
/* End of Data for Prebook Meal */
/* End of Data for Prebook Meal */

/* Data for Exclusive Vietjet Air merchandise */
/* Data for Exclusive Vietjet Air merchandise */
/* Data for Exclusive Vietjet Air merchandise */

image = VietjetA320;
content = {
  id: "ExMerch00001",

  brand: "vietjet",
  name: "Vietjet A320 We Are All Champion Aircraft Model",
  origin: "Vietjetair Mechandise",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const ExclusiveMerchSample1 = { image, content };

image = VietjetKidsFunBag;
content = {
  id: "ExMerch00002",

  brand: "vietjet",
  name: "Vietjet Kids Fun Bag",
  origin: "Vietjetair Mechandise",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const ExclusiveMerchSample2 = { image, content };

image = VietjetPullbackPlane;
content = {
  id: "ExMerch00003",

  brand: "vietjet",
  name: "Vietjet Pullback Plane Topper Pen",
  origin: "Vietjetair Mechandise",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const ExclusiveMerchSample3 = { image, content };

image = VietjetNeoKeychain;
content = {
  id: "ExMerch00004",

  brand: "vietjet",
  name: "Vietjet NEO Keychain",
  origin: "Vietjetair Mechandise",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
};

const ExclusiveMerchSample4 = { image, content };

image = VietjetSignatureCottonshirt;
content = {
  id: "ExMerch00005",

  brand: "vietjet",
  name: "Vietjet Signature Cotton T-Shirt",
  origin: "Vietjetair Mechandise",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
  isBestSale: true,
};

const ExclusiveMerchSample5 = { image, content };

const ExclusiveMerchData = {
  ExclusiveMerchSample1,
  ExclusiveMerchSample2,
  ExclusiveMerchSample3,
  ExclusiveMerchSample4,
  ExclusiveMerchSample5,
};

/* End of Data for Exclusive Vietjet Air merchandise */
/* End of Data for Exclusive Vietjet Air merchandise */
/* End of Data for Exclusive Vietjet Air merchandise */

/* Data for Jet Cafe */
/* Data for Jet Cafe */
/* Data for Jet Cafe */
image = BanhChungChaBong;
content = {
  id: "Jet00001",
  brand: "vietjet",
  name: "Banh Chung Cha Bong",
  origin: "Vietjetair Jet Cafe",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const JetCafeSample1 = { image, content };

image = ComGaKho;
content = {
  id: "Jet00002",

  brand: "vietjet",
  name: "Com Ga Kho",
  origin: "Vietjetair Jet Cafe",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const JetCafeSample2 = { image, content };

image = BunXaoTom;
content = {
  id: "Jet00003",

  brand: "vietjet",
  name: "Bun Xao Tom",
  origin: "Vietjetair Jet Cafe",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const JetCafeSample3 = { image, content };

image = BunXaoTom;
content = {
  id: "Jet00004",

  brand: "vietjet",
  name: "Bun Xao Tom",
  origin: "Vietjetair Jet Cafe",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const JetCafeSample4 = { image, content };

image = MyY;
content = {
  id: "Jet00005",

  brand: "vietjet",
  name: "My Y",
  origin: "Vietjetair Jet Cafe",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
  isBestSale: true,
};

const JetCafeSample5 = { image, content };

const JetCafeData = {
  JetCafeSample1,
  JetCafeSample2,
  JetCafeSample3,
  JetCafeSample4,
  JetCafeSample5,
};

/* End of Data for Jet Cafe */
/* End of Data for Jet Cafe */
/* End of Data for Jet Cafe */

/* Data for F&B */
/* Data for F&B */
/* Data for F&B */
image = Sprite;
content = {
  id: "FB00001",

  brand: "vietjet",
  name: "Sprite",
  origin: "F&B",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const FAndBSample1 = { image, content };

image = KeoDeo;
content = {
  id: "FB00002",

  brand: "vietjet",
  name: "Keo Deo",
  origin: "F&B",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const FAndBSample2 = { image, content };

image = DuaTuoi;
content = {
  id: "FB00003",

  brand: "vietjet",
  name: "Dua Tuoi",
  origin: "F&B",
  salePrice: 334000,
  originalPrice: 534000,
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const FAndBSample3 = { image, content };

image = CocaColaZero;
content = {
  id: "FB00004",

  brand: "vietjet",
  name: "Coca Cola Zero",
  origin: "F&B",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const FAndBSample4 = { image, content };

image = CaPheSuaDa;
content = {
  id: "FB00005",

  brand: "vietjet",
  name: "Ca Phe Sua Da",
  origin: "F&B",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const FAndBSample5 = { image, content };

const FAndBData = {
  FAndBSample1,
  FAndBSample2,
  FAndBSample3,
  FAndBSample4,
  FAndBSample5,
};
/* End of Data for F&B */
/* End of Data for F&B */
/* End of Data for F&B */

/* Data for Super App Super Sale */
/* Data for Super App Super Sale */
/* Data for Super App Super Sale */

image = MakeUp1;
content = {
  id: "SASL00001",

  brand: "vietjet",
  name: "Sprite",
  origin: "FSuper Sale",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const SuperAppSuperSaleSample1 = { image, content };

image = MakeUp2;
content = {
  id: "SASL00002",

  brand: "vietjet",
  name: "Keo Deo",
  origin: "Super Sale",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const SuperAppSuperSaleSample2 = { image, content };

image = StrawberryWine;
content = {
  id: "SASL00003",

  brand: "vietjet",
  name: "Strawberry Wine",
  origin: "Super Sale",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const SuperAppSuperSaleSample3 = { image, content };

image = UnknownDrink;
content = {
  id: "SASL00004",

  brand: "vietjet",
  name: "Coca Cola Zero",
  origin: "Super Sale",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const SuperAppSuperSaleSample4 = { image, content };

image = Watch;
content = {
  id: "SASL00005",

  brand: "vietjet",
  name: "Watch",
  origin: "Super Sale",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const SuperAppSuperSaleSample5 = { image, content };

const SuperAppSuperData = {
  SuperAppSuperSaleSample1,
  SuperAppSuperSaleSample2,
  SuperAppSuperSaleSample3,
  SuperAppSuperSaleSample4,
  SuperAppSuperSaleSample5,
};

/* End of Data for Super App Super Sale */
/* End of Data for Super App Super Sale */
/* End of Data for Super App Super Sale */

/* Data for Biggest Beauty */
/* Data for Biggest Beauty */
/* Data for Biggest Beauty */
image = Beauty1;
content = {
  id: "BB00001",

  brand: "vietjet",
  name: "Nuoc hoa 1",
  origin: "Biggest Beauty",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const BeautySample1 = { image, content };

image = Beauty2;
content = {
  id: "BB00002",

  brand: "vietjet",
  name: "Nuoc hoa 2",
  origin: "Biggest Beauty",
  salePrice: "6334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
};

const BeautySample2 = { image, content };

image = Beauty3;
content = {
  id: "BB00003",

  brand: "vietjet",
  name: "Nuoc hoa 3",
  origin: "Biggest beauty",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const BeautySample3 = { image, content };

image = Beauty4;
content = {
  id: "BB00004",

  brand: "vietjet",
  name: "Nuoc hoa 4",
  origin: "Biggest beauty",
  salePrice: "254000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const BeautySample4 = { image, content };

image = Beauty5;
content = {
  id: "BB00005",

  brand: "vietjet",
  name: "Nuoc hoa 5",
  origin: "Biggest beauty",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
};

const BeautySample5 = { image, content };

const BeautyData = {
  BeautySample1,
  BeautySample2,
  BeautySample3,
  BeautySample4,
  BeautySample5,
};

/* End of Biggest Beauty*/
/* End of Biggest Beauty*/
/* End of Biggest Beauty*/

/* Suggestions for You */
/* Suggestions for You */
/* Suggestions for You */
image = DepLe;
content = {
  id: "SG00001",

  brand: "vietjet",
  name: "Dép Lê",
  origin: "Merch",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
};

const suggestionsSample1 = { image, content };

image = TuiXach;
content = {
  id: "SG00002",

  brand: "Hugo Boss",
  name: "Bóp Ví",
  origin: "Travelmall - HD",
  salePrice: "6334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
  isBestSale: true,
};

const suggestionsSample2 = { image, content };

image = DayChuyen;
content = {
  id: "SG00003",

  brand: "vietjet",
  name: "Day chuyền",
  origin: "Merch",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
};

const suggestionsSample3 = { image, content };

image = BaLo;
content = {
  id: "SG00004",

  brand: "Hugo Boss",
  name: "Ba lo",
  origin: "Travelmall - HD",
  salePrice: "6334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
};

const suggestionsSample4 = { image, content };

image = Ao;
content = {
  id: "SG00005",

  brand: "Hugo Boss",
  name: "Áo",
  origin: "Travelmall - HD",
  salePrice: "6334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
};

const suggestionsSample5 = { image, content };

image = VongCoTay;
content = {
  id: "SG00006",

  brand: "Hugo Boss",
  name: "Vòng Cổ Tay",
  origin: "Travelmall - HD",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
  isDutyFree: true,
};

const suggestionsSample6 = { image, content };

image = TuiXachHeadphone;
content = {
  id: "SG00007",

  brand: "Hugo Boss",
  name: "Modal 2",
  origin: "Travelmall - HD",
  salePrice: "6334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
  isDutyFree: true,
};

const suggestionsSample7 = { image, content };

image = BopVi;
content = {
  id: "SG00008",

  brand: "Hugo Boss",
  name: "Bóp Ví",
  origin: "Travelmall - HD",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
  isDutyFree: true,
};

const suggestionsSample8 = { image, content };

image = ThreeVongCoTay;
content = {
  id: "SG00009",

  brand: "Hugo Boss",
  name: "Vòng cổ tay",
  origin: "Travelmall - HD",
  salePrice: "254000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
  isDutyFree: true,
};

const suggestionsSample9 = { image, content };

image = BopVi2;
content = {
  id: "SG00010",

  brand: "Hugo Boss",
  name: "Bop Vi",
  origin: "Travelmall - HD",
  salePrice: "6334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
  isDutyFree: true,
};

const suggestionsSample10 = { image, content };

image = Headphone;
content = {
  id: "SG00011",

  brand: "vietjet",
  name: "Headphone",
  origin: "Travelmall - HD",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
  isDutyFree: true,
};

const suggestionsSample11 = { image, content };

image = Wine;
content = {
  id: "SG00012",

  brand: "vietjet",
  name: "Bia",
  origin: "hugo Boss",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isBestSale: true,
  isDutyFree: true,
};

const suggestionsSample12 = { image, content };

image = Connors;
content = {
  id: "SG00013",

  brand: "vietjet",
  name: "4 Connors Can",
  origin: "Vietjet",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
};

const suggestionsSample13 = { image, content };

image = Gin;
content = {
  id: "SG00014",

  brand: "Klairs",
  name: "Gin",
  origin: "Vietjet",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "49%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
};

const suggestionsSample14 = { image, content };

image = MonkeyShoulder;
content = {
  id: "SG00015",

  brand: "vietjet",
  name: "MonkeyShoulder Drink",
  origin: "Mont Blanc",
  salePrice: "334000",
  originalPrice: "534000",
  salePercent: "40%",
  soldUnits: "3.3k",
  reviewCount: 136,
  isDutyFree: true,
};

const suggestionsSample15 = { image, content };

const suggestionsData = {
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
};

/* End of Suggestions for You */
/* End of Suggestions for You */
/* End of Suggestions for You */

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        PrebookMealData,
        ExclusiveMerchData,
        JetCafeData,
        FAndBData,
        SuperAppSuperData,
        BeautyData,
        suggestionsData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const globalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

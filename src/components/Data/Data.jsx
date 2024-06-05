/* Prebook Meal */
import BagMintGreen from "../../images/jovianXVietjet.png";
import EDP35ml from "../../images/EDP35ml.png";
import MizunaraOakCask from "../../images/MizunaraOakCask.png";
import BeDelicious from "../../images/BeDelicious.png";
import MarhenRickBlack from "../../images/MarhenRickBlack.png";

/* Exclusive Vietjet Air merchandise */
import VietjetA320 from "../../images/VietjetA320.png";
import VietjetKidsFunBag from "../../images/VietjetKidsFunBag.png";
import VietjetPullbackPlane from "../../images/VietjetPullbackPlane.png";
import VietjetNeoKeychain from "../../images/VietJetNeoKeychain.png";
import VietjetSignatureCottonshirt from "../../images/VietjetSignatureCottonShirt.png";

/* JetCafe */
import BanhChungChaBong from "../../images/BanhChungChaBong.png";
import ComGaKho from "../../images/ComGaKho.png";
import BunXaoTom from "../../images/BunXaoTom.png";
import MyY from "../../images/MyY.png";

/* F&B */
import Sprite from "../../images/Sprite.png";
import KeoDeo from "../../images/KeoDeo.png";
import DuaTuoi from "../../images/DuaTuoi.png";
import CocaColaZero from "../../images/CocaColaZero.png";
import CaPheSuaDa from "../../images/CaPheSuaDa.png";

/* Super App Super Sale */
import MakeUp1 from "../../images/MakeUp1.png";
import MakeUp2 from "../../images/MakeUp2.png";
import StrawberryWine from "../../images/StrawberryWine.png";
import UnknownDrink from "../../images/UnknownDrink.png";
import Watch from "../../images/Watch.png";

/* Biggest Beauty */
import Beauty1 from "../../images/Beauty1.png";
import Beauty2 from "../../images/Beauty2.png";
import Beauty3 from "../../images/Beauty3.png";
import Beauty4 from "../../images/Beauty4.png";
import Beauty5 from "../../images/Beauty5.png";

/* Top Categories */
/* Declared in Body.jsx */

/* Suggestions for you */
import DepLe from "../../images/DepLe.png";
import TuiXach from "../../images/TuiXach.png";
import DayChuyen from "../../images/DayChuyen.png";
import BaLo from "../../images/BaLo.png";
import Ao from "../../images/Ao.png";
import VongCoTay from "../../images/VongCoTay.png";
import TuiXachHeadphone from "../../images/TuiXachHeadphone.png";
import BopVi from "../../images/BopVi.png";
import ThreeVongCoTay from "../../images/3VongCoTay.png";
import BopVi2 from "../../images/BopVi2.png";
import Headphone from "../../images/Headphone.png";
import Wine from "../../images/Wine.png";
import Connors from "../../images/4CanConnors.png";
import Gin from "../../images/Gin.png";
import MonkeyShoulder from "../../images/MonekeyShoulder.png";

import React from "react";

const Data = [
  {
    id: "PM00001",
    brand: "Jovian",
    name: "Jovian x Vietjet Multifunction Bag Mint Green",
    image: BagMintGreen,
    origin: "Vietjetair Mechandise",
    salePrice: 25000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
    isBestSale: true,
  },
  {
    id: "PM00002",
    brand: "Jovian",
    image: EDP35ml,
    name: "Jovian x Vietjet Classic 101 EDP 35ml",
    origin: "Vietjetair Mechandise",
    salePrice: 2500000,
    originalPrice: 2534000,
    salePercent: "5%",
    soldUnits: "859",
    reviewCount: 136,
    isDutyFree: true,
  },
  {
    id: "PM00003",
    brand: "Dewar's",
    image: MizunaraOakCask,

    name: "Dewar’s 8 Year Old Japanese Mizunara Oak Cask (750ML)...",
    origin: "Kanpai Malaysia",
    salePrice: 130000,
    originalPrice: 9934000,
    salePercent: "19%",
    soldUnits: "3.3k",
    reviewCount: 20,
  },

  {
    id: "PM00004",
    brand: "DKNY",
    name: "Be Delicious EDP 100ml",
    origin: "Vietjetair Merchandise",
    salePrice: 85000,
    originalPrice: 900000,
    salePercent: "19%",
    soldUnits: "45",
    reviewCount: 20,
    isDutyFree: true,
    isBestSale: true,
    image: BeDelicious,
  },

  {
    id: "PM00005",
    image: MarhenRickBlack,

    brand: "MARHEN.J",
    name: "MARHEN.J Ricky - Black",
    origin: "A.Global Concept",
    salePrice: 7000000,
    originalPrice: 9000000,
    salePercent: "40%",
    soldUnits: "45",
    reviewCount: 20,
    isDutyFree: true,
  },

  /* End of Data for Prebook Meal */
  /* End of Data for Prebook Meal */
  /* End of Data for Prebook Meal */

  /* Data for Exclusive Vietjet Air merchandise */
  /* Data for Exclusive Vietjet Air merchandise */
  /* Data for Exclusive Vietjet Air merchandise */

  {
    id: "ExMerch00001",
    image: VietjetA320,
    brand: "vietjet",
    name: "Vietjet A320 We Are All Champion Aircraft Model",
    origin: "Vietjetair Mechandise",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },
  {
    id: "ExMerch00002",
    image: VietjetKidsFunBag,

    brand: "vietjet",
    name: "Vietjet Kids Fun Bag",
    origin: "Vietjetair Mechandise",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },
  {
    id: "ExMerch00003",
    image: VietjetPullbackPlane,

    brand: "vietjet",
    name: "Vietjet Pullback Plane Topper Pen",
    origin: "Vietjetair Mechandise",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },
  {
    id: "ExMerch00004",
    image: VietjetNeoKeychain,

    brand: "vietjet",
    name: "Vietjet NEO Keychain",
    origin: "Vietjetair Mechandise",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
  },
  {
    id: "ExMerch00005",
    image: VietjetSignatureCottonshirt,

    brand: "vietjet",
    name: "Vietjet Signature Cotton T-Shirt",
    origin: "Vietjetair Mechandise",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
    isBestSale: true,
  },

  /* End of Data for Exclusive Vietjet Air merchandise */
  /* End of Data for Exclusive Vietjet Air merchandise */
  /* End of Data for Exclusive Vietjet Air merchandise */

  /* Data for Jet Cafe */
  /* Data for Jet Cafe */
  /* Data for Jet Cafe */
  {
    id: "Jet00001",
    image: BanhChungChaBong,

    brand: "vietjet",
    name: "Banh Chung Cha Bong",
    origin: "Vietjetair Jet Cafe",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },
  {
    id: "Jet00002",
    image: ComGaKho,

    brand: "vietjet",
    name: "Com Ga Kho",
    origin: "Vietjetair Jet Cafe",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },
  {
    id: "Jet00003",
    image: BunXaoTom,

    brand: "vietjet",
    name: "Bun Xao Tom",
    origin: "Vietjetair Jet Cafe",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },
  {
    id: "Jet00004",
    image: BunXaoTom,

    brand: "vietjet",
    name: "Bun Xao Tom",
    origin: "Vietjetair Jet Cafe",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },
  {
    id: "Jet00005",

    brand: "vietjet",
    image: MyY,
    name: "My Y",
    origin: "Vietjetair Jet Cafe",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
    isBestSale: true,
  },
  /* End of Data for Jet Cafe */
  /* End of Data for Jet Cafe */
  /* End of Data for Jet Cafe */

  /* Data for F&B */
  /* Data for F&B */
  /* Data for F&B */
  {
    id: "FB00001",
    image: Sprite,

    brand: "vietjet",
    name: "Sprite",
    origin: "F&B",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },
  {
    id: "FB00002",
    image: KeoDeo,

    brand: "vietjet",
    name: "Keo Deo",
    origin: "F&B",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },
  {
    id: "FB00003",
    image: DuaTuoi,

    brand: "vietjet",
    name: "Dua Tuoi",
    origin: "F&B",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },
  {
    id: "FB00004",
    image: CocaColaZero,

    brand: "vietjet",
    name: "Coca Cola Zero",
    origin: "F&B",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },
  {
    id: "FB00005",
    image: CaPheSuaDa,

    brand: "vietjet",
    name: "Ca Phe Sua Da",
    origin: "F&B",
    salePrice: 434000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },

  {
    id: "SASL00001",
    image: MakeUp1,
    brand: "vietjet",
    name: "Sprite",
    origin: "FSuper Sale",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },

  {
    id: "SASL00002",
    image: MakeUp2,

    brand: "vietjet",
    name: "Keo Deo",
    origin: "Super Sale",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },
  {
    id: "SASL00003",
    image: StrawberryWine,

    brand: "vietjet",
    name: "Strawberry Wine",
    origin: "Super Sale",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },
  {
    id: "SASL00004",
    image: UnknownDrink,

    brand: "vietjet",
    name: "Coca Cola Zero",
    origin: "Super Sale",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },

  /* End of Data for F&B */
  /* End of Data for F&B */
  /* End of Data for F&B */

  /* Data for Super App Super Sale */
  /* Data for Super App Super Sale */
  /* Data for Super App Super Sale */
  {
    id: "SASL00005",
    image: Watch,

    brand: "vietjet",
    name: "Watch",
    origin: "Super Sale",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },

  /* End of Data for Super App Super Sale */
  /* End of Data for Super App Super Sale */
  /* End of Data for Super App Super Sale */

  /* Data for Biggest Beauty */
  /* Data for Biggest Beauty */
  /* Data for Biggest Beauty */

  {
    id: "BB00001",
    image: Beauty1,

    brand: "vietjet",
    name: "Nuoc hoa 1",
    origin: "Biggest Beauty",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },

  {
    id: "BB00002",
    image: Beauty2,

    brand: "vietjet",
    name: "Nuoc hoa 2",
    origin: "Biggest Beauty",
    salePrice: 6334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
  },

  {
    id: "BB00003",
    image: Beauty3,
    brand: "vietjet",
    name: "Nuoc hoa 3",
    origin: "Biggest beauty",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },
  {
    id: "BB00004",
    image: Beauty4,

    brand: "vietjet",
    name: "Nuoc hoa 4",
    origin: "Biggest beauty",
    salePrice: 254000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },
  {
    id: "BB00005",
    image: Beauty5,

    brand: "vietjet",
    name: "Nuoc hoa 5",
    origin: "Biggest beauty",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
  },

  /* End of Biggest Beauty*/
  /* End of Biggest Beauty*/
  /* End of Biggest Beauty*/

  /* Suggestions for You */
  /* Suggestions for You */
  /* Suggestions for You */
  {
    id: "SG00001",
    image: DepLe,
    brand: "vietjet",
    name: "Dép Lê",
    origin: "Merch",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
  },
  {
    id: "SG00002",
    image: TuiXach,
    brand: "Hugo Boss",
    name: "Bóp Ví",
    origin: "Travelmall - HD",
    salePrice: 6334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
    isBestSale: true,
  },
  {
    id: "SG00003",
    image: DayChuyen,
    brand: "vietjet",
    name: "Day chuyền",
    origin: "Merch",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
  },
  {
    id: "SG00004",
    image: BaLo,
    brand: "Hugo Boss",
    name: "Ba lo",
    origin: "Travelmall - HD",
    salePrice: 6334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
  },
  {
    id: "SG00005",
    image: Ao,
    brand: "Hugo Boss",
    name: "Áo",
    origin: "Travelmall - HD",
    salePrice: 6334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
  },
  {
    id: "SG00006",
    image: VongCoTay,
    brand: "Hugo Boss",
    name: "Vòng Cổ Tay",
    origin: "Travelmall - HD",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
    isDutyFree: true,
  },
  {
    id: "SG00007",
    image: TuiXachHeadphone,
    brand: "Hugo Boss",
    name: "Modal 2",
    origin: "Travelmall - HD",
    salePrice: 6334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
    isDutyFree: true,
  },
  {
    id: "SG00008",
    image: BopVi,
    brand: "Hugo Boss",
    name: "Bóp Ví",
    origin: "Travelmall - HD",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
    isDutyFree: true,
  },
  {
    id: "SG00009",
    image: ThreeVongCoTay,
    brand: "Hugo Boss",
    name: "Vòng cổ tay",
    origin: "Travelmall - HD",
    salePrice: 254000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
    isDutyFree: true,
  },
  {
    id: "SG00010",
    image: BopVi2,
    brand: "Hugo Boss",
    name: "Bop Vi",
    origin: "Travelmall - HD",
    salePrice: 6334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
    isDutyFree: true,
  },
  {
    id: "SG00011",
    image: Headphone,
    brand: "vietjet",
    name: "Headphone",
    origin: "Travelmall - HD",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
    isDutyFree: true,
  },
  {
    id: "SG00012",
    image: Wine,
    brand: "vietjet",
    name: "Bia",
    origin: "hugo Boss",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isBestSale: true,
    isDutyFree: true,
  },
  {
    id: "SG00013",
    image: Connors,
    brand: "vietjet",
    name: "4 Connors Can",
    origin: "Vietjet",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
  },
  {
    id: "SG00014",
    image: Gin,
    brand: "Klairs",
    name: "Gin",
    origin: "Vietjet",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "49%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
  },
  {
    id: "SG00015",
    image: MonkeyShoulder,
    brand: "vietjet",
    name: "MonkeyShoulder Drink",
    origin: "Mont Blanc",
    salePrice: 334000,
    originalPrice: 534000,
    salePercent: "40%",
    soldUnits: "3.3k",
    reviewCount: 136,
    isDutyFree: true,
  },
];

export default Data;

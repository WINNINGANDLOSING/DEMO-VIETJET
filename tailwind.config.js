/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        128: "32rem", // Equivalent to 512px
        160: "40rem", // Equivalent to 640px
        // Add more custom sizes as needed
      },
      fontFamily: {
        JambonoMedium: ["Jambono Medium", "serif"],
        JambonoBlack: ["Jambono Black", "serif"],
        KoHo: ["KoHo", "serif"],
        Tilt: ["Tilt Prism", "serif"],
        Tiny5: ["Tiny5", "sans-serif"]
      },
      width: {
        128: "32rem",
        160: "40rem",
        widthForAd: "44rem",
      },
      height: { heightForAd: "308px", heightForBanner: "152px" },
      colors: {
        headerCategoriesText: "#75767A",
        headerCategoriesBackground: "#F9F9F9",
        hotrovietjetcom: "#FFBA0A",
        prebookMeal: "#EC2029",
        exclusiveVietjetAir: "#CA161C",
        topCategories: "#CA161C",
        brand: "#75767A",
        salePrice: "#FF4949",
        salePercent: "#CA161C",
        salePercentDetail: "#FF4949",

        dutyFree: "#2F73D2",
        // Define custom linear gradient for the sale logo

        salePercentFrom: "#F9A51A",
        salePercentVia: "#FBB612",
        salePercentTo: "#FFDD00",
        pickupDetail: "#F5F5F5",

        pickupFrom: "#333333",
        placeholder: "#75767A",
      },

      before: {
        "custom-dot": {
          content: '""',
          display: "block",
          width: "60%",
          height: "60%",
          backgroundColor: "white",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      },

      top: {
        Vang: "-100px",
      },
      left: {
        Vang: "-100px",
      },

      borderColor: {
        bottomPart: "#FFFFFF80",
      },

      backgroundColor: {
        productList: "#F5F5F5",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #F9A51A -4.93%, #FBB612 18.27%, #FFDD00 71.59%)",
      },
    },
  },
  plugins: [],
};

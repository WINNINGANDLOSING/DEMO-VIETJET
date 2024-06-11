import React from "react";
import { useContext, useState, useEffect } from "react";
import Data from "./components/Data/Data";

/* End of Suggestions for You */
/* End of Suggestions for You */
/* End of Suggestions for You */

const DataBase = Data;
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [deliveryMethod, setDeliveryMethod] = useState("");

  return (
    <AppContext.Provider
      value={{
        deliveryMethod,
        setDeliveryMethod,
        DataBase,
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

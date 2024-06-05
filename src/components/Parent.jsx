import React, { useState, useEffect } from "react";
import ChildComponent from "./Child";

const ParentComponent = () => {

    console.log("Parent component rendered");

  return (
    <div>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;

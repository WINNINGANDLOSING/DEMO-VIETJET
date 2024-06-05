import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const MultiThumbSlider = () => {
  const [values, setValues] = useState([50000, 200000]);

  return (
    <div className="">
      <div className="mb-4 text-xl font-bold text-gray-700">
        Từ {values[0].toLocaleString()} đến {values[1].toLocaleString()}
      </div>
      <Range
        step={0.1}
        min={values[0]}
        max={300000}
        values={values}
        onChange={(value) => setValues(value)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: "#F2F4F5",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "30px",
              width: "30px",
              background: "white",
              borderRadius: "100%",
              border: "1px solid red"
            }}
          ></div>
        )}
      />
    </div>
  );
};

export default MultiThumbSlider;

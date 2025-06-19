import React, { useState } from "react";

const Textarea = ({ label, rows = 4, name, value, onChange }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-[300px] mb-11 group">
      <textarea
        name={name}             // important for form state
        value={value}           // controlled input
        onChange={onChange}     // controlled change
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        rows={rows}
        className="w-full text-[18px] px-[5px] pt-[10px] border-b border-gray-500 focus:outline-none bg-transparent resize-none peer"
      ></textarea>

      {/* Label */}
      <label
        className={`absolute left-[5px] text-[18px] text-gray-500 transition-all duration-200 
        ${focused || value ? "-top-[20px] text-[14px] text-indigo-600" : "top-[10px]"}`}
      >
        {label}
      </label>

      {/* Bar */}
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-indigo-600 transition-all duration-200 group-focus-within:left-0 group-focus-within:w-1/2"></span>
      <span className="absolute bottom-0 right-1/2 w-0 h-[2px] bg-indigo-600 transition-all duration-200 group-focus-within:right-0 group-focus-within:w-1/2"></span>

      {/* Highlight */}
      {focused && (
        <span
          className="absolute top-1/4 left-0 opacity-50 pointer-events-none"
          style={{
            width: "100px",
            height: "60%",
            backgroundColor: "#5264AE",
            animation: "highlightFade 0.3s ease forwards",
          }}
        />
      )}
    </div>
  );
};

export default Textarea;
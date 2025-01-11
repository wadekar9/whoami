import React from "react";

interface Props {
  rounded?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ rounded = false, children }) => {
  return (
    <button
      className={`custom-btn text-xl max-h-[50px] shadow-custom shadow-red-500 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] text-white-50 px-5 py-2 border border-red-500 hover:text-red-500 transition-colors duration-100 ease-in-out bg-green-900 cursor-pointer ${
        rounded ? "rounded-full" : "rounded-lg"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
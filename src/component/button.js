import React from "react";

const Button = ({ children, title, color,disabled, type, ...rest }) => {
    return (
      <button disabled={disabled} type={type} className={`rounded-full bg-${color} text-text_base px-12 py-2 bg-[#C72C2B] hover:shadow-xl shadow-[#C72C2B]`} {...rest}>
        <span className="text-xl">{title}</span>
      </button>
    );
  };


export default Button;
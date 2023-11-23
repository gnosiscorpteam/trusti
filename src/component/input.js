import React from "react";

const Input = ({label, placeholder,type, name, onChange, onBlur, value, error}) => {
    return(
        <div className="block">
            <p className="text-md font-semibold pb-2">{label}</p>
            <input 
            type={type}
            name={name}
            onChange={onChange}
             onBlur={onBlur}
             value={value} placeholder = {placeholder} className={"focus-visible:outline-0 text-lg border-b-2 focus:border-[black] w-full " +  (error? "border-secondary": "border-[#7B7B7B]")} />
        </div>
    );
}

export default Input
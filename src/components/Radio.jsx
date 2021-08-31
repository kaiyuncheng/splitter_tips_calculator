import React, { cloneElement, Children, useRef, useState } from "react";
import clsx from "clsx";

export function RadioGroup({ id, label, children }) {
  
    return (
      <fieldset className="flex flex-col space-y-2">
        <legend className="text-cyan-label font-bold">{label}</legend>
        <div className="grid grid-cols-2 gap-4">
          {Children.map(children, (child) => cloneElement(child, { name: id }))}
        </div>
      </fieldset>
    );
  }
  
  export function Radio({ label, value, name, custom, checked }) {
    const [customValue, setCustomValue]=useState(0);
    const ref = useRef(null);
  
    function onFocus() {
      ref.current?.focus();
    }
  
    return (
      <div className="group">
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          className="sr-only peer"
          onChange={custom && onFocus}
          defaultChecked={checked}
        />
        <label
          htmlFor={value}
          className={clsx(
            "block w-full py-3 rounded-sm ",
            "text-center text-xl font-bold",
            custom
              ? "peer-checked:hidden"
              : "peer-checked:bg-cyan-light peer-checked:text-cyan-text hover:bg-cyan-hover hover:text-cyan-text",
            custom
              ? "bg-cyan-text-field text-cyan-text-light"
              : "bg-cyan-darker text-white"
          )}
        >
          {label}
        </label>
  
        {custom && (
          <div className="hidden peer-checked:flex  flex-col">
            <label htmlFor="custom"  className="text-cyan-label font-bold"></label>
            <div className="relative flex items-center">
              <input id="custom"
                value={customValue}
                onChange={(e)=>setCustomValue(Number(e.target.value))}
                name="custom"
                type="number"
                ref={ref}
                className={clsx(
                  "w-full bg-cyan-text-field p-2 rounded-sm",
                  "text-right text-cyan-text font-bold text-2xl",
                  "outline-none focus:ring focus:ring-cyan-focus group-hover:ring group-hover:ring-cyan-focus"
                )}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
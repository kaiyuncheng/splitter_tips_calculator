import clsx from "clsx";
import React, { cloneElement } from "react";

export function TextField({ id, label, icon, value, min, error }) {
    return (
      <div className="flex flex-col space-y-2">
      <div className="flex justify-between">
      <label htmlFor={id} className="text-cyan-label font-bold">
          {label}
        </label>
        {error && <span className="text-red-500">Can’t be zero</span>}

      </div>
        
        <div className="relative flex items-center">
          <input
            type="number"
            id={id}
            name={id}
            className={clsx(
              "w-full bg-cyan-text-field p-2 rounded-sm",
              "text-right text-cyan-text font-bold text-2xl",
              "outline-none focus:ring focus:ring-cyan-focus",
              error && "ring ring-red-500"
            )}
            defaultValue={value}
            min={min}
          />
  
          {icon && cloneElement(icon, { className: "absolute w-4 mx-4" })}
        </div>
      </div>
    );
  }
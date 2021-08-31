import clsx from "clsx";
import React from "react";

export function Card({ children, className }) {
    return <div className={clsx("p-10", className)}>{children}</div>;
  }
  
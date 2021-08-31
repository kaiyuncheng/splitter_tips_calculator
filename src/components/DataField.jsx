import React from "react";
export function DataField({ title, note, value }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <strong className="text-white">{title}</strong>
        <span className="text-cyan-label text-sm">{note}</span>
      </div>
      <p className="text-cyan-light text-3xl font-bold">{value}</p>
    </div>
  );
}

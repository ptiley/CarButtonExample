import React from "react";

function SelectCar({ language, onLanguageChange }) {
  return (
    <div>
      <label className="label">Select My Car</label>
      <div className="opts">
        {THECARS.map(({ label, value }) => {
          return (
            <div
              key={label}
              className={`opt ${language === value ? "selected" : ""}`}
              onClick={() => onLanguageChange(value)}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const THECARS = [
  { label: "Walter's Car", value: "wc" },
  { label: "Sylar's Car", value: "sc" },
  { label: "Jnr's Car", value: "jc" },
];

export default SelectCar;

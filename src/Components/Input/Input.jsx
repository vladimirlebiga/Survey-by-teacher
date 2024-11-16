import React from "react";

export default function Input({ id, stem, state, onChange }) {
  const inputConfig = {
    checkbox: {
      className: "checkbox",
      type: "checkbox",
    },
    firstName: {
      className: "input",
      type: "input",
    },
    connect: {
      className: "input",
      type: "input",
    },
    sight: {
      className: "checkbox p-8",
      type: "checkbox",
    },
    hearing: {
      className: "checkbox",
      type: "checkbox",
    },
    taste: {
      className: "checkbox",
      type: "checkbox",
    },
    see: {
      className: "checkbox",
      type: "checkbox",
    },
    hear: {
      className: "checkbox",
      type: "checkbox",
    },
    do: {
      className: "checkbox",
      type: "checkbox",
    },
    listen: {
      className: "checkbox",
      type: "checkbox",
    },
    workout: {
      className: "checkbox",
      type: "checkbox",
    },
    exercise: {
      className: "checkbox",
      type: "checkbox",
    },
    remember: {
      className: "checkbox",
      type: "checkbox",
    },
    sense: {
      className: "checkbox",
      type: "checkbox",
    },
    use: {
      className: "checkbox",
      type: "checkbox",
    },
    read: {
      className: "checkbox",
      type: "checkbox",
    },
    explain: {
      className: "range",
      type: "range",
    },
    approach: {
      className: "checkbox",
      type: "checkbox",
    },
  };

  const handleChange = (e) => {
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    onChange({ ...state, [id]: value });
  };

  const { className, type = "text" } = inputConfig[id];
  return (
    <div className="text-left py-1">
      {(type === "checkbox" || type === "radio") && (
        <>
          <input
            type={type}
            className={`${className}`}
            value={state[id]}
            checked={type === "checkbox" ? state[id] : undefined}
            onChange={handleChange}
          />
          <label className="pl-2">{stem}</label>
        </>
      )}
      {(type === "input" || type === "range") && (
        <>
          <label className="flex flex-col mt-4">
            {stem}{" "}
            <input
              type={type}
              className={`${className} border-2 border-black ms-60 w-80 rounded-lg`}
              value={state[id]}
              onChange={(e) => onChange({ ...state, [id]: e.target.value })}
            />
          </label>
        </>
      )}
    </div>
  );
}

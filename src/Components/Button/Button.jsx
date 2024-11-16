import React from "react";

export default function Button({ id, onclick }) {
  const buttonConfig = {
    submit: {
      type: "submit",
      text: "Submit",
      className:
        "px-4 py-2 bg-[#28a745] text-[#FFF] m-4 rounded-3xl border-2 border-black",
    },
    cancel: {
      text: "Cancel",
      className:
        "px-4 py-2 bg-[#fd7e14] text-[#FFF] m-4 rounded-3xl border-2 border-black",
    },
  };

  const { type = "button", text, className } = buttonConfig[id];

  return (
    <button onClick={onclick} className={className} type={type}>
      {text}
    </button>
  );
}

import React, { useState } from "react";

export default function Textarea({
  id,
  stem,
  charlimit,
  lines,
  state,
  onChange,
}) {
  const textareaConfig = {
    why: {
      className: "textarea border-2 border-black rounded-lg ms-60 w-80",
    },

    address: {
      className: "textarea border-2 border-black rounded-lg ms-60 w-80",
    },

    feedback: {
      className: "textarea border-2 border-black rounded-lg ms-60 w-80 ",
    },
  };

  const { className } = textareaConfig[id];
  return (
    <div className="text-left">
      <label className="flex flex-col mt-4">
        {stem}{" "}
        <textarea
          maxLength={charlimit}
          rows={lines}
          value={state[id]}
          className={className}
          onChange={(e) => onChange({ ...state, [id]: e.target.value })}
        />
      </label>
    </div>
  );
}

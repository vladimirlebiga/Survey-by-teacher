import React, { useState } from "react";
import Button from "../Button";
import Select from "../Select";
import Input from "../Input";
import Textarea from "../Textarea";
import Instruction from "../instruction";

const config = ["submit", "cancel"];

export default function Form({
  questions,
  form,
  setForm,
  state,
  onChange,
  onSubmit,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        {questions?.map((item) => (
          <div key={item.id}>
            {item.instructions && <Instruction text={item.instructions} />}
            {(item.scale ||
              item.type === "input" ||
              item.type === "checkbox" ||
              item.type === "radio" ||
              item.type === "range") && (
              <Input {...item} state={state} onChange={onChange} />
            )}
            {item.type === "textarea" && (
              <Textarea {...item} state={state} onChange={onChange} />
            )}
          </div>
        ))}
        <div>
          {config.map((item) => (
            <Button key={item} id={item} />
          ))}
        </div>
      </form>
    </div>
  );
}

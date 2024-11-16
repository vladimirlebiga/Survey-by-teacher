import React, { useState, useEffect } from "react";
import sampleJson from "./sample.json";
import Form from "../../Components/Form";

export default function SamplePage({
  sampleForm,
  setSampleForm,
  state,
  onChange,
  onSubmit,
}) {
  const [sample, setSample] = useState({});
  useEffect(() => {
    setSample(sampleJson);
  }, []);

  return (
    <div>
      <h2 className="p-4">{sample.name}</h2>
      <p className="p-2">{sample.description}</p>
      <p className="p-2">{sample.instructions}</p>
      <Form
        questions={sample.questions}
        form={sampleForm}
        setForm={setSampleForm}
        state={state}
        onChange={onChange}
        onSubmit={onSubmit}

        // onSubmit={onChange}
      />
      <p>{sample.thankyou}</p>
      <p>{sample.copyright}</p>
    </div>
  );
}

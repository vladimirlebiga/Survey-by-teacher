import React, { useEffect, useState } from "react";
import spiJson from "./spi.json";
import Form from "../../Components/Form";

export default function SpiPage({
  spiForm,
  setSpiForm,
  state,
  onChange,
  onSubmit,
}) {
  const [spi, setSpi] = useState({});
  useEffect(() => {
    setSpi(spiJson);
  }, []);

  return (
    <div>
      <h2>{spi.name}</h2>
      <p>{spi.instructions}</p>
      <Form
        questions={spi.questions}
        form={spiForm}
        setForm={setSpiForm}
        state={state}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <p>{spi.thankyou}</p>
      <p>{spi.autoreport}</p>
      <p>{spi.copyright}</p>
    </div>
  );
}

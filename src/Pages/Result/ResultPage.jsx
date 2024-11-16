import React, { useState, useEffect } from "react";
import sampleJson from "../Sample/sample.json";
import spiJson from "../SPI/spi.json";

export default function ResultPage({ formData }) {
  const [sample, setSample] = useState([]);
  useEffect(() => {
    setSample(sampleJson.questions);
  }, []);

  const [spi, setSpi] = useState([]);
  useEffect(() => {
    setSpi(spiJson.questions);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const array = Object.entries(formData);
    const data = array.map((item, index) => {
      let text = null;
      if (typeof item[1] === "boolean") {
        text = item[1] ? "yes" : "no";
      } else {
        text = item[1];
      }

      const elemSample = sample.find((el) => {
        return item[0] === el.id;
      });

      console.log(formData);

      const elemSpi = spi.find((el) => {
        console.log(item[0], el.id);
        return item[0] === el.id;
      });
      console.log(elemSpi);
      let title = null;
      if (elemSample) {
        title = elemSample.stem;
      }
      if (elemSpi) {
        title = elemSpi.stem;
      }

      return { title: title, text: text, id: index };
    });
    setData(data);
  }, [formData, sample, spi]);

  return (
    <div className="max-w-7xl mx-auto pt-14">
      <ol>
        {data.map((item) => (
          <li className="flex justify-between" key={item.id}>
            <p>{item.title}:</p>
            <p>{item.text}</p>
          </li>
        ))}
        <></>
      </ol>
    </div>
  );
}

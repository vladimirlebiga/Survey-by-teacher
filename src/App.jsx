import { React, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SamplePage from "./Pages/Sample/SamplePage";
import ResultPage from "./Pages/Result/ResultPage";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import SpiPage from "./Pages/SPI/SpiPage";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  const navigate = useNavigate();

  const [sampleForm, setSampleForm] = useState({
    survey: "",
    tool: "",
    why: "",
    firstName: "",
    address: "",
    feedback: "",
  });

  const [spiForm, setSpiForm] = useState({
    sight: false,
    hearing: false,
    taste: false,
    see: false,
    hear: false,
    do: false,
    listen: false,
    workout: false,
    exercise: false,
    remember: false,
    sense: false,
    use: false,
    read: false,
    explain: 0,
    approach: false,
  });

  const [formData, setFormData] = useState({});

  const onSubmitSample = (e) => {
    e.preventDefault();
    setFormData(sampleForm);
    navigate("/result");
  };

  const onSubmitSpi = (e) => {
    e.preventDefault();
    setFormData(spiForm);
    navigate("/result");
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sample"
          element={
            <SamplePage
              sampleForm={sampleForm}
              setSampleForm={setSampleForm}
              state={sampleForm}
              onChange={setSampleForm}
              onSubmit={onSubmitSample}
            />
          }
        />
        <Route
          path="/spi"
          element={
            <SpiPage
              spiForm={spiForm}
              setSpiForm={setSpiForm}
              state={spiForm}
              onChange={setSpiForm}
              onSubmit={onSubmitSpi}
            />
          }
        />
        <Route path="/result" element={<ResultPage formData={formData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

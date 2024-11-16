import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const navConfig = [
    {
      id: "home",
      title: "Home",
      link: "/",
    },
    {
      id: "sample",
      title: "Sample",
      link: "/sample",
    },
    {
      id: "spi",
      title: "SPI",
      link: "/spi",
    },
    {
      id: "result",
      title: "Result",
      link: "/result",
    },
  ];
  return (
    <div>
      <ul className="flex gap-4">
        {navConfig.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

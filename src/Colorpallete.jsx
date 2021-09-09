/* eslint-disable no-unreachable */
import React, { useEffect, useState } from "react";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Colorpallete = () => {
  const colors = [
    "#9253a1",
    "#FF5733",
    "#FFBD33",
    "#33FF57",
    "#33FFBD",
    "#DBFF33",
    "#75FF33",
    "#0000ff",
    "#660033",
    "#ffff99",
  ];

  const [background, setBackground] = useState("#071415");
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setCurrent(null);
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [current]);

  return (
    <div className="app" style={{ background: background }}>
      {current !== null && <h1> Copied {current}</h1>}
      <div className="conatiner">
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div
              style={{
                background: color,
                filter: "brightness(85%)",
                boxshadow: color === background ? "0 0 5px #0000" : "",
              }}
              className="box"
              onClick={() => setBackground(color)}
            />
            <CopyToClipboard text={`color: ${color};`}>
              <p
                style={{ color: color === background ? "#ffff" : color }}
                onClick={() => setCurrent(color)}
              >
                {color}
              </p>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colorpallete;

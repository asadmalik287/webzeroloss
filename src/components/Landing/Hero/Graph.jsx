import React, { useEffect, useRef, useState } from "react";
import graph from "../../../assets/Hero/graph.png";

const Graph = () => {
  const [fontSize, setFontSize] = useState(14);

  const graphRef = useRef();

  const handleResize = () => {
    setFontSize(graphRef.current.getBoundingClientRect().height * 0.04057);
  };

  useEffect(() => {
    if (graphRef.current) {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [graphRef.current]);

  return (
    <div className="w-full">
      <img
        ref={graphRef}
        width={1418}
        height={458}
        src={graph}
        alt="graph"
        className="w-full"
      />

      <span
        style={{ fontSize }}
        className="absolute text-[#2EBD85] font-bold leading-[1.14] font-ibmplex top-[37%] left-[38%] animate-pulse"
      >
        +1,030.58
      </span>

      <span
        style={{ fontSize }}
        className="absolute text-[#2EBD85] font-bold leading-[1.14] font-ibmplex top-[46%] left-[44%] animate-pulse"
      >
        +114.25
      </span>

      <span
        style={{ fontSize }}
        className="absolute text-[#2EBD85] font-bold leading-[1.14] font-ibmplex top-[38%] left-[48.5%] animate-pulse"
      >
        +935.26
      </span>

      <span
        style={{ fontSize }}
        className="absolute text-[#2EBD85] font-bold leading-[1.14] font-ibmplex top-[43%] left-[63%] animate-pulse"
      >
        +870.36
      </span>

      <span
        style={{ fontSize }}
        className="absolute text-[#2EBD85] font-bold leading-[1.14] font-ibmplex top-[32.8%] left-[66%] animate-pulse"
      >
        +1090.11
      </span>
    </div>
  );
};

export default Graph;

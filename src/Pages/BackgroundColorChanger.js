import React from "react";
import { useParams } from "react-router-dom";

export const BackgroundColorChanger = () => {
  const params = useParams();
  console.log(params.colorname);
  return (
    <main
      style={{
        height: "100vh",
        backgroundColor: `${params.colorname}`,
        fontSize: "30px"
      }}
    >
      Background Color Changer
    </main>
  );
};

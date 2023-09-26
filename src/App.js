import React from "react";
import CarDetails from "./CarDetails";

export default function App() {
  let initialData = { model: "toyota", year: 2001, color: "#ad6767" };
  return (
    <div>
      <CarDetails initialData={initialData} />
    </div>
  );
}

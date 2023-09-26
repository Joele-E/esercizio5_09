import React, { createRef, useEffect } from "react";

const CarDetails = ({ initialData }) => {
  const _formRef = createRef();

  function handleSubmit(event) {
    event.preventDefault();
    /*  console.log(_formRef.current) */
  }

  useEffect(() => {
    _formRef.current.model.value = initialData.model;
    _formRef.current.year.value = initialData.year;
    _formRef.current.color.value = initialData.color;
  }, [initialData, _formRef]);
  return (
    <div>
      <form onSubmit={handleSubmit} ref={_formRef}>
        <label htmlFor="model">Model:</label>
        <input type="text" name="model" />
        <label htmlFor="year">Year:</label>
        <input type="number" name="year" />
        <label htmlFor="colo">Color:</label>
        <input type="color" name="color" />

        <button type="submit">INVIA</button>
      </form>
    </div>
  );
};

export default CarDetails;

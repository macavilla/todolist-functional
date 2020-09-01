import React, { useState } from "react";


function AddTask(props) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setInputValue(value);

  }

  function handleClick() {
    if (inputValue !== "") {
      props.propDePrueba(inputValue);

      setInputValue("");
    }

  }

  return (
    <>
      <input onChange={(e) => {
        handleChange(e)
      }} type="text"  />
      <button onClick={ handleClick() }>Agregar</button>
    </>
  );
}

export default AddTask;

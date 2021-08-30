import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import css from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error ❌",
        message:
          "Por favor ingrese un nombre y una edad (no se permiten campos vacíos).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Error ❌",
        message: "Por favor ingrese una edad mayor a 0.",
      });
      return;
    }
    props.onAddUser(enteredUserName, +enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={css.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Edad (Número)</label>
          <input
            id="age"
            type="number"
            onChange={userAgeHandler}
            value={enteredAge}
          />
          <Button type="submit">+ Agregar</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

import React from "react";
import Card from "./Card";
import Button from "./Button";
import css from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={css.backdrop} onClick={props.onConfirm} />
      <Card className={css.modal}>
        <header className={css.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={css.content}>
          <p>{props.message}</p>
        </div>
        <footer className={css.actions}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;

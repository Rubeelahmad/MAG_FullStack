"use client";
import React, { FC } from "react";
import styles from "./Button.module.scss";

interface Props {
  btntext: string;
  btntype: string;
  btnAction: () => void;
}

const Button: FC<Props> = ({ btntext, btntype, btnAction }) => {
  return (
    <button
      className={`${styles.button} ${
        btntype === "primary" ? styles.primary : styles.secondary
      }`}
      onClick={btnAction}
    >
      {btntext}
    </button>
  );
};

export default Button;



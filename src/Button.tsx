import * as React from "react";
// @ts-ignore
import styles from "./Button.modules.css";

// @ts-ignore
const { addPropertyControls, ControlType } = window.Framer;

interface Props {
  title: string;
}

const InnerButton: React.FC<Props> = (props) => {
  return <button className={styles.button}>{props.title}</button>;
};

export const Button = InnerButton;

addPropertyControls(Button, {
  title: {
    type: ControlType.String,
  },
  foo: {
    type: ControlType.String,
  },
  bar: {
    type: ControlType.String,
  },
});

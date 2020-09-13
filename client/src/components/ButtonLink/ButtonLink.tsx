import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonLinkProps } from "../../utils/interfaces";

export const ButtonLink: React.FC<ButtonLinkProps> = (props: ButtonLinkProps): JSX.Element => {
  return (
    <Button
      id={props.id}
      variant="contained"
      color="primary"
      href={props.URL}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={props.iconHTML}
    >
      {props.buttonText}
    </Button>
  );
};

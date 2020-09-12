import React from "react";
import Button from "@material-ui/core/Button";

interface ButtonLinkProps {
  buttonText: string
  URL: string
  id: string
  iconHTML: any
}

export const ButtonLink = (props: ButtonLinkProps) => {
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

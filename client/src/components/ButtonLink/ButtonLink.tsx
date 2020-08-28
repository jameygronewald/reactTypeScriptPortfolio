import React from "react";
import Button from "@material-ui/core/Button";

export const ButtonLink = (props: {
  buttonText: string;
  URL: string;
  id: string;
  iconHTML: any;
}) => {
  return (
    <div>
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
    </div>
  );
};

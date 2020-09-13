import React from "react";
import { CodeIconProps } from "../../utils/interfaces";

export const CodeIcon: React.FC<CodeIconProps> = (props: CodeIconProps): JSX.Element => {
  return <div className="codeIcon">{props.iconHTML}</div>;
};

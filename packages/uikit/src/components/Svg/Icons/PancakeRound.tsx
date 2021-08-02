import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <circle cx="45" cy="45" r="45" fill="#AA00FF" />
      <polygon fill="#FFFFFF" points="66,70 75,56 75,37 66,37 66,47 54,47 54,36 45,36 45,70 54,70 54,54 66,54"/>
  		<polygon fill="#FFFFFF" points="63,24 24,24 19,32 31,32 31,70 40,70 40,32 58,32 63,24"/>
    </Svg>
  );
};

export default Icon;

import { useState } from "react";
import styled from "styled-components";

const Tile = ({
  type,
  style = {
    backgroundColor: type == 1 ? "white" : "black",
    flexGrow: 1,
    height: "20fr",
    border: "1px solid black",
  },
  onClick = () => {},
}) => {
  const [compStyle, setCompStyle] = useState(style);
  const handleClick = () => {
    onClick();
    setCompStyle({ ...compStyle, backgroundColor: type == 0 ? "grey" : "red" });
  };

  return <div type={type} style={compStyle} onClick={handleClick}></div>;
};

export default Tile;

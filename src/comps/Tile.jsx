import { useEffect, useRef, useState } from "react";

const Tile = ({
  type,

  onClick = () => {},
}) => {
  const [compStyle, setCompStyle] = useState({
    flexGrow: 1,
    height: "20fr",
    border: "1px solid black",
    backgroundColor: type == 1 ? "white" : "black",
  });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) onClick();
  }, [compStyle]);

  const handleClick = () => {
    setCompStyle({
      ...compStyle,
      backgroundColor: type == 0 ? "black" : "red",
    });

    return setClicked(true);
  };

  return <div type={type} style={compStyle} onClick={handleClick}></div>;
};

export default Tile;

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Tile from "./Tile";

const Rowmovement = styled.div`
  animation: slide ${(props) => props.time}s;
  animation-fill-mode: forwards;
`;

const Rush = ({ time }) => {
  const wrapper = {};

  const isMounted = useRef(false);
  const [started, setStarted] = useState(false);
  const Start = () => setStarted(true);
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const random = (r) => {
      return Math.floor(Math.random() * r);
    };

    const generateTiles = () => {
      for (let k = 0; k < 5; k++) {
        const ran = new Array(4);

        ran[random(4)] = 0;
        for (let j = 0; j < 4; j++) {
          if (ran[j] != 0) ran[j] = 1;
        }
        console.log(ran);
        setTiles((prevTiles) => [...prevTiles, ran]);
      }
    };

    generateTiles();
  }, []);

  useEffect(() => {
    isMounted.current = true;
  }, [tiles]);

  return (
    <div
      style={{
        border: "1px solid black ",
        height: "100vh",
      }}
    >
      {isMounted.current ? (
        tiles.map((arr, j) => (
          <Rowmovement key={j} time={time}>
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                height: "20vh",
              }}
              key={j}
            >
              {arr.map((t, k) => (
                <Tile onClick={Start} type={t} key={k} />
              ))}
            </div>
          </Rowmovement>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Rush;

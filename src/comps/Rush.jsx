import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Tile from "./Tile";

const Rowmovement = styled.div`
  animation: slide ${(props) => props.time}s;
  animation-fill-mode: forwards;
`;

const Rush = ({ time }) => {
  const initialState = {
    started: false,
    tiles: [],
    isOpen: false,
    isMounted: false,
  };

  const isMounted = useRef(initialState.isMounted);
  const [started, setStarted] = useState(initialState.started);
  const [tiles, setTiles] = useState(initialState.tiles);
  const [isOpen, setOpen] = useState(initialState.isOpen);

  const Items = () => {
    return (
      <>
        {isMounted.current ? (
          tiles.map((row, i) => (
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                height: "20vh",
              }}
              key={i}
            >
              {row.map((tile, k) => (
                <Tile
                  onClick={tile == 0 ? () => Start(i) : Gameover}
                  type={tile}
                  key={k}
                />
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
      </>
    );
  };
  const Retry = () => {
    setStarted(initialState.started);

    setOpen(initialState.isOpen);

    let tilesR = new Array(4);

    for (let j = 0; j < 5; j++) {
      tilesR[j] = generateRow();
    }

    setTiles(tilesR);
  };

  const random = (r) => {
    return Math.floor(Math.random() * r);
  };

  const Start = (k) => {
    console.log(k);
    if (k == 4) {
      const ran = new Array(4);

      for (let j = 0; j < 5; j++) {
        if (ran[j] != 0) ran[j] = tiles[j - 1];
      }

      ran[0] = generateRow();

      setTiles(ran);
    }
  };

  const generateRow = () => {
    const ran = new Array(4);
    ran[random(4)] = 0;
    for (let j = 0; j < 4; j++) {
      if (ran[j] != 0) ran[j] = 1;
    }

    return ran;
  };

  useEffect(() => {
    const generateTiles = () => {
      for (let k = 0; k < 5; k++) {
        const ran = new Array(4);

        ran[random(4)] = 0;
        for (let j = 0; j < 4; j++) {
          if (ran[j] != 0) ran[j] = 1;
        }

        setTiles((prevTiles) => [...prevTiles, ran]);
      }
    };

    generateTiles();
  }, []);

  useEffect(() => {
    isMounted.current = true;
  }, [tiles]);

  const Gameover = () => {
    setOpen(true);
  };

  /*

  style={{
    display: "flex",
    flexFlow: "row",
    height: "20vh",
  }}*/

  return (
    <div className="responsive">
      <Modal isOpen={isOpen} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Game over!</ModalHeader>

          <ModalBody>
            <Button onClick={Retry}>Retry</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div
        style={{
          border: "1px solid black ",
          height: "100vh",
        }}
      >
        <>{<Items />}</>
      </div>
    </div>
  );
};

export default Rush;

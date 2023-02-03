import { Box, Container, propNames } from "@chakra-ui/react";
import { Children, useEffect, useState } from "react";

const Gamemodal = (props) => {
  return (
    <>
      {props.isOpen ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0, 0.3)",

            position: "fixed",
            zIndex: 1,
            left: "0",
            top: "0",
            boxShadow: " 2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              width: "50%",
              backgroundColor: "white",
              borderRadius: "10px",
              position: "fixed",
              zIndex: 1,
              left: "25%",
              top: "40%",
              boxShadow: " 2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Box>{props.children}</Box>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Gamemodal;

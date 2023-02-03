import "./App.css";
import { Box, Center, ChakraProvider, Container } from "@chakra-ui/react";
import Rush from "./comps/Rush";

function App() {
  const breakpoints = {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  };
  return (
    <ChakraProvider>
      <div className="App">
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            width={[
              "100%", // 0-30em
              "50%", // 30em-48em
              "30%",
            ]}
          >
            <Rush time={2} />
          </Box>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;

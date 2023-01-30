import "./App.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Rush from "./comps/Rush";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div style={{ overflow: "hidden" }}>
          <Container>
            <Rush time={2} />
          </Container>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;

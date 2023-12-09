import { Flex, Box, Text } from "@chakra-ui/react";
// import MovieCard from "./Components/Movie/MovieCard";
import NowPlaying from "./Components/Movie/NowPlaying";
import NextChange from "./Components/Movie/NextChange";
import axios from "axios";
import { useEffect } from "react";

function App() {
  return (
    <Flex direction={"column"}>
      <Box>
        <Text>Now Showing</Text>
        <NowPlaying />
      </Box>
      <Box>
        <Text>Next Change</Text>
        <NextChange />
      </Box>
    </Flex>
  );
}

export default App;

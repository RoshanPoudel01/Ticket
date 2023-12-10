import React from "react";
import SidebarComponent from "./SidebarComponent";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

const Sidebard = ({ children }) => {
  return (
    <Flex maxW={"100%"}>
      <SidebarComponent  />
      <Box width={"80%"}>{children}</Box>
    </Flex>
  );
};

export default Sidebard;

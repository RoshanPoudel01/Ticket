import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import {
  Box,
  Image,
  Text,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import NavItems from "./NavItems";
const NavBar = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        rounded={"md"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"100%"}
        // bgColor="#FFFFF"
        bgColor="#4E494D"
      >
        <Image
          p={2}
          objectFit={"cover"}
          boxSize={"60px"}
          src="https://bit.ly/dan-abramov"
        />
        <Box display={{ base: "none", md: "flex" }}>
          <NavItems />
        </Box>
        <Box p={2} display={{ base: "none", md: "flex" }}>
          <Button fontSize={16}>Login</Button>
        </Box>
        <Popover returnFocusOnClose={false} closeOnBlur={false}>
          <PopoverTrigger>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </PopoverTrigger>

          <PopoverContent>
            <PopoverBody bgColor={"#4E494D"}>
              {isOpen ? (
                <Box
                  pb={4}
                  gap={2}
                  display={{ base: "flex", md: "none" }}
                  flexDirection={{ base: "column" }}
                >
                  <NavItems />
                  <Box>
                    <Button fontSize={16}>Login</Button>
                  </Box>
                </Box>
              ) : null}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Box mt={4}>{children}</Box>
    </>
  );
};

export default NavBar;

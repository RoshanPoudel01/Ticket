import React from "react";
import { Button, Box, Image, Text } from "@chakra-ui/react";

const MovieCard = ({ id, title, genre, image, duration }: Movie) => {
  return (
    <Box
      height={"389"}
      maxWidth={"319"}
      position={"relative"}
      overflow={"hidden"}
      borderWidth="3px"
      borderRadius="lg"
      borderColor="#EFF0F7"
      boxShadow="md"
      cursor={"pointer"}
      transition={"0.5s"}
      _hover={{
        borderColor: "#d96c2c",
        button: {
          bgColor: "#d96c2c",
        },
      }}
    >
      <Image
        objectFit={"cover"}
        height={"389"}
        width={"100%"}
        fallbackSrc="https://m.media-amazon.com/images/M/MV5BNTY1ZDQzNzQtZGM1Yy00YjRhLTliYmMtOGM2OWFlYTRjOTc2XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg"
        src={image}
      />
      <Box position={"absolute"} top={"70%"} left={"8%"}>
        <Text color={"white"} fontSize={16}>
          {genre}/{duration}
        </Text>
        <Text color={"white"} fontWeight={"bold"} fontSize={20}>
          {title}
        </Text>
        <Button color={"GrayText"} fontSize={12} rounded={"none"}>
          Book
        </Button>
      </Box>
    </Box>
  );
};

export default MovieCard;

import {
  Card,
  CardBody,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SidebarComponent = () => {
  return (
    <Flex width={"20%"} direction={"column"} bg={"white"}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.png/2392px-Nissan_logo.png"
        boxSize={150}
        objectFit="cover"
        // p={"27px"}
      ></Image>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default SidebarComponent;

import React from "react";
import { Navlink } from "../../Helper/Navlink";
import { Flex, Text } from "@chakra-ui/react";
interface item {
  id: number;
  name: string;
  href: string;
}

const navItems: item[] = [
  {
    id: 1,
    name: "Home",
    href: Navlink?.homePage,
  },
  {
    id: 2,
    name: "Movies",
    href: Navlink?.movies,
  },
  {
    id: 3,
    name: "About",
    href: Navlink?.homePage,
  },
  //   {
  //     id: 4,
  //     name: "Movies",
  //     href: Navlink?.movies,
  //   },
  //   {
  //     id: 5,
  //     name: "Home",
  //     href: Navlink?.homePage,
  //   },
];
const NavItems = () => {
  return (
    <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
      {navItems.map(({ id, name, href }: item) => (
        <Text
          fontSize={18}
          _hover={{ color: "white" }}
          as={"a"}
          key={id}
          href={href}
        >
          {name}
        </Text>
      ))}
    </Flex>
  );
};

export default NavItems;

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
const schema = yup.object().shape({
  username: yup
    .string()
    .required("Please Enter Username")
    .matches(
      /^[aA-zZ\s]+$/,
      "Username cannot contain values other then A-Za-z "
    ),
  password: yup
    .string()
    .required("Please Enter Password")
    .min(8, "Password must be minimum of 8 digits")
    .max(15, "Password cannot be more than 15 digits"),
  email: yup.string().email().required("Please Enter Email"),
});
const Register = () => {
  const handleLogin = (data: string): string => {
    console.log(JSON.stringify(data));
    reset();
    return data;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <>
      <Box overflow={"auto"} p={4}>
        <FormControl display={"flex"} flexDirection={"row"}>
          <Box>
            <Image
              display={{ base: "none", sm: "none", md: "flex", xl: "flex" }}
              objectFit={"cover"}
              boxSize={"500px"}
              height={"400px"}
              src="https://bit.ly/dan-abramov"
            />
          </Box>
          <Flex
            pl={6}
            width={{ base: "70%", sm: "70%", md: "70%", xl: "50%" }}
            flexDirection={"column"}
            gap={2}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Text fontSize={18} fontWeight={"bold"}>
                Register
              </Text>
            </Box>
            <Box>
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                variant={"outline"}
                {...register("email", { required: true })}
              />
              <Text color="red">{errors.email?.message}</Text>
            </Box>
            <Box>
              <FormLabel>Username</FormLabel>
              <Input
                id="username"
                variant={"outline"}
                {...register("username", { required: true })}
              />
              <Text color="red">{errors.username?.message}</Text>
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                id="password"
                variant={"outline"}
                type="password"
                {...register("password")}
              />
              <Text color="red">{errors.password?.message}</Text>
            </Box>

            <Button
              onClick={handleSubmit(handleLogin)}
              mt={2}
              maxW={"100px"}
              type="submit"
              colorScheme="blue"
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </>
  );
};

export default Register;

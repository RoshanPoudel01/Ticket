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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navlink } from "../Helper/Navlink";
const schema = yup.object().shape({
  username: yup.string().required("Please Enter your Username!"),
  password: yup.string().required("Please Enter your Password!"),
});
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data: string) => {
    try {
      console.log(JSON.stringify(data));
      const result = await axios.post("http://localhost:5000/api/users/login", {
        ...data,
      });
      console.log(result);
      // // console.log(result);
      if (result?.status === 200) {
        await localStorage.setItem("usertoken", result?.data?.token);
        navigate(Navlink?.homePage);
      }

      // toast.error(re);
    } catch (e) {
      console.log(e?.response?.data?.message);

      // toast.error(e?.response?.data?.message);
    }
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
                Login
              </Text>
            </Box>
            <Box>
              <FormLabel>Name</FormLabel>
              <Input
                required
                id="username"
                variant={"outline"}
                errorBorderColor="crimson"
                {...register("username", { required: true })}
              />
              <Text color="red">{errors.username?.message}</Text>
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                required
                id="password"
                variant={"outline"}
                type="password"
                errorBorderColor="crimson"
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

export default Login;

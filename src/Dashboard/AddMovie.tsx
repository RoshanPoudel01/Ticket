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
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";
import SelectOpt from "../Components/Select/Select";
const optionsValue: any = [
  { value: "Action", label: "Action" },
  { value: "Adventure", label: "Adventure" },
  { value: "Horror", label: "Horror" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "Animation", label: "Animation" },
  { value: "Thriller", label: "Thriller" },
  { value: "Supernatural", label: "Supernatural" },
  { value: "Romance", label: "Romance" },
];

const schema = yup.object().shape({
  title: yup.string().required("Please Enter Movie Title"),

  duration: yup.string().required("Please Enter Movie Duration"),
  image: yup.mixed(),
  tag: yup.string().required("Please choose a tag"),
  releaseDate: yup.string().required("Please set release date"),
});
const AddMovie = () => {
  const [selectVal, setSelectVal] = useState([]);
  const [radioVal, setRadioVal] = useState("nextChange");

  const handleAdd = (data: any): any => {
    console.log(data);
    // const addMovies = await axios.put("");
    reset();
    return data;
  };
  const handleSelect = (selected: any) => {
    setSelectVal(selected);
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <>
      <Box overflow={"auto"} p={4}>
        <FormControl display={"flex"} flexDirection={"row"}>
          <Flex
            pl={6}
            width={{ base: "70%", sm: "70%", md: "70%", xl: "50%" }}
            flexDirection={"column"}
            gap={2}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Text fontSize={18} fontWeight={"bold"}>
                Add Hotel
              </Text>
            </Box>
            <Box>
              <FormLabel>Title</FormLabel>
              <Input
                id="title"
                variant={"outline"}
                {...register("title", { required: true })}
              />
              <Text color="red">{errors.title?.message}</Text>
            </Box>
            <Box>
              <FormLabel>Tags</FormLabel>
              <RadioGroup defaultValue={radioVal}>
                <HStack>
                  <Radio {...register("tag")} value={"old"} size="lg">
                    <Text>Old</Text>
                  </Radio>
                  <Radio {...register("tag")} value={"nowShowing"} size="lg">
                    <Text>Now Showing</Text>
                  </Radio>
                  <Radio {...register("tag")} value={"nextChange"} size="lg">
                    <Text>Next Change</Text>
                  </Radio>
                </HStack>
              </RadioGroup>
              <Text color="red">{errors.tag?.message}</Text>
            </Box>
            <Box>
              <FormLabel>Duration</FormLabel>
              <Input
                id="duration"
                variant={"outline"}
                type="duration"
                {...register("duration")}
              />
              <Text color="red">{errors.duration?.message}</Text>
            </Box>
            <Box>
              <FormLabel>Release Date</FormLabel>
              <Input
                id="releaseDate"
                variant={"outline"}
                type="Date"
                {...register("releaseDate")}
              />
              <Text color="red">{errors.releaseDate?.message}</Text>
            </Box>
            <Box>
              <SelectOpt
                label={"Genre"}
                control={control}
                isMulti
                value={selectVal}
                options={optionsValue}
                onChange={handleSelect}
              />
            </Box>

            <Button
              onClick={handleSubmit(handleAdd)}
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

export default AddMovie;

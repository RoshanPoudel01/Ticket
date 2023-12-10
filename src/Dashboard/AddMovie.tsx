import { Controller, useForm } from "react-hook-form";
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
import Select from "react-select";
import DropzoneComponent from "../Components/DropZone";
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
  genre: yup
    .array()
    .required("Please select one option")
    .min(1, "Please select one option"),
  duration: yup.string().required("Please Enter Movie Duration"),
  Language: yup.string().required("Please Enter Movie Language"),
  image: yup.string(),
  tag: yup.string().required("Please choose a tag"),
  releaseDate: yup.string().required("Please set release date"),
});
const AddMovie = () => {
  const [radioVal, setRadioVal] = useState("nextChange");
  const [image, SetBannerImage] = useState("");

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      // console.log(reader);
      reader.onload = () => {
        resolve(reader.result.split(",")[1]);
      };

      reader.onerror = (error) => reject(error);
    });
  }
  const handleAdd = async (data: any) => {
    // console.log(image[0].type);
    try {
      const addMovies = await axios.post(
        "http://localhost:5000/api/movies/addnew",
        {
          ...data,
          genre: data?.genre?.map((item: any) => item.value),
          image:
            "data:" +
            image[0].type +
            ";base64," +
            (await fileToBase64(image[0])),
        }
      );
      reset();
    } catch (error: any) {
      console.error("Axios Error:", error?.response?.data);
    }
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
                Add Movie
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
              <FormLabel>Language</FormLabel>
              <Input
                id="language"
                variant={"outline"}
                {...register("Language", { required: true })}
              />
              <Text color="red">{errors.Language?.message}</Text>
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
              <Controller
                name="genre" // Replace with your field name
                control={control}
                render={({ field }) => (
                  <Select
                    isMulti
                    {...field}
                    options={optionsValue}
                    // Add any other props you need for React Select
                  />
                )}
              />
              <Text color="red">{errors.genre?.message}</Text>
            </Box>
            <Box>
              <DropzoneComponent
                setAcceptedFiles={SetBannerImage}
                helperText="Please Upload Image Files(.png .jpg .jpeg)"
                title="Movie Image"
                // showImage={hotel?.bannerimage ? hotel?.bannerimage : ""}
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

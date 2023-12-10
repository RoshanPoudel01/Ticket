import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import Carousel from "better-react-carousel";
import axios from "axios";

// const movies = [
//   {
//     id: 1,
//     title: "Pathaan",
//     genre: "Action/Adventure",
//     image:
//       "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmoZIoFgIkKCledRzZT3q3xy64ZwMfnVXSQUdfp7cSo1suHPye",
//   },
//   {
//     id: 2,
//     title: "Frozen",
//     genre: "Adventure/Animation",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_FMjpg_UX1000_.jpg",
//   },
//   {
//     id: 3,
//     title: "Salaar",
//     genre: "Action",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BOTk4ZDQ1ZTctNzU3MC00NmY4LWJjMzItNDMwZTA2ODhiYWM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
//   },
//   {
//     id: 4,
//     title: "Tiger 3",
//     genre: "Action/Adventure",
//     image:
//       "https://www.yashrajfilms.com/images/default-source/movies/tiger-3/tiger-3---salman-khan-katrina-kaif5f98ada026f56f7f9f64ff0e00090313.jpg?sfvrsn=866dc2cc_9",
//   },
//   {
//     id: 5,
//     title: "Loki",
//     genre: "Adventure/Animation",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNTY1ZDQzNzQtZGM1Yy00YjRhLTliYmMtOGM2OWFlYTRjOTc2XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg",
//   },
// ];

const NextChange = () => {
  const [data, setData] = useState([]);
  const getMovies = async () => {
    const movies = await axios.get("http://localhost:5000/api/movies/");
    console.log(movies?.data?.movies);
    setData(movies?.data?.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2}>
      <Carousel cols={4} rows={1} loop={true}>
        {data?.map(({ id, title, genre, image, duration }: Movie) => (
          <Carousel.Item key={id}>
            <MovieCard
              image={image??null}
              id={id}
              title={title}
              genre={genre}
              duration={duration}
            />
          </Carousel.Item>
        ))}

        {/* ... */}
      </Carousel>
    </Box>
  );
};

export default NextChange;

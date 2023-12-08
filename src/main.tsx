import ReactDOM from "react-dom/client";

// import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Helper/Routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "./Theme/Theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={Theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);

import { Box, useColorModeValue } from "@chakra-ui/react";
import RoutesBeforeSign from "./navigation";
import "./App.css";
import { useEffect } from "react";
import { getToken } from "./helpers";
import { getUserInfo } from "./services/apiService";
import { useAppDispatch } from "./hooks";
import { login } from "./redux/features/userReducer";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (getToken()) {
      getUserInfo().then((res) => {
        dispatch(
          login({
            email: res.email,
            firstname: res.firstname,
            lastname: res.lastname,
          })
        );
      });
    }
  }, []);

  return (
    <Box
      className="App"
      bg={useColorModeValue("gray.100", "gray.700")}
      minH={"100vh"}
      maxH={"100%"}
    >
      <RoutesBeforeSign />
    </Box>
  );
}

export default App;

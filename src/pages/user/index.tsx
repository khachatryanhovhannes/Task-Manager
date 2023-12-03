import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks";

function User() {
  const { colorMode } = useColorMode();
  const user = useAppSelector((state) => state.users.user);
  return user ? (
    <Box textAlign="center" p={8} minH={"700px"}>
      <Heading mb={4}>
        {user.firstName} {user.lastName}
      </Heading>
      <Box
        p={6}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg={colorMode === "light" ? "white" : "gray.700"}
      >
        <Text>email: {user.email}</Text>
        <Text>firstName: {user.firstName}</Text>
        <Text>lastName: {user.lastName}</Text>

        <Text fontSize="lg" mb={4}></Text>
      </Box>
    </Box>
  ) : (
    <Box>User no Found</Box>
  );
}

export default User;

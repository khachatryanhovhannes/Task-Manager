import { Box, Flex, Heading, Img, Text, Button } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks";
import userImage from "../../assets/images/user.png";
import { Link } from "react-router-dom";
import { formatDateString } from "../../helpers";

function User() {
  const user = useAppSelector((state) => state.users.user);
  return user ? (
    <Box
      w={"100%"}
      textAlign="center"
      p={8}
      minH={"700px"}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <Heading mb={4} color="teal.500">
        {user.firstName} {user.lastName}
      </Heading>

      <Flex alignItems={"center"} justify={"center"} gap={"30px"}>
        <Img
          src={userImage}
          maxW={"200px"}
          border={"3px solid black"}
          borderRadius={"full"}
          bg={"white"}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <Box textAlign={"left"}>
          <Text fontSize="lg">Email: {user.email}</Text>
          <Text fontSize="lg">Firstname: {user.firstName}</Text>
          <Text fontSize="lg">Lastname: {user.lastName}</Text>
          <Text fontSize="lg">Role: {user.role}</Text>
          <Text fontSize="lg">
            Created At: {formatDateString(user.createdAt)}
          </Text>
          <Text fontSize="lg">
            Updated At: {formatDateString(user.updatedAt)}
          </Text>
        </Box>
      </Flex>
      <Link to="/user/setting">
        <Button colorScheme="teal" mb={4}>
          Settings
        </Button>
      </Link>
    </Box>
  ) : (
    <Box textAlign="center" fontSize="xl" mt={8} color="gray.500">
      User not found
    </Box>
  );
}

export default User;

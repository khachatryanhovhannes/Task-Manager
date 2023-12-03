import {
  Box,
  Text,
  Button,
  useColorMode,
  Flex,
  Select,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  deleteTaskToState,
  editTaskToState,
} from "../../redux/features/tasksReducer";
import { ColorMode, ITask, TaskStatus } from "../../models";
import { deleteTask } from "../../services";
import { ChangeEvent } from "react";
import { editTask } from "../../services/apiService";

function SingleTask() {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const numericId = Number(id);
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const task = tasks.find((task) => numericId === task.id);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEditClick = () => {
    navigate(`/user/edit/${id}`);
  };

  const handleDeleteClick = () => {
    deleteTask(Number(id)).then((res) => {
      console.log(res);
      dispatch(deleteTaskToState(Number(id)));
    });
    navigate("/user/tasks");
  };

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    console.log(newStatus);

    editTask({
      ...task,
      status: newStatus,
    } as ITask).then((res) => {
      dispatch(editTaskToState(res) );
    });
  };

  return (
    <Box
      textAlign={"center"}
      width={"100%"}
      minH={"500px"}
      borderRadius="md"
      boxShadow="md"
      borderWidth="1px"
      bg={colorMode === ColorMode.light ? "white" : "gray.700"}
    >
      {!task ? (
        <Box>
          <Text>Task not found!</Text>
          <Button onClick={() => navigate("/tasks")}>Go Back to Tasks</Button>
        </Box>
      ) : (
        <Box p={6} bg={colorMode === ColorMode.light ? "white" : "gray.700"}>
          <Flex justifyContent={"space-between"}>
            <Button colorScheme="blue" onClick={handleGoBack}>
              Go Back
            </Button>

            <Select
              maxW={"200px"}
              value={task.status}
              onChange={handleStatusChange}
              mb={"20px"}
            >
              <option value={TaskStatus.toDo}>Todo</option>
              <option value={TaskStatus.inProgress}>Progress</option>
              <option value={TaskStatus.done}>Done</option>
            </Select>
          </Flex>
          <Text fontSize="2xl" fontWeight="bold" mb={2} maxW={"80%"} mx="auto">
            {task.title}
          </Text>
          <Text color="gray.600" fontSize="lg" mb={4}>
            {task.description}
          </Text>
          <Button colorScheme="teal" ml={4} onClick={handleEditClick}>
            Edit
          </Button>
          <Button colorScheme="red" ml={4} onClick={handleDeleteClick}>
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default SingleTask;

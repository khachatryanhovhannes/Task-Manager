import {
  Box,
  Text,
  Button,
  useColorMode,
  Flex,
  Select,
  useToast,
  ToastId,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { ColorMode, ITask, TaskStatus, ToastStatus } from "../../models";
import { ChangeEvent, useEffect, useRef } from "react";
import { editTask, deleteTask } from "../../redux/actions/taskActions";
import { toastOptions } from "../../helpers";

function SingleTask() {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const numericId = Number(id);
  const toast = useToast();
  const toastIdRef = useRef<ToastId | undefined>(undefined);
  const task = useAppSelector((state) => state.tasks.tasks).find(
    (task) => numericId === task.id
  );
  const { isTaskEventLoading, taskEventError, isTaskModify } = useAppSelector(
    (state) => state.tasks
  );
  const toastModify = (status: ToastStatus, message: string) => {
    if (status === ToastStatus.loading) {
      toastIdRef.current = toast(
        toastOptions({ status: status, message: message })
      );
    }
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, { status: status, title: message });
    }
  };

  useEffect(() => {
    console.log("aasas")
    if (isTaskEventLoading) {
      toastModify(ToastStatus.loading, "Task's status is changing");
    } else if (taskEventError) {
      toastModify(ToastStatus.error, "Task's status doesn't change!!");
    } else if (isTaskModify) {
      toastModify(ToastStatus.success, "Task's status is change!");
      navigate("/user/tasks");
    }
  }, [isTaskEventLoading, taskEventError, isTaskModify]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEditClick = () => {
    navigate(`/user/edit/${id}`);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(numericId));
  };

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    dispatch(
      editTask({
        ...task,
        status: newStatus,
      } as ITask)
    );
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
          <Text>Due Date: {task.dueDate.substring(0, 10)}</Text>
          <Text
            color="gray.300"
            maxW={"80%"}
            fontSize="lg"
            mt={5}
            mb={4}
            mx="auto"
          >
            {task.description}
          </Text>
          <Button colorScheme="teal" ml={4} onClick={handleEditClick}>
            Edit
          </Button>
          <Button colorScheme="red" ml={4} onClick={handleDeleteClick}>
            Delete
          </Button>
          <Flex>
            <Box mt={5}>
              <Text>Created At: {task.createdAt.substring(0, 10)}</Text>
              <Text>Updated At: {task.updatedAt.substring(0, 10)}</Text>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default SingleTask;

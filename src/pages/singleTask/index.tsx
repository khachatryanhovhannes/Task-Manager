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
import { useTranslation } from "react-i18next";

function SingleTask() {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const numericId = Number(id);
  const toast = useToast();
  const toastIdRef = useRef<ToastId | undefined>(undefined);
  const { eventPath } = useAppSelector((state) => state.tasks);
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
    if (isTaskEventLoading) {
      toastModify(ToastStatus.loading, t(`TASKS_EVENT.${eventPath}_LOADING`));
    } else if (taskEventError) {
      toastModify(ToastStatus.error, t(`TASKS_EVENT.${eventPath}_ERROR`));
    } else if (isTaskModify) {
      toastModify(ToastStatus.success, t(`TASKS_EVENT.${eventPath}_SUCCESS`));
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
          <Text> {t("SINGLE_TASK.NO_FOUND")}</Text>
          <Button onClick={() => navigate("/user/tasks")}>
            {t("SINGLE_TASK.GO_TO_ALL")}
          </Button>
        </Box>
      ) : (
        <Box p={6} bg={colorMode === ColorMode.light ? "white" : "gray.700"}>
          <Flex justifyContent={"space-between"}>
            <Button colorScheme="blue" onClick={handleGoBack}>
              {t("SINGLE_TASK.GO_BACK")}
            </Button>

            <Select
              maxW={"200px"}
              value={task.status}
              onChange={handleStatusChange}
              mb={"20px"}
            >
              <option value={TaskStatus.toDo}>{t("SINGLE_TASK.TO_DO")}</option>
              <option value={TaskStatus.inProgress}>
                {t("SINGLE_TASK.IN_PROCESS")}
              </option>
              <option value={TaskStatus.done}>{t("SINGLE_TASK.DONE")}</option>
            </Select>
          </Flex>
          <Text fontSize="2xl" fontWeight="bold" mb={2} maxW={"80%"} mx="auto">
            {task.title}
          </Text>
          <Text>
            {t("SINGLE_TASK.DUE_DATE")}: {task.dueDate.substring(0, 10)}
          </Text>
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
            {t("SINGLE_TASK.EDIT")}
          </Button>
          <Button colorScheme="red" ml={4} onClick={handleDeleteClick}>
            {t("SINGLE_TASK.DELETE")}
          </Button>
          <Flex>
            <Box mt={5}>
              <Text>
                {" "}
                {t("SINGLE_TASK.CREATED")}: {task.createdAt.substring(0, 10)}
              </Text>
              <Text>
                {" "}
                {t("SINGLE_TASK.UPDATED")}: {task.updatedAt.substring(0, 10)}
              </Text>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default SingleTask;

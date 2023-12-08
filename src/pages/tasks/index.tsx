import {
  HStack,
  Box,
  Select,
  Input,
  Flex,
  useToast,
  ToastId,
} from "@chakra-ui/react";
import { Task } from "../../components/organisms";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ErrorMessage, Loader, Pagination } from "../../components";
import { TaskStatus, ToastStatus } from "../../models";
import { getTasks } from "../../redux/actions/taskActions";
import { ONE_PAGE_TASK_COUNT } from "../../constants";
import { toastOptions } from "../../helpers";
import { useParams } from "react-router-dom";

function Tasks() {
  const { page } = useParams();
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const currentPage = Number(page) || 1;
  const toast = useToast();
  const toastIdRef = useRef<ToastId | undefined>(undefined);
  const {
    allTasksCount,
    tasks,
    error,
    isTaskEventLoading,
    taskEventError,
    isTaskModify,
  } = useAppSelector((state) => state.tasks);

  const toastModify = (status: ToastStatus, message: string) => {
    if (status === ToastStatus.loading) {
      toastIdRef.current = toast(
        toastOptions({ status: status, message: message })
      );
    }
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, {
        status: status,
        title: message,
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    if (isTaskEventLoading) {
      toastModify(ToastStatus.loading, "Task is deleting");
    } else if (taskEventError) {
      toastModify(ToastStatus.error, "Task doesn't delete!!");
    } else if (isTaskModify) {
      toastModify(ToastStatus.success, "Task deleted!");
    }
  }, [isTaskEventLoading, taskEventError, isTaskModify]);

  const dispatch = useAppDispatch();

  const isGeneralTasksLoading = useAppSelector(
    (state) => state.tasks.isGeneralTasksLoading
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(
      getTasks({
        take: ONE_PAGE_TASK_COUNT,
        skip: ONE_PAGE_TASK_COUNT * (currentPage - 1),
        date,
        status,
      })
    );
  }, [currentPage, status, date, isTaskModify]);

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <Box p={4} minH={"600px"} w={"100%"}>
      <Flex
        gap={"30px"}
        wrap={"wrap"}
        width={"100%"}
        justifyContent={{ base: "center", lg: "center", xl: "right" }}
      >
        <Select w={"300px"} onChange={handleStatusChange} mb={"20px"}>
          <option value="">All</option>
          <option value={TaskStatus.toDo}>To Do</option>
          <option value={TaskStatus.inProgress}>In Progress</option>
          <option value={TaskStatus.done}>Done</option>
        </Select>
        <Input
          type="date"
          value={date}
          onChange={handleDateChange}
          min={new Date().toISOString().split("T")[0]}
          w={"300px"}
        />
      </Flex>
      <ErrorMessage text={error} />
      {isGeneralTasksLoading ? (
        <Loader />
      ) : (
        <HStack
          alignItems={"start"}
          justifyContent={"center"}
          flexWrap="wrap"
          mt={"30px"}
        >
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </HStack>
      )}
      {tasks.length && allTasksCount > ONE_PAGE_TASK_COUNT ? (
        <Pagination
          pageCount={Math.ceil(allTasksCount / ONE_PAGE_TASK_COUNT)}
          activePage={currentPage}
        />
      ) : null}
    </Box>
  );
}

export default Tasks;

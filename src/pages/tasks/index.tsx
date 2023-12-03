import { HStack, Box, Select, Input, Flex, Text } from "@chakra-ui/react";
import { Task } from "../../components/organisms";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { getTasks } from "../../services";
import { addTasksToState } from "../../redux/features/tasksReducer";
import { Pagination } from "../../components";
import { TaskStatus } from "../../models";

function Tasks() {
  const ONE_PAGE_TASK_COUNT = 12;
  const [allTasksCount, setAllTasksCount] = useState(0);
  const [status, setStatus] = useState("");
  const dispatch = useAppDispatch();
  const [activePage, setAvtivePage] = useState(0);

  useEffect(() => {
    getTasks(
      ONE_PAGE_TASK_COUNT,
      ONE_PAGE_TASK_COUNT * activePage,
      "2023-12-15",
      status
    ).then((res) => {
      if (res.data.length) {
        dispatch(addTasksToState(res.data));
        setAllTasksCount(res._meta.total);
      }
    });
  }, [activePage, status]);

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const tasks = useAppSelector((state) => state.tasks.tasks);
  return (
    <Box p={4} minH={"600px"} w={"100%"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        wrap={"wrap"}
      >
        <Text as={"header"} align={"center"} fontSize={"40px"}>
          Tasks
        </Text>
        <Flex gap={"30px"} wrap={"wrap"}>
          <Select w={"300px"} onChange={handleStatusChange} mb={"20px"}>
            <option value="">All</option>
            <option value={TaskStatus.toDo}>To Do</option>
            <option value={TaskStatus.inProgress}>In Progress</option>
            <option value={TaskStatus.done}>Done</option>
          </Select>
          <Input type="date" w={"300px"} />
        </Flex>
      </Flex>

      <HStack
        spacing={4}
        alignItems={"start"}
        justifyContent={"center"}
        flexWrap="wrap"
      >
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </HStack>

      {tasks.length && allTasksCount > ONE_PAGE_TASK_COUNT ? (
        <Pagination
          pageCount={Math.ceil(allTasksCount / ONE_PAGE_TASK_COUNT)}
          activePage={activePage}
          setActivePage={setAvtivePage}
        />
      ) : null}
    </Box>
  );
}

export default Tasks;

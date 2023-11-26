import { HStack, Box } from '@chakra-ui/react';
import { Task } from '../../components/organisms';
import { useAppSelector } from '../../hooks';

function Tasks() {
    const tasks = useAppSelector(state => state.tasks.tasks)

    return (
        <Box p={4}>
            <HStack spacing={4} justify="center" flexWrap="wrap">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                    />
                ))}
            </HStack>
        </Box>
    );
}

export default Tasks;

import { Box, Text, Button, useColorMode } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { removeTask } from '../../redux/features/tasksReducer';
import { ColorMode } from '../../models';

function SingleTask() {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const tasks = useAppSelector((state) => state.tasks.tasks);
    const task = tasks.find((task) => id !== undefined && +id === task.id);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleEditClick = () => {
        navigate(`/user/edit/${id}`);
    };

    const handleDeleteClick = () => {

        dispatch(removeTask(Number(id)));
        navigate(-1);

    };

    return (
        <Box textAlign={"center"}>
            {!task ? (
                <Box>
                    <Text>Task not found!</Text>
                    <Button onClick={() => navigate('/tasks')}>Go Back to Tasks</Button>
                </Box>
            ) : (
                <Box p={6} borderWidth="1px" borderRadius="md" boxShadow="md" bg={colorMode === ColorMode.light ? 'white' : 'gray.700'}>
                    <Text fontSize="2xl" fontWeight="bold" mb={2}>
                        {task.title}
                    </Text>
                    <Text color="gray.600" fontSize="lg" mb={4}>
                        {task.description}
                    </Text>
                    <Button colorScheme="blue" onClick={handleGoBack}>
                        Go Back
                    </Button>
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

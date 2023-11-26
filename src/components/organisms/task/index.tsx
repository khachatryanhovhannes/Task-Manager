import { Box, Text, Flex, IconButton, useColorMode, Button, } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useAppDispatch } from '../../../hooks';
import { removeTask } from '../../../redux/features/tasksReducer';
import { useNavigate } from 'react-router-dom';

interface ITaskProps {
    id: number;
    title: string;
    description: string;
}

function Task({ id, title, description, }: ITaskProps) {
    const { colorMode } = useColorMode();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleEditClick = () => {
        navigate(`/user/edit/${id}`)
    };

    const handleReadMoreClick = () => {
        navigate(`/user/task/${id}`)
    };

    const handleDeleteTask = (id: number) => {
        dispatch(removeTask(id))
    }

    return (
        <Box
            p={6}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            width={{ base: '100%', sm: '300px' }}
            overflow="hidden"
        >
            <Text fontSize="2xl" fontWeight="bold" mb={2} isTruncated>
                {title}
            </Text>
            <Text color="gray.600" fontSize="lg" minH={"150px"} >
                {description.length >= 100 ? description.slice(0, 100) + "..." : description}
            </Text>

            <Button variant="link" onClick={handleReadMoreClick}>
                Read More
            </Button>

            <Flex justify="space-between" mt={4}>
                <Button colorScheme="blue" onClick={handleEditClick}>
                    Edit
                </Button>
                <IconButton
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                    onClick={() => { handleDeleteTask(id) }}
                    variant="outline"
                    colorScheme="red"
                />
            </Flex>
        </Box>
    );
}

export default Task;

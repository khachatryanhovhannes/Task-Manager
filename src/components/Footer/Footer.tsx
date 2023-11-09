import { Container,  Flex,  Text, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function Footer() {
    return (
        <Flex as="footer"
            alignItems={'center'}
            p={'5px'}
            mt={"5px"}
            bg={useColorModeValue('gray.300', 'gray.800')}>
            <Outlet />
            <Container maxW="3xl">
                <Flex justify="space-between" align="center">
                    <Text fontSize="sm">© 2023 Your Task Manager. All rights reserved.</Text>
{/* 
                    <Flex>
                        <Link mr={4} fontSize="sm" href="/about">About</Link>
                        <Link mr={4} fontSize="sm" href="/contact">Contact</Link>
                        <Link fontSize="sm" href="/privacy-policy">Privacy Policy</Link>
                    </Flex> */}
                </Flex>
            </Container>
        </Flex>
    );
};

export default Footer;

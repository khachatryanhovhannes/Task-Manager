import React from 'react';
import { Box, Flex, Text, Link, IconButton, useColorMode } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ColorMode } from '../../../models';

const Footer: React.FC = () => {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();
    const { t } = useTranslation()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box
            as="footer"
            bg={colorMode === ColorMode.dark ? 'gray.800' : 'gray.200'}
            color={colorMode === ColorMode.dark ? 'white' : 'gray.800'}
        >
            <Flex
                align="center"
                justify="space-around"
                py={8}
                borderTop="1px"
                borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.400'}
                flexWrap="wrap"
            >

                <Flex direction="column" align="center" mb={6} flex="1 1 300px" maxWidth="300px">
                    <Text fontWeight="bold" fontSize="lg" textAlign="center">
                        {t("FOOTER.BOX_ONE.TITLE")}
                    </Text>
                    <Text textAlign="center" mt={2} fontSize="sm">
                        {t("FOOTER.BOX_ONE.TEXT")}
                    </Text>
                    <Link mt={4} fontSize="sm" color="blue.500" onClick={() => { navigate('/aboutus'); scrollToTop(); }}>
                        {t("FOOTER.BOX_ONE.READ_MORE")}
                    </Link>
                </Flex>

                <Flex direction="column" align="center" mb={6} flex="1 1 300px" maxWidth="300px">
                    <Text fontWeight="bold" fontSize="lg">
                        {t("FOOTER.BOX_TWO.TITLE")}
                    </Text>
                    <Link mt={2} fontSize="sm" onClick={() => { navigate('/'); scrollToTop(); }}>
                        {t("FOOTER.BOX_TWO.HOME")}
                    </Link>
                    <Link mt={2} fontSize="sm" onClick={() => { navigate('/privacyPolicy'); scrollToTop(); }}>
                        {t("FOOTER.BOX_TWO.PRIVACY_POLICY")}
                    </Link>
                    <Link mt={2} fontSize="sm" onClick={() => { navigate('/contact'); scrollToTop(); }}>
                        {t("FOOTER.BOX_TWO.CONTACT_US")}
                    </Link>
                </Flex>

                <Flex direction="column" align="center" mb={6} flex="1 1 300px" maxWidth="300px">
                    <Text fontWeight="bold" fontSize="lg">
                        {t("FOOTER.BOX_THREE.TITLE")}
                    </Text>
                    <Flex mt={2}>
                        <Link mx={2} href="https://www.linkedin.com/in/hovhannes-khachatryan-bb6705249/" target="_blank" rel="noopener noreferrer">
                            <IconButton icon={<FaLinkedin />} aria-label="Linkedin" variant="ghost" fontSize="lg" />
                        </Link>
                        <Link mx={2} href="https://github.com/khachatryanhovhannes" target="_blank" rel="noopener noreferrer">
                            <IconButton icon={<FaGithub />} aria-label="GitHub" variant="ghost" fontSize="lg" />
                        </Link>
                        <Link mx={2} href="https://www.facebook.com/profile.php?id=100011098380942" target="_blank" rel="noopener noreferrer">
                            <IconButton icon={<FaFacebook />} aria-label="Facebook" variant="ghost" fontSize="lg" />
                        </Link>
                    </Flex>
                    <Text mt={4} fontSize="sm" textAlign={'center'}>
                        {t("FOOTER.BOX_THREE.TEXT")}
                    </Text>
                </Flex>
            </Flex>
            <Box textAlign="center">
                <Text fontSize="sm">
                    &copy; {new Date().getFullYear()} 
                        {t("FOOTER.TEXT")}
                </Text>
            </Box>
        </Box>
    );
};

export default Footer;

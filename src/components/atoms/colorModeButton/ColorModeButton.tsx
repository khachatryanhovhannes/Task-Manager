import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


function ColorModeButton() {

    const { colorMode, toggleColorMode } = useColorMode();


    return (

        <Button onClick={toggleColorMode}
            bg={'transparent'}
            _hover={{background:"transparent"}}
            ml={"10px"}>
            {colorMode === 'light' ?
                <MoonIcon /> :
                <SunIcon />
            }
        </Button>
    )
}


export default ColorModeButton
import { Image, useColorMode } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import whiteLogo from "../../../assets/images/whiteLogo.png"
import blackLogo from "../../../assets/images/blackLogo.png"

function Logo() {
    const navigate = useNavigate()
    const { colorMode } = useColorMode();
    
    return (
        <Image src={colorMode === 'light' ? blackLogo : whiteLogo}
            mr={'10px'}
            w={150}
            cursor={'pointer'}
            onClick={() => navigate('/')} />
    )
}

export default Logo
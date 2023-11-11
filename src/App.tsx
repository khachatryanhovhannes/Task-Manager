import { Box, useColorModeValue } from "@chakra-ui/react"
import RoutesBeforeSign from "./navigation/RoutesBeforeSign"
import './App.css'


function App() {

  return (
    <Box className="App"
      bg={useColorModeValue('gray.100', 'gray.700')}
      minH={'100vh'}
      maxH={'100%'}
    >

      <RoutesBeforeSign />
    </Box>
  )
}

export default App

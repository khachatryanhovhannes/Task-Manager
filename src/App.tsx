import { Box, useColorModeValue } from "@chakra-ui/react"
import MyRoutes from "./Navigation/MyRoutes"
import './App.css'






function App() {

  return (
    <Box className="App"
      bg={useColorModeValue('gray.100', 'gray.700')}
      minH={'100vh'}
      maxH={'100%'}
    >

      <MyRoutes />
    </Box>
  )
}

export default App

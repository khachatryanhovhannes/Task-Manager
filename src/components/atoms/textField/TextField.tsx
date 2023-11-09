import { Text } from "@chakra-ui/react"

interface ITextFieldProps {
    color: string
}

function TextField({ color }: ITextFieldProps) {
    return (
        <Text color={color}></Text>
    )
}


export default TextField
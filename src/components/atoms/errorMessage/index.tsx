import { Text } from "@chakra-ui/react"

interface IErrorMessageProps {
    text: string | undefined
}

function ErrorMessage({ text }: IErrorMessageProps) {
    return (
        <Text
            maxW={'100%'}
            mt={'2px'}
            color={'red.400'}
            fontSize={'13px'}
        >{text}</Text>
    )
}

export default ErrorMessage
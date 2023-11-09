import { FormLabel } from "@chakra-ui/react"

interface IFormLabelFieldProps {
    text: string
}

function FormLabelField({ text }: IFormLabelFieldProps) {
    return (
        <FormLabel>{text}</FormLabel>
    )
}



export default FormLabelField
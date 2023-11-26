import { Input } from "@chakra-ui/react"
import { UseFormRegister } from "react-hook-form"


interface IInputFieldProps {
    type: string,
    name: string,
    register: UseFormRegister<any>,
    validation: {}
}

function InputField({ type, name, register, validation }: IInputFieldProps) {
    return (
        <Input
            borderWidth={'3px'}
            type={type}
            {...register(name, { ...validation })}
        />
    )
}

export default InputField
import { Input } from "@chakra-ui/react"
import { UseFormRegister } from "react-hook-form"


interface IInputFieldProps {
    type: string,
    name: string,
    register: UseFormRegister<any>,
    validation: {},
    min?: string | undefined | number;
}

function InputField({ type, name, register, validation, min }: IInputFieldProps) {
    return (
        <Input
            min={min}
            borderWidth={'3px'}
            type={type}
            {...register(name, { ...validation })}
        />
    )
}

export default InputField
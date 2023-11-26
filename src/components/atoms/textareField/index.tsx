import { Textarea } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";


interface ITextareaFieldProps {
    name: string,
    register: UseFormRegister<any>,
    validation: {}
}

function TextareaField({name, register, validation }:ITextareaFieldProps) {
    return(
        <Textarea
            h={"200"}
            {...register(name, { ...validation })}
        />
    )
}

export default TextareaField
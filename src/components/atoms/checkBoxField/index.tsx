import { Checkbox } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

interface ICheckBoxFieldProps {
    text: string;
    register: UseFormRegister<{ remember: boolean }>;
}

function CheckBoxField({ text, register }: ICheckBoxFieldProps) {
    return (
        <Checkbox
            {...register('remember')}
        >
            {text}
        </Checkbox>
    );
}

export default CheckBoxField;

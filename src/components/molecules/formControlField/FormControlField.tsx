import { FormControl} from '@chakra-ui/react';
import { InputField, FormLabelField, ErrorMessage } from "../../atoms"
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form"

interface IFormControlField {
    id: string,
    text: string,
    type: string,
    register: UseFormRegister<any>,
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    validation: {}
}

function FormControlField({ id, error, type, text, register, validation }: IFormControlField) {
    return (
        <FormControl id={id}>
            <FormLabelField text={text} />
            <InputField
                type={type}
                name={id}
                register={register}
                error={error}
                validation={validation}
            />
            <ErrorMessage text={error?.message?.toString()} />
        </FormControl>
    )
}


export default FormControlField
import { FormControl } from '@chakra-ui/react';
import { InputField, FormLabelField, ErrorMessage } from "../../atoms"
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form"
import { useTranslation } from 'react-i18next';

interface IFormControlFieldProps {
    id: string,
    text: string,
    type: string,
    register: UseFormRegister<any>,
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    validation: {},
    translationPath: string,
    min?: string | undefined | number;
}

function FormControlField({ id, error, type, text, register, validation, translationPath, min }: IFormControlFieldProps) {
    const { t } = useTranslation()
    return (
        <FormControl id={id}>
            <FormLabelField text={text} />
            <InputField
                type={type}
                name={id}
                register={register}
                validation={validation}
                min={min}
            />
            <ErrorMessage text={error?.message ? t(`${translationPath}.${error?.message?.toString()}`) : undefined} />
        </FormControl>
    )
}


export default FormControlField
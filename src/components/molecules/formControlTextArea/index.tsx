import { FormControl } from '@chakra-ui/react';
import { TextareaField, FormLabelField, ErrorMessage } from "../../atoms"
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form"
import { useTranslation } from 'react-i18next';

interface IFormControlTextAreaProps {
    id: string,
    text: string,
    register: UseFormRegister<any>,
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    validation: {},
    translationPath: string
}

function FormControlTextArea({ id, error, text, register, validation, translationPath }: IFormControlTextAreaProps) {
    const { t } = useTranslation()
    return (
        <FormControl id={id}>
            <FormLabelField text={text} />
            <TextareaField
                name={id}
                validation={validation}
                register={register}
            />
            <ErrorMessage text={error?.message ? t(`${translationPath}.${error?.message?.toString()}`) : undefined} />
        </FormControl>
    )
}


export default FormControlTextArea
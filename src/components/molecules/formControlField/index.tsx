import { FormControl } from '@chakra-ui/react';
import { InputField, FormLabelField, ErrorMessage } from "../../atoms"
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form"
import { useTranslation } from 'react-i18next';

interface IFormControlField {
    id: string,
    text: string,
    type: string,
    register: UseFormRegister<any>,
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    validation: {},
    translationPath: string
}

function FormControlField({ id, error, type, text, register, validation, translationPath }: IFormControlField) {
    const { t } = useTranslation()
    return (
        <FormControl id={id}>
            <FormLabelField text={text} />
            <InputField
                type={type}
                name={id}
                register={register}
                validation={validation}
            />
            <ErrorMessage text={error?.message ? t(`${translationPath}.${error?.message?.toString()}`) : undefined} />
        </FormControl>
    )
}


export default FormControlField
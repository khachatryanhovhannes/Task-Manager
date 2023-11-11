import { FormControl, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form";
import { ErrorMessage, FormLabelField, InputField, ShowPasswordIcon } from "../../atoms";
import { useTranslation } from "react-i18next";


interface IInputPassWordFieldProps {
    register: UseFormRegister<any>,
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    validation: {},
    translationPath: string
}

function PasswordField({ register, error, validation, translationPath }: IInputPassWordFieldProps) {

    const { t } = useTranslation()
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <FormControl id="password">
            <FormLabelField
                text={t("LOGIN.PASSWORD")} />
            <InputGroup>
                <InputField
                    type={isShowPassword ? 'text' : 'password'}
                    name="password"
                    register={register}
                    validation={validation}
                />
                <InputRightElement>
                    <ShowPasswordIcon
                        isShowPassword={isShowPassword}
                        setIsShowPassword={setIsShowPassword} />
                </InputRightElement>
            </InputGroup>

            <ErrorMessage text={error?.message ? t(`${translationPath}.${error?.message?.toString()}`) : undefined} />
        </FormControl>
    )

}

export default PasswordField
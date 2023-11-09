import { FormControl, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form";
import { ErrorMessage , FormLabelField, InputField, ShowPasswordIcon} from "../../atoms";


interface IInputPassWordFieldProps {
    register: UseFormRegister<any>,
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    validation: {}
}

function PasswordField({ register, error, validation }: IInputPassWordFieldProps) {


    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <FormControl id="password">
            <FormLabelField text="Password" />
            <InputGroup>
                <InputField
                    type={isShowPassword ? 'text' : 'password'}
                    name="password"
                    register={register} 
                    error = {error}
                    validation = {validation}
                    />
                <InputRightElement>
                    <ShowPasswordIcon
                        isShowPassword={isShowPassword}
                        setIsShowPassword={setIsShowPassword} />
                </InputRightElement>
            </InputGroup>

            <ErrorMessage text={error?.message?.toString()} />
        </FormControl>
    )

}

export default PasswordField
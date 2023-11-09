import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormControl, Stack } from '@chakra-ui/react';
import { FormControlField, CheckBoxField, TextField, FormButton } from '../../atoms';
import { PasswordField } from '../../molecules';
import { FormEventHandler } from 'react';
import { emailValidation, passwordValidation } from '../../../helpers/validations';


type LoginFormProps = {
    handleSubmit: FormEventHandler<HTMLDivElement>;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
};

function LoginForm({ handleSubmit, register, errors }: LoginFormProps) {

    return (
        <FormControl
            as="form"
            rounded="lg"
            boxShadow="2xl"
            boxSize={{ base: '100%', sm: '500px' }}
            p={8}
            onSubmit={handleSubmit}>
            <Stack spacing={4}>
                <FormControlField
                    id="email"
                    type="email"
                    text="Email address"
                    register={register}
                    error={errors.email}
                    validation={emailValidation}

                />

                <PasswordField
                    register={register}
                    error={errors.password}
                    validation={passwordValidation}
                />

                <Stack spacing={10}>
                    <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                        <CheckBoxField
                            text="Remember me"
                            register={register}
                        />
                        <TextField color="blue.400" />
                    </Stack>

                    <FormButton text="Sign IN" />
                </Stack>
            </Stack>
        </FormControl>
    );
}

export default LoginForm;

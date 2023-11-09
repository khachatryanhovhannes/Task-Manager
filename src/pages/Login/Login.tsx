import { HeadingField } from '../../components/atoms';
import { Flex, Stack } from '@chakra-ui/react';
import { FormHint, LoginForm } from '../../components/organisms'
import { useForm, SubmitHandler } from 'react-hook-form';


type FormData = {
    email: string;
    password: string;
    remember: boolean;
};


function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };
    return (
        <Flex justify={'center'} mt={'20px'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} >
                <Stack align={'center'}>
                    <HeadingField text='Sign in to your account' />
                </Stack>
                <FormHint text='If you have not account go to' linkText='Sign Up' link='/signup' />
                <LoginForm
                    handleSubmit={handleSubmit(onSubmit)}
                    register={register}
                    errors={errors}
                />
            </Stack>
        </Flex>
    );
}

export default Login;

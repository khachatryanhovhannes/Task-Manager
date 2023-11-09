import HeadingField from '../../components/atoms/headingField/HeadingField';
import SignUpForm from '../../components/organisms/signUpForm/SignUpForm';
import FormHint from '../../components/organisms/formHint/FormHint'
import { Flex, Stack, } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
};

function SignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <Flex mt={'20px'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} >
                <Stack align={'center'}>
                    <HeadingField text='Sign up' />
                </Stack>

                <FormHint text=' Already a user?' linkText='Login' link='/signin' />

                <SignUpForm 
                    handleSubmit={handleSubmit(onSubmit)}
                    register={register}
                    errors={errors}
                />
            </Stack>
        </Flex>
    )
}

export default SignUp
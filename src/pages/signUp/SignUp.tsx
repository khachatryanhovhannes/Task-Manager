import HeadingField from '../../components/atoms/headingField/HeadingField';
import SignUpForm from '../../components/organisms/signUpForm/SignUpForm';
import FormHint from '../../components/molecules/formHint/FormHint'
import { Flex, Stack, } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
};

function SignUp() {

    const { t } = useTranslation()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <Flex mt={'20px'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} >
                <Stack align={'center'}>
                    <HeadingField text={t("SIGN_UP.TITLE")} />
                </Stack>

                <FormHint text={t("SIGN_UP.TEXT_ONE.TEXT")} linkText={t("SIGN_UP.TEXT_ONE.LINK")} link='/signin' />

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
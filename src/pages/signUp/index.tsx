import HeadingField from '../../components/atoms/headingField';
import SignUpForm from '../../components/organisms/signUpForm';
import FormHint from '../../components/molecules/formHint'
import { Flex, Stack, } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';

type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
};

function SignUp() {

    const { t } = useTranslation()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: "all"
    });
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    const navigate = useNavigate()
    const user = useAppSelector(state => state.users.user)

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    })

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
import { HeadingField } from '../../components/atoms';
import { Flex, Stack } from '@chakra-ui/react';
import { FormHint, LoginForm } from '../../components/organisms'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/features/userReducer';


type FormData = {
    email: string;
    password: string;
    remember: boolean;
};


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: "all"
    });
    const { t } = useTranslation();
    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(login({
            id: 1,
            firstname: "Hovhannes",
            lastname: "Khachatryan",
            token:"adhgkfgh"
        }))
        console.log(data);
    };


    const navigate = useNavigate()
    const user = useAppSelector(state => state.users.user)

    useEffect(() => {
        if(user){
            navigate("/")
        }
    })


    return (
        <Flex justify={'center'} mt={'20px'} mb={'20px'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} >
                <Stack align={'center'}>
                    <HeadingField text={t("LOGIN.TITLE")} />
                </Stack>
                <FormHint text={t("LOGIN.TEXT_ONE.TEXT")} linkText={t("LOGIN.TEXT_ONE.LINK")} link='/signup' />
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

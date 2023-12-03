import {
  ErrorMessage,
  HeadingField,
  FormHint,
  LoginForm,
} from "../../components";
import { Flex, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { getUserInfo, userLogin } from "../../services/apiService";
import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { login } from "../../redux/features/userReducer";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../helpers";

type FormData = {
  email: string;
  password: string;
  remember: boolean;
};

function Login() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "all" });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    userLogin({
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        setToken(res.accessToken, data.remember);
        getUserInfo().then((res) => {
          dispatch(
            login(res)
          );
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <Flex justify={"center"} mt={"20px"} mb={"20px"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"}>
        <Stack align={"center"}>
          <HeadingField text={t("LOGIN.TITLE")} />
        </Stack>
        <FormHint
          text={t("LOGIN.TEXT_ONE.TEXT")}
          linkText={t("LOGIN.TEXT_ONE.LINK")}
          link="/signup"
        />

        <ErrorMessage text={errorMessage} />

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

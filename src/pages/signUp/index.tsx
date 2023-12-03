import {
  HeadingField,
  SignUpForm,
  FormHint,
  ErrorMessage,
} from "../../components";
import { Flex, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userRegister } from "./../../services";
import { IUserRegister } from "models";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    mode: "all",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUserRegister> = (data) => {
    userRegister(data)
      .then((res) => {
        if (res) {
          navigate("/signin");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <Flex mt={"20px"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"}>
        <Stack align={"center"}>
          <HeadingField text={t("SIGN_UP.TITLE")} />
        </Stack>

        <FormHint
          text={t("SIGN_UP.TEXT_ONE.TEXT")}
          linkText={t("SIGN_UP.TEXT_ONE.LINK")}
          link="/signin"
        />

        <ErrorMessage text={errorMessage} />

        <SignUpForm
          handleSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
        />
      </Stack>
    </Flex>
  );
}

export default SignUp;

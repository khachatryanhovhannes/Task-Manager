import { Box, FormControl, Heading, Stack } from "@chakra-ui/react";
import { FormButton, FormControlField } from "../../";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserChangeData } from "../../../models";
import { useTranslation } from "react-i18next";
import { emailValidation } from "../../../helpers";
import { useAppDispatch } from "../../../hooks";
import { changeUserinfo } from "../../../redux/thunks/userThunks";

function ChangeUserData({ email, firstName, lastName }: IUserChangeData) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserChangeData>({
    defaultValues: {
      email,
      firstName,
      lastName,
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<IUserChangeData> = async (data) => {
    const formData = new FormData();
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0] || "");
    }

    formData.append("firstName", data.firstName || "");
    formData.append("lastName", data.lastName || "");
    formData.append("email", data.email || "");
    dispatch(changeUserinfo(formData as IUserChangeData));
  };

  return (
    <Box mt={8} minW={"100%"}>
      <Heading fontSize="xl" mb={4} textAlign={"center"}>
        Update Profile
      </Heading>
      <FormControl
        onSubmit={handleSubmit(onSubmit)}
        as="form"
        rounded="lg"
        boxShadow="2xl"
        w={{ base: "100%", sm: "500px" }}
        p={8}
      >
        <FormControlField
          id="image"
          type="file"
          text={t("SIGN_UP.PROFILE_IMAGE")}
          register={register}
          error={{}}
          validation={{}}
          translationPath="SIGN_UP.ERRORS.IMAGE"
        />
        <Stack spacing={4}>
          <FormControlField
            id="firstName"
            type="text"
            text={t("SIGN_UP.FIRST_NAME")}
            register={register}
            error={{}}
            validation={{}}
            translationPath="SIGN_UP.ERRORS.NAME"
          />
          <FormControlField
            id="lastName"
            type="text"
            text={t("SIGN_UP.LAST_NAME")}
            register={register}
            error={{}}
            validation={{}}
            translationPath="SIGN_UP.ERRORS.NAME"
          />
          <FormControlField
            id="email"
            type="email"
            text={t("SIGN_UP.EMAIL")}
            register={register}
            error={errors.email}
            validation={emailValidation}
            translationPath="SIGN_UP.ERRORS.EMAIL"
          />

          <FormButton text={t("SIGN_UP.CHANGE")} />
        </Stack>
      </FormControl>
    </Box>
  );
}

export default ChangeUserData;

import { FormControl, Stack, } from "@chakra-ui/react"
import { FormButton } from "../../atoms"
import { FormControlField, FormControlTextArea } from '../../molecules';
import { useTranslation } from "react-i18next";
import { FormEventHandler } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { taskValidation } from "../../../helpers/validations";


type TaskFormProps = {
    handleSubmit: FormEventHandler<HTMLDivElement>;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    translatePath: string;
};

function TaskForm({ handleSubmit, register, errors, translatePath }: TaskFormProps) {
    const { t } = useTranslation()

    return (
        <>
            <FormControl as="form"
                mt={'20px'}
                mb={'50px'}
                rounded="lg"
                boxShadow="2xl"
                w={{ base: '100%', sm: '80%' }}
                p={8}
                onSubmit={handleSubmit}
            >
                <Stack spacing={4}>
                    <FormControlField
                        id="title"
                        type="text"
                        text={t(`${translatePath}.TASK_TITLE`)}
                        register={register}
                        error={errors.title}
                        validation={taskValidation}
                        translationPath="SIGN_UP.ERRORS.NAME"
                    />

                    <FormControlTextArea
                        id="description"
                        text={t(`${translatePath}.TASK_DESCTIPTION`)}
                        register={register}
                        error={errors.description}
                        validation={taskValidation}
                        translationPath="SIGN_UP.ERRORS.NAME"
                    />
                    <FormButton text={t(`${translatePath}.SUBMIT`)} />
                </Stack>
            </FormControl>
        </>
    )
}

export default TaskForm
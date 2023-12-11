import { Flex, Heading } from '@chakra-ui/react';
import { FormEventHandler } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TaskForm } from '../../';

type TaskFormProps = {
    handleSubmit: FormEventHandler<HTMLDivElement>;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    translatePath: string;
    title: string

};

function TaskModifield({ handleSubmit, register, errors, translatePath, title }: TaskFormProps) {
    return (
        <Flex direction={"column"}
                justifyContent={"center"}
                alignItems={'center'}
                width={"100%"}
        >
            <Heading mt={"20px"}>{title}</Heading>

            <TaskForm
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                translatePath={translatePath}
            />
        </Flex>
    )
}

export default TaskModifield
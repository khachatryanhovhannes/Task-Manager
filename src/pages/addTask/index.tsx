import { SubmitHandler, useForm } from "react-hook-form";
import { ITask } from "../../models/interfaces";
import { useTranslation } from "react-i18next";
import { TaskModifield } from "../../components/templates";
import { useAppDispatch } from "../../hooks";
import { addTask } from "../../redux/features/tasksReducer";
import { useNavigate } from "react-router-dom";


function AddTask() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<ITask>({
        mode: "all"
    });
    const { t } = useTranslation()

    const onSubmit: SubmitHandler<ITask> = (data) => {
        dispatch(addTask(data))
        navigate(-1)
        console.log(data);

    };

    return (
        <TaskModifield
            handleSubmit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
            title={t("TASK.TITLE_ADD")}
            translatePath="TASK"
        />
    );
};

export default AddTask;

import { SubmitHandler, useForm } from "react-hook-form";
import { ITask } from "../../models/interfaces";
import { useTranslation } from "react-i18next";
import { TaskModifield } from "../../components/templates";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { editTask } from "../../redux/features/tasksReducer";


function EditTask() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const { id } = useParams()
    const task = useAppSelector(state => state.tasks.tasks).filter(task => {
        if (id !== undefined && +id === task.id) {
            return task
        }
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            ...task[0]
        },
        mode: "all"

    });



    const onSubmit: SubmitHandler<ITask> = (data) => {
        dispatch(editTask(data))
        navigate(-1)
        console.log(data);
    };

    return (
        <TaskModifield
            handleSubmit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
            title={t("TASK.TITLE_EDIT")}
            translatePath="TASK"
        />
    );
};

export default EditTask;

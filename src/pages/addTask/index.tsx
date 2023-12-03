import { SubmitHandler, useForm } from "react-hook-form";
import { ITask, TaskStatus } from "../../models";
import { useTranslation } from "react-i18next";
import { TaskModifield } from "../../components/templates";
import { useAppDispatch } from "../../hooks";
import { addTaskToState } from "../../redux/features/tasksReducer";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { toastOptions } from "../../helpers";
import { addTask } from "../../services/apiService";

function AddTask() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITask>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<ITask> = (data) => {
    toast(toastOptions({ status: "loading", message: "Task is adding" }));

    addTask({...data, status:TaskStatus.toDo})
    .then(res=>{
        dispatch(addTaskToState(res))
        navigate("/user/tasks");
    })

    toast(toastOptions({ status: "success", message: "Task added!" }));
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
}

export default AddTask;

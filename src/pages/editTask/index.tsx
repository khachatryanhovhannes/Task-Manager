import { SubmitHandler, useForm } from "react-hook-form";
import { ITask } from "../../models/interfaces";
import { useTranslation } from "react-i18next";
import { TaskModifield } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { editTask } from "../../redux/actions/taskActions";
import { ToastId, useToast } from "@chakra-ui/react";
import { toastOptions } from "../../helpers";
import { ToastStatus } from "../../models";
import { useEffect, useRef } from "react";

function EditTask() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams();
  const numericId = Number(id);
  const toast = useToast();
  const toastIdRef = useRef<ToastId | undefined>(undefined);
  const { isTaskEventLoading, taskEventError, isTaskModify } = useAppSelector(
    (state) => state.tasks
  );

  const task = useAppSelector((state) => state.tasks.tasks).find(
    (task) => numericId === task.id
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...task,
      dueDate: task?.dueDate.substring(0, 10),
    } as ITask,
    mode: "all",
  });

  const toastModify = (status: ToastStatus, message: string) => {
    if (status === ToastStatus.loading) {
      toastIdRef.current = toast(
        toastOptions({ status: status, message: message })
      );
    }
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, { status: status, title: message });
    }
  };

  useEffect(() => {
    if (isTaskEventLoading) {
      toastModify(ToastStatus.loading, t("TASKS_EVENT.EDIT_LOADING"));
    } else if (taskEventError) {
      toastModify(ToastStatus.error, t("TASKS_EVENT.EDIT_ERROR"));
    } else if (isTaskModify) {
      toastModify(ToastStatus.success, t("TASKS_EVENT.EDIT_SUCCESS"));
      navigate("/user/tasks");
    }
  }, [isTaskEventLoading, taskEventError, isTaskModify]);

  const onSubmit: SubmitHandler<ITask> = (data) => {
    dispatch(editTask(data));
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
}

export default EditTask;

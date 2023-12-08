import { SubmitHandler, useForm } from "react-hook-form";
import { ITask, ToastStatus } from "../../models";
import { useTranslation } from "react-i18next";
import { TaskModifield } from "../../components/templates";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { ToastId, useToast } from "@chakra-ui/react";
import { toastOptions } from "../../helpers";
import { addTask } from "../../redux/actions/taskActions";
import { useEffect, useRef } from "react";

function AddTask() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const toast = useToast();
  const toastIdRef = useRef<ToastId | undefined>(undefined);
  const { isTaskEventLoading, taskEventError, isTaskModify } = useAppSelector(
    (state) => state.tasks
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITask>({
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
      toastModify(ToastStatus.loading, "Task is adding");
    } else if (taskEventError) {
      toastModify(ToastStatus.error, "Task doesn't add!!");
    } else if (isTaskModify) {
      toastModify(ToastStatus.success, "Task added!");
      navigate("/user/tasks");
    }
  }, [isTaskEventLoading, taskEventError, isTaskModify]);

  const onSubmit: SubmitHandler<ITask> = (data) => {
    dispatch(addTask(data));
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

interface IToastOptionsProps {
    status: "success" | "error" | "loading";
    message: string;
}

export default function toastOptions({ status, message }: IToastOptionsProps) {
    return {
        description: message,
        status: status,
        duration: 5000,
        isClosable: true,
    };
}

import { FiAlertCircle } from "react-icons/fi";
import { FieldErrorProps } from "@/lib/types";

const FieldError = ({ id, message }: FieldErrorProps) => {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      className="flex items-center gap-1.5 text-[14px] font-normal text-(--error-600)"
    >
      <FiAlertCircle className="w-4 h-4 shrink-0" />
      <span>{message}</span>
    </p>
  );
};

export default FieldError;
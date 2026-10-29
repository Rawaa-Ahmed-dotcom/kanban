import { AuthCardProps } from "@/lib/types";
import Image from "next/image";

const AuthCard = ({title , subtitle , children} : AuthCardProps) => {
  return (
    <>
      <Image src="/s_logo.png" alt="Kanban Logo" width={48} height={48} />
      <h2 className="mt-6 mb-3 text-3xl font-semibold text-(--gray-900) text-center ">
        {title}
      </h2>
      <p className="text-(--gray-500) text-center">
       {subtitle}
      </p>
      {children}
    </>
  );
};

export default AuthCard;

import { GoogleButtonProps } from "@/lib/types";
import Button from "./Button"
import { FcGoogle } from "react-icons/fc";

const GoogleButton = ({content = "Sign in with Google"} : GoogleButtonProps) => {
  return (
    <Button variant = "outline" className="gap-1.5 hover:-translate-y-0.5">
        <FcGoogle size={24}/>
        <span className="text-(--gray-800)">{content}</span>
    </Button>
  )
}

export default GoogleButton

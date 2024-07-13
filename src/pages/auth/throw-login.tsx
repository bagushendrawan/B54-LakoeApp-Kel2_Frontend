import { Button } from "@/components/button";
import { useToast } from "@/components/use-toast";
import {LoginForm} from "@/features/login";
import { throwLoginToast } from "@/routes/__root";

export function ThrowLogin(){
    return(
        <>
        <LoginForm/>
        </>
    )
}
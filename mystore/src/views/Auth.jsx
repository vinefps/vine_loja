import { authUser } from "../controllers/AuthController"
import { useEffect } from "react"


export function Auth(){

    async function getAuth(){
        const res = await authUser();
        console.log(res);
    }
    useEffect(() => {
        getAuth();
    },[])
    
    return(<div>Rota Autorizada</div>)
}
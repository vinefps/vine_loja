
export async function authUser(){
    try{
        const res = await fetch('https://routeslogin-production.up.railway.app/auth')
        if(!res.ok){
            throw new Error("Erro no envio dos dados")
        }
        const data = await res.json();
        return data;

    }catch(error){
        console.error(error);
    }
}
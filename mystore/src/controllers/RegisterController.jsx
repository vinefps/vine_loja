
export async function registerUser(formData){
    try{
        const res = await fetch('https://routeslogin-production.up.railway.app/register',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        if(!res.ok){
            throw new Error("Erro no envio dos dados")
        }
        const data = await res.json();
        return data;

    }catch(error){
        console.error(error);
    }
}
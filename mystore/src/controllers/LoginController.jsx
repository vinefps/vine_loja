
export async function loginUser(formData){
    try{
        const res = await fetch('https://routeslogin-production.up.railway.app/login',{
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
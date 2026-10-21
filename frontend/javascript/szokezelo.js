const PostMethod = async (url,data) =>{
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {'Constent-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error("POST hiba: ", response.status);
        }
        return await response.json();
    }catch(error){
        throw new Error("Hiba: ", error.message);
    }
}

const GetMethod = async (url)=>{
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("GET hiba: ", response.status);
        }
        return await response.json();
    }catch(error){
        throw new Error("Hiba: ", error.message);
    }
}

document.addEventListener("DOMContentLoaded", async ()=>{
    document.getElementById("bevitelGomb").addEventListener("click", async ()=>{
        bevitel();
    })




    async function bevitel(){
        const bevitelInput = document.getElementById("bevitel");
        let bevitelErtek = bevitelInput.value;
        try{
            const postResponse = await PostMethod('/api/akasztofa/szokezelo', {
                szó: bevitelErtek
            })
            console.log("A post értéke: ",postResponse)
        }catch(error){
            console.error("Hiba történt.", error.message);
        }
        
    }
})
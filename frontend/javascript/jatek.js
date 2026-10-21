const { response } = require("express")

const postmethod = async(url, data)=>{
    try{
        const response = fetch(url, {
            method:'POST',
            headers: { 'Content-Type': 'application.json'},
            body: JSON.stringify(data)

        })
        if(!response.ok){
            throw new Error("Hiba a metodusban")
        }
        return await response.json()
    }
    catch(error)
    {
        throw new Error("Hiba történt")
    }
}

const getmethod = async(url)=>{
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Hiba a metodusban")
        }
        return await response.json()
    }
    catch(error)
    {
        throw new Error("Hiba történt")
    }
}



document.addEventListener("DOMContentLoaded", async()=>{
    document.getElementById("hozzaad").addEventListener('click', async()=>{

        try{
            let tippszoveg = document.getElementById("tipp")
            let tippgonb = document.getElementById("hozzaad")
            const getresponse = await getmethod('/api/akasztofa/szokezelo')
            console.log(getresponse)


        }
        catch(error)
        {

            console.log("hiba")

        }
    })

    


})
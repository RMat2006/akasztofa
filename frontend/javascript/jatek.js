
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
    let p = document.getElementById("atvettszo")
    const getresponse = await getmethod('/api/jatek')
    let tomb = []
    
    for(let i = 0;i < getresponse.szo.length; i++){
        tomb.push("_")
        p.innerHTML += tomb[i]+" "
    }

    document.getElementById("hozzaad").addEventListener('click', async()=>{
        
        p.innerHTML = ""
        const betu = document.getElementById("tipp")
        let ul = document.getElementsByTagName("ul")[0]
        let li = document.createElement("li")
        
        for(let i = 0;i < tomb.length; i++){
            if(betu.value == getresponse.szo[i]){
                tomb[i] = betu.value
                p.innerHTML += tomb[i]
                

                
                
            }
            else{
                p.innerHTML += tomb[i]
                li.innerText = betu.value
            
                  
            }
            
           

        }
        
     


    })
    
        
    


    
    
    


})
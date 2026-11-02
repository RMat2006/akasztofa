
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
    let body = document.getElementsByTagName("body")[0]
    let p = document.getElementById("atvettszo")
    const getresponse = await getmethod('/api/jatek')
    let tomb = []

    p.innerHTML = ""
    const betu = document.getElementById("tipp")
    let hiba = document.createElement("p")
    hiba.setAttribute("hidden", "")
    body.appendChild(hiba)

    let probak = document.createElement("p")
    probak.innerHTML = 20
    
    let ul = document.getElementsByTagName("ul")[0]
    
    let j = 0;
    let tombszova = ""
    console.log(getresponse.szo)
    for (let i = 0; i < tomb.length; i++){
        tombszova += tomb[i]
    }
    
    for(let i = 0;i < getresponse.szo.length; i++){
        tomb.push("_")
        p.innerHTML += tomb[i]+" "
    }

    document.getElementById("hozzaad").addEventListener('click', async()=>{
        
        if(betu.value.length > 1){
          
            hiba.innerHTML = "kérem egy karaktert adjon meg"
            hiba.removeAttribute("hidden")
        } 
        else{
            hiba.setAttribute("hidden", "")
            
            
            
            let talalte = false
            let li = document.createElement("li")
            for(let i = 0; i < 20; i++){
                for(let i = 0; i < tomb.length;i++){
                    if(getresponse.szo[i] == betu.value){
                        tomb[i] = betu.value
                        p.innerHTML = tomb
                        talalte = true
                    }
                    else{

                        if(i == tomb.length-1 && getresponse.szo[i] != betu.value && talalte == false){
                            talalte = false
                            li.innerHTML = betu.value
                  
                        }
                    }
                }
           
            
            }
            if(!talalte){
            ul.appendChild(li)
            probak.innerHTML = probak.innerHTML - 1
            body.appendChild(probak)


        }
        }
        
        
        
        
        
        
            
            
        
                
        
            

                
            
            
                
                
            
                  
            
            
           

        
       

        
     


    })
    
        
    


    
    
    


})
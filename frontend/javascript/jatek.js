
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
    probak.innerHTML = 15
    let probaszam = probak.innerHTML

    body.appendChild(probak)
    
    let ul = document.getElementsByTagName("ul")[0]
    
    let j = 0;
    let tombszova = ""
    
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
            for(let i = 0; i < 15; i++){
                for(let j = 0; j < tomb.length;j++){
                    if(getresponse.szo[j] == betu.value){
                        tomb[j] = betu.value
                        p.innerHTML = tomb
                        talalte = true
                    }
                    else{

                        if(j == tomb.length-1 && getresponse.szo[j] != betu.value && talalte == false){
                            talalte = false
                            li.innerHTML = betu.value
                            //
                            
                        }
                    }
                }
           
            
            }
            if(!talalte){
                ul.appendChild(li)
                probak.innerHTML = probak.innerHTML - 1
                probaszam = probak.innerHTML

            }

            if(!tomb.includes("_")){
                probak.innerHTML = "Nyertél"
            }
            console.log(probaszam)
            if(probaszam == 14){
                body.style.backgroundImage = `url('../images/akasztofa${1}.png')`
            }
            if(probaszam == 13){
                body.style.backgroundImage = `url('../images/akasztofa${2}.png')`
            }
            if(probaszam == 12){
                body.style.backgroundImage = `url('../images/akasztofa${3}.png')`
            }
            if(probaszam == 11){
                body.style.backgroundImage = `url('../images/akasztofa${4}.png')`
            }
            if(probaszam == 10){
                body.style.backgroundImage = `url('../images/akasztofa${5}.png')`

            }
            if(probaszam == 9){
                body.style.backgroundImage = `url('../images/akasztofa${6}.png')`

            }

            if(probaszam == 8){
                body.style.backgroundImage = `url('../images/akasztofa${7}.png')`

            }

            if(probaszam == 7){
                body.style.backgroundImage = `url('../images/akasztofa${8}.png')`
            }
            if(probaszam == 6){
                body.style.backgroundImage = `url('../images/akasztofa${9}.png')`
            }
            if(probaszam == 5){
                body.style.backgroundImage = `url('../images/akasztofa${10}.png')`
            }
            if(probaszam == 4){
                body.style.backgroundImage = `url('../images/akasztofa${11}.png')`
            }
            if(probaszam == 3){
                body.style.backgroundImage = `url('../images/akasztofa${12}.png')`
            }
            if(probaszam == 2){
                body.style.backgroundImage = `url('../images/akasztofa${13}.png')`
            }
            if(probaszam == 1){
                body.style.backgroundImage = `url('../images/akasztofa${14}.png')`
            }                
            if(probaszam == 0){
                body.style.backgroundImage = `url('../images/akasztofa${15}.png')`
                probak.innerHTML = "Vesztettél"
            }

            
        
        }

        

    })
    
        
    


    
    
    


})
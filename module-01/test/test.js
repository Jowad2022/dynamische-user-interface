let Nummer = Number(prompt('Hoeveel nummeres wil je in de ruit?')) + 2; 
let output = ""; 
for (let x = 0; x < Nummer; x++){     
    let list = []     
    for(let i = 1; i < x; i++ ){         
        list.push(i)         
        console.log(list)     
    }      
    let rij =  list.join("-");  
    document.createElement("pre") 
    document.write(rij + "<br>")
    // const parameter = document.createElement("pre")     
    // parameter.innerText = list.join("-");     
    // document.body.appendChild(parameter); 
}
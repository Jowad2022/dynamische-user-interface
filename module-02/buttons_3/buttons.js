colorslist= ["green","red","purple","blue","black"];

for(let i = 0; i< 30; i++){
    var div = document.createElement('button');
    div.style.backgroundColor= colorslist[0]
    div.setAttribute("id", i)
    div.setAttribute("onclick", "colorchange("+i+")")
    div.textContent = i + " click me!"
    container.appendChild(div)
}
function colorchange(kleur){
    colorindex = document.getElementById(kleur).style.backgroundColor
    nr=colorslist.indexOf(colorindex)
    console.log(nr)
    document.getElementById(kleur).style.backgroundColor = colorslist[nr+1]
    if ((nr+1)==colorslist.length-1){
        document.getElementById(kleur).remove()
    }
}
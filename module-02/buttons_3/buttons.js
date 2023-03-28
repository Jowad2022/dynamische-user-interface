colorslist= ["red","purple","blue","black"];

for(let i = 0; i< 30; i++){
    var div = document.createElement('button');
    div.setAttribute("id", i)
    div.setAttribute("onclick", "colorchange("+i+")")
    div.textContent = "click me"
    container.appendChild(div)
}
function colorchange(kleur){
    colorindex = document.getElementById(kleur)
    colorindex in indexof(colorslist)
    if ((colorindex[1+1])==colorslist.length)
        button.remove()
    else
        colorindex + 1
}
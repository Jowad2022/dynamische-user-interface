colorslist= ["red","purple","blue","black"];

for(let i = 0; i< 30; i++){
    var div = document.createElement('button');
    div.setAttribute("id", i)
    div.setAttribute("onclick", "colorchange("+i+")")
    div.textContent = "click me"
    container.appendChild(div)
}

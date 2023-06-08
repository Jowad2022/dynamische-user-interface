for(let partijen = 0; partijen< 3; partijen++){
    var div = document.createElement('button');
    div.style.backgroundColor= "lightblue"
    div.setAttribute("id", partijen)
    div.setAttribute("onclick", "colorchange("+partijen+")")
    div.textContent = partijen + " partij"
    container.appendChild(div)
}
for(let inleveren = 0; inleveren< 1; inleveren++){
    var div = document.createElement('button');
    div.style.backgroundColor= "lightblue"
    div.setAttribute("id", inleveren)
    div.setAttribute("onclick", "colorchange("+inleveren+")")
    div.textContent = " partij"
    container.appendChild(div)
}
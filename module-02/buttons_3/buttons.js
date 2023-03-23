colorslist= ["red","purple","blue","black"];
count = -1
function buttons(){
    for(let i = 0; i< 30; i++){
        var div = document.createElement('button');
        div.setAttribute("id", i)
        div.setAttribute("onclick", i)
        div.textContent = "click me"
        container.appendChild(div)
        div.addEventListener("click", function () {
        onclick = count = count + 1; 
        document.getElementById(i).style.backgroundColor = colorslist[count]
        console.log(count)
        }) 
    }
}
buttons()

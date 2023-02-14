let getal = prompt("voer een getal in. :")
		for (let i = 0; i < getal; i++){
			let numb = []

			for(let j = 0; j < i + 1; j++){
				numb.push(j+1)
			}
			let rij = numb.join("-")
			document.write(rij + "<br>")
		}


		for (let i = getal; i > 0; i--){
			let numb = []
			console.log("test"+ i)

			for(let j = 1; j <i; j++){
				numb.push(j)
			}
			let rij = numb.join("-")
			document.write(rij + "<br>")
		}
		
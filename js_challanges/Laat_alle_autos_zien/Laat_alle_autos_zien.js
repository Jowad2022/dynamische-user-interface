function makelist(){
let cars = [
    "Audi A3",
    "BMW 3 Series",
    "Chevrolet Camaro",
    "Dodge Charger",
    "Ford Mustang",
    "Honda Civic",
    "Infiniti Q50",
    "Jaguar F-Type",
    "Kia Optima",
    "Lamborghini Huracan",
    "Mercedes-Benz C-Class",
    "Ferrari F8 Tributo",
    "Nissan Altima",
    "Porsche 911",
    "Range Rover Evoque",
    "Subaru Impreza",
    "Ferrari SF90 Stradale",
    "Tesla Model S",
    "Toyota Corolla",
    "Volkswagen Golf",
    "Acura NSX",
    "Bentley Continental",
    "Cadillac Escalade",
    "Ferrari 488 GTB",
    "Dodge Challenger",
    "Ferrari 458",
    "GMC Sierra",
    "Hyundai Elantra",
    "Jeep Grand Cherokee",
    "Ferrari SF90 Stradale",
    "Koenigsegg Agera",
    "Lexus LS",
    "Maserati GranTurismo",
    "Nissan GT-R",
    "Pagani Huayra",
    "Rolls-Royce Ghost",
    "Smart ForTwo",
    "Tesla Model X",
    "Toyota Prius",
    "Volkswagen Jetta",
    "Alfa Romeo Giulia",
    "Bugatti Chiron",
    "Chevrolet Corvette",
    "Ferrari Portofino",
    "Fiat 500",
    "GMC Yukon",
    "Honda Accord",
    "Jaguar XJ",
    "Kia Soul",
    "Lamborghini Aventador",
    "Mercedes-Benz E-Class",
    "Nissan Maxima",
    "Porsche Panamera",
    "Range Rover Sport",
    "Subaru Legacy",
    "Tesla Model 3",
    "Toyota Camry",
    "Volkswagen Passat"
    ];
    cars.sort();
    console.log(cars[20]);

    let listContainer = document.createElement('div');
    let ul= document.createElement('ul');
    ul.setAttribute("id","lijst")
    document.body.appendChild(listContainer);
    listContainer.appendChild(ul);
    let numberOfcars = cars.length;

    for (let i = 0; i < numberOfcars; ++i) {
        li = document.createElement('li');
        li.textContent = cars[i];
        if (cars[i].includes("Ferrari"))
            li.setAttribute("class", "red")
        if (cars[i].includes("Mercedes"))
            li.setAttribute("class", "purple")
        ul.appendChild(li);
        
    }
}
makelist();

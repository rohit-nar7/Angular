//Declare global container constant to represent <div> container


const container = document.getElementById("div");
//Define Fruit Object type with required properties
type Fruits = {
    name: string;
    image: string;
    price: string;
    unit: string;
}

//Fetch data from server using getFruits() method
function getFruits() {
   fetch("http://localhost:3000/fruits").then(response => response.json())
    .then(res => {transform(res);
    });
    
}


//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(fruits: any) {
    fruits.forEach((element:any) => {
        let transformedFruit = {
            id: element.id,
            name: element.name,
            price: element.price,
            image: element.image,
            unit: element.unit
        }
        showFruit(transformedFruit);
    });
}

//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(transformedFruit:any) {
   
    let card = document.createElement('span');
    card.style.display = 'inline-block';
    card.style.textAlign = 'center';
    card.style.marginLeft = '150px';
    card.style.marginTop = '50px';
    
    container?.appendChild(card);
    
    

    let img = document.createElement("img");
    img.setAttribute("src", transformedFruit.image);
    img.style.width = "200px";
    img.style.height = "150px";
    card.appendChild(img);
    

    let title = document.createElement("h4");
    title.appendChild(document.createTextNode(transformedFruit.name));
    card.appendChild(title);
    

    let content = document.createElement("p");
    content.appendChild(document.createTextNode("Price:$"+transformedFruit.price+" per "+transformedFruit.unit));
    card.appendChild(content);
    card.className = 'card';


    
   


}

//Call getFruits() method globally
getFruits();

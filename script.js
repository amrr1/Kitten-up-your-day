const url = "https://api.thecatapi.com/v1/images/search"; 

const section = document.querySelector(".container"); 
const button = document.querySelector(".btn"); 

button.addEventListener("click", getRandomCats); 

getCats = (json) => {
    let photo = json[0].url
    section.classList.add("cats")

    let catImage = document.createElement("img")
    catImage.src = photo; 
    catImage.classList.add("random_cats")
    catImage.alt = photo;
    section.appendChild(catImage)
}; 

async function getRandomCats(){
    section.innerHTML = ""
    try{
        const response  = await fetch(url)
        const json = await response.json()

        return getCats(json)
    }catch{
        console.log("This is an error");
        console.log(e);
    }
}

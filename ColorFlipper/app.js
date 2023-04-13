const colors = ["red" , "green", "blue","yellow"]

const btn = document.getElementById("btn")

const color = document.querySelector(".color")

btn.addEventListener('click',function(){
    // taking random number btw 0 - 3

    const randomNumber = getRandomNumber();
    
    document.body.style.background = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){

    return Math.floor(Math.random()*colors.length);

}


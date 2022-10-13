let btn = document.getElementById("button");

btn.addEventListener("click", colorChanger);

const randomColor = ()=>{
    let val = "01234567890ABCDEF";
    let hash = "#";

    for(let i=0; i<6; i++){
        hash = hash + val[Math.floor(Math.random() * 16)];
    }
    console.log(hash);
    return hash;
} 

function colorChanger(){
    let canvas = document.getElementById("canvas");
    canvas.style.backgroundColor = randomColor();
}
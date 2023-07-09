function randomNumber() {
    const number=Math.floor(Math.random()* 16777215);
    const code="#"+number.toString(16);
    document.body.style.backgroundColor=code;
    document.querySelector("h2").style.color=code;
    document.querySelector("h2").innerText=code;

    navigator.clipboard.writeText(code);
    
}
//event call
document.getElementById("btn").addEventListener("click",randomNumber);

//init call
randomNumber();

document.querySelector("h2").style.color=code;

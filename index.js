for(var i=0; i< document.getElementsByClassName("drum").length;i++){

    document.getElementsByClassName("drum")[i].addEventListener("click",function(){
    buttonLetter=this.innerHTML;
    sound(buttonLetter);
    animation(buttonLetter); 
});}

document.addEventListener("keydown",function(){
    sound(event.key);
    animation(event.key);
})

function sound(key){
    switch (key) {
        case "w":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function animation(keyPress){
    var pressedKey=document.querySelector("."+keyPress);
    pressedKey.classList.add("pressed");
    setTimeout(function(){pressedKey.classList.remove("pressed");},100);
}
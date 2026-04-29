var button = document.getElementById("Bon");
var img = document.getElementById("img1");
var imgTrigger = 0;

button.onclick = function(){
    if(button.innerHTML == "DON´T CLICK!"){
        button.innerHTML = "I SAID DON´T CLICK!";
    }else if(button.innerHTML == "I SAID DON´T CLICK!"){
        button.innerHTML = "ARE YOU SURE?";
    }else if(button.innerHTML == "ARE YOU SURE?"){
        button.innerHTML = "OK! I´LL LET YOU CLICK.";
    }
}
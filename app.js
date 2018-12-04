
//Variables
var uno = document.querySelector(".text1");
var dos = document.querySelector(".text2");
var tres = document.querySelector(".text3");
var username = document.querySelector(".username");


//Variables Condición
var usernameCondition = document.querySelector(".text4");
var answer = document.querySelector(".text5");

//Tiempo
setTimeout(function() {
  uno.style.display = "block";
}, 1000);

setTimeout(function() {
  dos.style.display = "block";
}, 3000);

setTimeout(function() {
  tres.style.display = "block";
}, 6000);

setTimeout(function() {
  username.style.display = "block";

  username.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
    	if (username.value.length <= 2){
    		usernameCondition.textContent = "Es necesario ingresar un nombre de usuario válido";
    		answer.textContent = "";
    	} else if (username.value.length >= 6){
    		
    		
    		usernameCondition.textContent = "That's a long name.";
    		answer.textContent = "Nice to meet you, " + username.value;
    	} else{
    	
    
    		usernameCondition.textContent ="That's a short name.";
    		answer.textContent = "Nice to meet you, " + username.value;
    	}
    }
});

}, 8000);




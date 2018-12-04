
//Variables
var uno = document.querySelector(".text1");
var dos = document.querySelector(".text2");
var tres = document.querySelector(".text3");
var username = document.querySelector(".username");
var icono = document.querySelector(".fa-user-alt")


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
}, 5000);

setTimeout(function() {
  icono.style.display = "block";
}, 6000);

setTimeout(function() {
  username.style.display = "block";

  username.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
    	if (username.value.length <= 2){
    		usernameCondition.style.display = "block";
    		usernameCondition.textContent = "Es necesario ingresar un nombre de usuario válido";
    	} else if (username.value.length >= 6){	
    		usernameCondition.style.display = "block";
    		usernameCondition.textContent = "That's a long name.";
    		setTimeout(function(){
    			answer.style.display = "block";
  				answer.textContent = "Nice to meet you, " + username.value;
  				}, 1000);
    		
    	} else{
    		usernameCondition.style.display = "block";
    		usernameCondition.textContent ="That's a short name.";
    		setTimeout(function(){
    			answer.style.display = "block";
  				answer.textContent = "Nice to meet you, " + username.value;
  				}, 1000);
    		
    	}
    }
    
});

  

}, 8000);




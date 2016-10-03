$(document).ready(function(){
	//votre code
	var compteur = 0;
$("#img").click(function(){
$("span").text(++compteur);

if(compteur % 20 === 0){
	alert("vous êtes a la 20eme valeur ")
}

});

});
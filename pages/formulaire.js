//Pour formulaire contact
let formulaire=document.getElementById('formulaire');
let paragraphe=document.getElementById('paragraphe');
let nom=document.getElementById('nom');
let prenom=document.getElementById('prenom');
let email=document.getElementById('email');
let message=document.getElementById('message');

//fonction survol
function survol(champ){
    champ.style.backgroundColor="#87CEEB";
}
//fonction non survol
function nonsurvol(champ){
    champ.style.backgroundColor="";
}
 //utimisation au survol
nom.addEventListener('mouseover', function(){
    survol(nom)

})
prenom.addEventListener('mouseover', function(){
    survol(prenom)
})
email.addEventListener('mouseover', function(){
    survol(email)
})
message.addEventListener('mouseover', function(){
    survol(message)
})
//utimisation au non survol
nom.addEventListener('mouseout', function(){
    nonsurvol(nom)

})
prenom.addEventListener('mouseout', function(){
    nonsurvol(prenom)
})
email.addEventListener('mouseout', function(){
    nonsurvol(email)
})
message.addEventListener('mouseout', function(){
    nonsurvol(message)
})

formulaire.addEventListener('submit', function(e){
    e.preventDefault();
    let nom=document.getElementById('nom').value.trim();
    let prenom=document.getElementById('prenom').value.trim();
    let email=document.getElementById('email').value.trim();
    let message=document.getElementById('message').value.trim();
    
  if(nom=='' || prenom=='' || email=='' || message=='')
    {
        alert('veuillez renseigner les champs');
   }
  else
    {
       paragraphe.innerHTML="<p class='text-green-600 font-semibold'>Message envoyé avec succès !</p>";
       formulaire.reset();
       setTimeout(() => {
      paragraphe.innerHTML = '';
    }, 20000);
    } 
});

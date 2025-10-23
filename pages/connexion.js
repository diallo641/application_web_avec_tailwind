let connexion=document.getElementById('connexion');
let message=document.getElementById('message');

connexion.addEventListener('submit', function(e)
{
    e.preventDefault();
 let email=document.getElementById('email').value.trim();
 let motdepasse=document.getElementById('motdepasse').value.trim();
 if(email=='' || motdepasse=='')
    {
       message.innerHTML="<p class='text-red-600 font-semibold'>Veuillez renseigné les champs !</p>";
    }
else  if(email=="boubacar95@outlook.fr" && motdepasse=="Passer123" || email=='daouda@gmail.com' && motdepasse=='Ba123')
      {
        message.innerHTML="<p class='text-green-600 font-semibold'>Connexion avec succés !</p>";
       window.location.href="./pages/accueil.html"
      }
  else{
     alert('email ou mot de passe incorect')
     document.getElementById('email').value = "";
     document.getElementById('motdepasse').value = "";

 }
}
)
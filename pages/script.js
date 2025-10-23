// Sélection des éléments
let nombre = document.getElementById('nombre');
let boutons = document.querySelectorAll('.btn-panier');
let noms = document.querySelectorAll('.nom-produit');
let prix = document.querySelectorAll('.prix-produit');
let contenuPanier = document.getElementById('contenu-panier');

// Variables
let panier = [];
let count = 0;

// Fonction pour mettre à jour le compteur
function afficherCompteur() {
  nombre.innerHTML = `
    🛒 <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
      ${count}
    </span>
  `;
}

// Initialiser le compteur
afficherCompteur();

// Ajouter un produit au panier
boutons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    panier.push({
      nom: noms[i].textContent,
      prix: prix[i].textContent
    });
    count++;
    afficherCompteur();
  });
});

// Afficher / cacher le contenu du panier
nombre.addEventListener('click', () => {
  contenuPanier.classList.toggle('hidden');

  if (!contenuPanier.classList.contains('hidden')) {
    if (panier.length === 0) {
      contenuPanier.innerHTML = "<p class='text-gray-500 text-sm'>Votre panier est vide.</p>";
    } else {
      // Message avant les produits
      let contenu = "<p class='font-semibold mb-2'>Voici le contenu de votre panier :</p>";

      // Liste des produits
      let total = 0;
      for (let i = 0; i < panier.length; i++) {
        contenu += `
          <div class="flex justify-between border-b py-1 text-sm">
            <span>${i+1}</span>
            <span>${panier[i].nom}</span>
            <span>${panier[i].prix} </span>
          </div>`;
        total += parseFloat(panier[i].prix); // Calcul du total
      }

      // Afficher le total
      contenu += `<div class="flex justify-between font-bold mt-2">
                    <span>Total</span>
                    <span>${total} €</span>
                  </div>`;
      contenu += `<div class="btn-panier mt-4 px-4 py-2 bg-nile-blue-700 text-white rounded-lg hover:bg-cyan-700">
             <button id='commander' class="block w-full mb-2 bg-green-600 text-white px-4 py-2 rounded">Commander</button>
            <button id='annuler' class="block w-full bg-red-600 text-white px-4 py-2 rounded">Annuler</button>
            </div>`; 
     contenuPanier.innerHTML=contenu;
    }
  }
});
contenuPanier.addEventListener('click', function(e) {
  if (e.target.id === 'commander') 
    
    {
    contenuPanier.innerHTML = "<p class='text-green-600 font-semibold'>Commande ajoutée avec succès !</p>";
    panier = [];
    count = 0;
    afficherCompteur();
    setTimeout(() => {
        contenuPanier.classList.add('hidden'); // ou tu peux réafficher la liste du panier si tu veux
    }, 3000); 
    count.innerHTML=0;
  }
  if (e.target.id === 'annuler') {
     alert('Voulez-vous confirmer la commande ?');
    contenuPanier.innerHTML = "<p class='text-red-600 font-semibold'>Commande annulée !</p>";
    panier = [];
    count = 0;
    afficherCompteur();
    setTimeout(() => {
        contenuPanier.classList.add('hidden'); // ou tu peux réafficher la liste du panier si tu veux
    }, 3000); 
  }
});


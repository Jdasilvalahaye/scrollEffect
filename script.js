// Créer un événement au scroll
window.addEventListener("scroll", (e) => {
  // Navbar effect. scrollY = position du haut de la barre de scroll
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  // Faire apparaitre l'image de la partie du site "improvise"
  // Pb : il faut définir où l'image pop mais selon la taille de l'écran, la hauteur du body n'est plus la même en pixel
  // On va la faire apparaitre à un % du body, ce qui est beaucoup plus simple
  // Dans notre formule on a window.scrollY + window.innerHeight, ce qui correspond à la position du bas de la barre de scroll (sinon c'est que le haut)
  // document.body.offsetheight = taille du body
  // Donc on fait : position du scroll / taille du body
  // On dit : quand on est à 45% de la page, fait apparaitre l'image
  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  }

  // La newsletter
  // La popup existe déjà en html et css
  // On met transform none car en css elle est en négatif pour être cachée
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
  }
  // On ajoute un event sur le bouton de la popup
  // Quand on clique sur le bouton, elle redevient invisible + on lui donne un effet de déplacement avec le transform.
  // L'effet n'est pas brutal car il y a une transition dans le css
  closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)";
  });
});

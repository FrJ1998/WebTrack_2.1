var grille = document.getElementById("grille");

function melange() {
    for (i = 0; i < 20; i++) {
        grille.appendChild(grille.children[Math.random() * 9 |0]); //.appendChild ajoute à la fin le node
    }
}

melange();
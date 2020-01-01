var grille = document.getElementById("grille");

function melange() {
    for (i = 0; i < 20; i++) {
        grille.appendChild(grille.children[Math.random() * 9 |0]); //.appendChild ajoute à la fin le node
    }
    document.getElementById("i0").src = "Images/0.png";
    document.getElementById("i1").src = "Images/1.png";
    document.getElementById("i2").src = "Images/2.png";
    document.getElementById("i3").src = "Images/3.png";
    document.getElementById("i4").src = "Images/4.png";
    document.getElementById("i5").src = "Images/5.png";
    document.getElementById("i6").src = "Images/6.png";
    document.getElementById("i7").src = "Images/7.png";
    document.getElementById("vide").src = "Images/vide.png";
    move = true;
}

melange();

function victoire() {
    for (i = 0; i < 8; i++) {
        if (Number(grille.children[i].id) !== i) {
            return 0;
        }
    }
    document.getElementById("i0").src = "Images/v0.png";
    document.getElementById("i1").src = "Images/v1.png";
    document.getElementById("i2").src = "Images/v2.png";
    document.getElementById("i3").src = "Images/v3.png";
    document.getElementById("i4").src = "Images/v4.png";
    document.getElementById("i5").src = "Images/v5.png";
    document.getElementById("i6").src = "Images/v6.png";
    document.getElementById("i7").src = "Images/v7.png";
    document.getElementById("vide").src = "Images/v8.png";
    alert('Victoire !!!');
    return 0;
}

function indice(k) { //indice(k) retourne la position de la case d'id "k"
    for (i = 0; i < 9; i++) {
        if (k == grille.children[i].id) {
            return i;
        }
    }
}

function a_cote(i, j) {
    if (i%3 === j%3 && Math.abs((i/3 |0) - (j/3 |0)) === 1) { //i%3 donne la ligne
        return true;
    } else return Math.abs(i - j) === 1 && (i / 3 | 0) === (j / 3 | 0);
}

function echange(i, j) {
    var copie1 = grille.children[i].cloneNode([true]);
    var copie2 = grille.children[j].cloneNode([true]);
    grille.replaceChild(copie1, grille.children[j]);
    grille.replaceChild(copie2, grille.children[i]);
}

function bouge(k) {
    var i = indice(k);
    var j = indice(8);
    if (a_cote(i,j)) {
        echange(i,j);
        victoire();
    }
}
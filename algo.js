let phrase = 'Bonjour chers tous.';
let voyelles = 'aeiuoy'
function countLetter(tab1, tab2) {
    let countL = 0;
    let countE = 0;
    let nbrLettre;
    let nbrMots;
    let nbrVoyelle = 0;
    for (let lettre of tab1) {
        if (lettre === ' ') {
            countE++;
            nbrMots = countE + 1;
        }
        if (lettre !== '.') {
            countL++;
            nbrLettre = countL - countE;
        }
    }

    for (const letter of tab1) {
        for (const voyelle of tab2 ) {
            if (letter == voyelle) {
                nbrVoyelle++;
            }
        }
    }
    return `Il y a ${nbrLettre} caractère, ${nbrMots} mots et ${nbrVoyelle} voyelle`;
}


console.log(countLetter(phrase,voyelles));
